import { Schema, model, models } from 'mongoose'
const favoritesSchema = new Schema({
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Recipes',
    },
  ],
  user: {
    unique: true,
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
})

const Favorites = models.Favorites || model('Favorites', favoritesSchema)

export default Favorites
