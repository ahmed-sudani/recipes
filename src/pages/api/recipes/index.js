import Joi from 'joi'
import { getToken } from 'next-auth/jwt'
import nc from 'next-connect'
import auth from '../../../lib/middleware/auth'
import validate from '../../../lib/middleware/validation'
import Favorites from '../../../models/favorite'
import Recipe from '../../../models/recipes'
import connectMongo from '../../../common/util/connectMongo'
const secret = process.env.NEXT_AUTH_SECRET

const schema = Joi.object().keys({
  name: Joi.string().min(5).max(50).required(),
  image: Joi.string().uri().max(100).required(),
  country: Joi.string().min(2).max(50).required(),
  time: Joi.number().max(180).required(),
  ingredients: Joi.alternatives()
    .try(
      Joi.array().items(Joi.string().required()),
      Joi.string().min(5).max(100).required()
    )
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
      let searchQuery = {}
      if (req.query.name) {
        searchQuery['name'] = req.query.name
      }

      if (req.query.country) {
        searchQuery['country'] = req.query.country
      }

      if (req.query.time) {
        searchQuery['time'] = req.query.time
      }

      let recipes = await Recipe.find(searchQuery).limit(10)

      const token = await getToken({
        req,
        secret,
      })

      if (!token) {
        recipes = recipes.map((item) => ({ ...item._doc, favorite: false }))
        return res.status(200).json(recipes)
      }

      const recipesIds = recipes.map((item) => item.id)

      let favoritesIds = await Favorites.findOne({
        user: token.sub,
        recipes: { $in: recipesIds },
      })

      if (!favoritesIds) {
        recipes = recipes.map((item) => ({ ...item._doc, favorite: false }))
        return res.status(200).json(recipes)
      }

      const favoritesIdSet = new Set(
        favoritesIds.recipes.map((item) => item.toString())
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
