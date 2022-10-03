import Joi from 'joi'
import nc from 'next-connect'
import auth from '../../../lib/middleware/auth'
import validate from '../../../lib/middleware/validation'
import Recipe from '../../../models/recipe'
import connectMongo from '../../../util/connectMongo'

const schema = Joi.object().keys({
  name: Joi.string().min(5).max(50).required(),
  image: Joi.string().uri().max(100).required(),
  country: Joi.string().min(5).max(50).required(),
  time: Joi.number().max(180).required(),
  ingredients: Joi.alternatives()
    .try(Joi.array().items(Joi.string()), Joi.string().min(5).max(100))
    .required(),
  creator: Joi.string().required(),
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
      const recipes = await Recipe.find({})
      res.status(200).json(recipes)
    } catch (error) {
      res.json({ error })
    }
  })
  .post(auth, validate({ body: schema }), async (req, res) => {
    try {
      await connectMongo()
      const newRecipe = await Recipe.create({ ...req.body, creator: req.user })
      res.status(201).json(newRecipe)
    } catch (error) {
      res.json({ error })
    }
  })

export default handler
