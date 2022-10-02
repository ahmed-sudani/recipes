import Recipe from '../../../models/recipe'
import connectMongo from '../../../util/connectMongo'
import validate from '../../../lib/middlewares/validation'
import Joi from 'joi'
import connect from 'next-connect'
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

async function handler(req, res) {
  try {
    await connectMongo()
    const newRecipe = await Recipe.create(req.body)
    res.status(201).json(newRecipe)
  } catch (error) {
    res.json({ error })
  }
}

const schema = Joi.object().keys({
  name: Joi.string().min(5).max(50).required(),
  image: Joi.string().uri().max(100).required(),
  country: Joi.string().min(5).max(50).required(),
  time: Joi.number().max(180).required(),
  ingredients: Joi.alternatives()
    .try(Joi.array().items(Joi.string()), Joi.string().min(5).max(100))
    .required(),
})

export default connect().post(validate({ body: schema }), handler)
