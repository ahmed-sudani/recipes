import axios from 'axios'
import nc from 'next-connect'
import auth from '../../../lib/middleware/auth'

const axiosConfig = {
  headers: {
    Authorization: process.env.PEXELS_API_KEY,
  },
}

const handler = nc({
  onError: (err, req, res, next) => {
    res.status(500).end('Something broke!')
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found')
  },
}).get(auth, async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://api.pexels.com/v1/search?query=${req.query.query}, &per_page=1`,
      axiosConfig
    )
    const imageSrc =
      data.photos[0].src[req.query.size] ?? data.photos[0].src['original']
    res.json({ image: imageSrc })
  } catch (error) {
    res.status(400).end()
  }
})

export default handler
