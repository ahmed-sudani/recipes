import Joi from 'joi'

const recipesSchema = Joi.object().keys({
  name: Joi.string().min(5).max(50).required(),
  image: Joi.string().uri().max(100).required(),
  country: Joi.string().min(2).max(50).required(),
  time: Joi.number().min(1).max(180).required(),
  ingredients: Joi.alternatives()
    .try(
      Joi.array().items(Joi.string().required()),
      Joi.string().min(5).max(100).required()
    )
    .required(),
})
export { recipesSchema }
