import { Schema, model, models } from 'mongoose'
const recipeSchema = new Schema({
  name: String,
  time: Number,
  country: String,
  image: String,
  ingredients: [String],
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
})

const Recipe = models.Recipe || model('Recipe', recipeSchema)

export default Recipe
