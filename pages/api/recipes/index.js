import Joi from 'joi'
import { getToken } from 'next-auth/jwt'
import nc from 'next-connect'
import auth from '../../../lib/middleware/auth'
import validate from '../../../lib/middleware/validation'
import Favorites from '../../../models/favorite'
import Recipe from '../../../models/recipes'
import connectMongo from '../../../util/connectMongo'
const secret = process.env.NEXT_AUTH_SECRET

const schema = Joi.object().keys({
  name: Joi.string().min(5).max(50).required(),
  image: Joi.string().uri().max(100).required(),
  country: Joi.string().min(2).max(50).required(),
  time: Joi.number().max(180).required(),
  ingredients: Joi.alternatives()
    .try(Joi.array().items(Joi.string()), Joi.string().min(5).max(100))
    .required(),
})

const handler = nc({
  onError: (err, req, res, next) => {
    res.status(500).end('Something broke!')
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found')
  },
})
  .get(async (req, res) => {
    try {
      await connectMongo()
      let recipes = await Recipe.find({}).limit(10)

      const token = await getToken({
        req,
        secret,
      })

      if (!token) {
        recipes = recipes.map((item) => ({ ...item._doc, favorite: false }))
        return res.status(200).json(recipes)
      }

      const recipesIds = recipes.map((item) => item.id)

      let { recipes: favoritesIds } = await Favorites.findOne({
        user: token.sub,
        recipes: { $in: recipesIds },
      })

      const favoritesIdSet = new Set(
        favoritesIds.map((item) => item.toString())
      )

      const recipesWithFav = recipes.map((item) => {
        return { ...item._doc, favorite: favoritesIdSet.has(item.id) }
      })

      res.status(200).json(recipesWithFav)
    } catch (error) {
      res.json({ error })
    }
  })
  .post(auth, validate({ body: schema }), async (req, res) => {
    try {
      await connectMongo()
      const newRecipe = await Recipe.create({ ...req.body, creator: req.user })
      const query = { user: req.user },
        update = { $push: { recipes: newRecipe._id } },
        options = { upsert: true, new: true, setDefaultsOnInsert: true }
      await Favorites.findOneAndUpdate(query, update, options)
      res.status(201).json(newRecipe)
    } catch (error) {
      res.json({ error })
    }
  })

export default handler
