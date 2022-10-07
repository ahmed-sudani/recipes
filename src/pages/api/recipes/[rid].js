import { getToken } from 'next-auth/jwt'
import nc from 'next-connect'
import auth from '../../../lib/middleware/auth'
import Favorites from '../../../models/favorite'
import Recipe from '../../../models/recipes'
import connectMongo from '../../../common/util/connectMongo'
const secret = process.env.NEXT_AUTH_SECRET

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
      let recipe = await Recipe.findById(req.query.rid)

      const token = await getToken({
        req,
        secret,
      })

      let isFavorite = false,
        isCreator = false

      if (!token) {
        return res
          .status(200)
          .json({ recipe: recipe._doc, isFavorite: isFavorite, isCreator })
      }

      const isFavoriteQuery = {
        user: token.sub,
        recipes: { $in: [recipe._id] },
      }

      isFavorite = await Favorites.exists(isFavoriteQuery)
      isCreator = recipe.creator == token.sub

      return res
        .status(200)
        .json({ recipe: recipe._doc, isFavorite: !!isFavorite, isCreator })
    } catch (error) {
      res.status(404).json({ message: 'recipe not found' })
    }
  })
  .delete(auth, async (req, res) => {
    try {
      await connectMongo()
      await Recipe.deleteOne({
        _id: req.query.rid,
        creator: req.user,
      })

      res.status(200).end()
    } catch (error) {
      res.status(404).json({ message: 'recipe not found' })
    }
  })

export default handler
