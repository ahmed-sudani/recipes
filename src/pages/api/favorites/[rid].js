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
}).put(auth, async (req, res) => {
  try {
    await connectMongo()

    const isFavoriteQuery = {
      user: req.user,
      recipes: { $in: [req.query.rid] },
    }

    const favId = await Favorites.exists(isFavoriteQuery)

    if (favId) {
      const update = { $pullAll: { recipes: [req.query.rid] } }
      await Favorites.findByIdAndUpdate(favId._id, update)
      return res.status(200).json({ message: 'deleted' })
    }

    const query = { user: req.user },
      update = { $push: { recipes: req.query.rid } },
      options = { upsert: true, new: true, setDefaultsOnInsert: true }
    await Favorites.findOneAndUpdate(query, update, options)

    res.status(200).json({ message: 'added' })
  } catch (error) {
    res.status(404).json({ message: 'recipe not found' })
  }
})

export default handler
