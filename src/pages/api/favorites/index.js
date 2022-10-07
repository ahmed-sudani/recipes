import nc from 'next-connect'
import auth from '../../../lib/middleware/auth'
import Favorites from '../../../models/favorite'
import connectMongo from '../../../common/util/connectMongo'

const handler = nc({
  onError: (err, req, res, next) => {
    res.status(500).end('Something broke!')
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found')
  },
}).get(auth, async (req, res) => {
  try {
    await connectMongo()
    let { recipes } = await Favorites.findOne({ user: req.user })
      .populate('recipes')
      .exec()
    recipes = recipes.map((item) => ({ ...item._doc, favorite: true }))

    res.status(200).json(recipes)
  } catch (error) {
    res.json({ error })
  }
})

export default handler
