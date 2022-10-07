import { getToken } from 'next-auth/jwt'

/**
 * @param {import('next').NextApiRequest} req
 */

const secret = process.env.NEXT_AUTH_SECRET

export default async function auth(req, res, next) {
  const token = await getToken({ req, secret })

  if (!token) {
    return res.status(401).json({ message: 'login required' })
  }

  req.user = token.sub

  return next()
}
