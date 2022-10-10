import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
const secret = process.env.NEXT_AUTH_SECRET

/**
 * @param {import('next').NextApiRequest} req
 */

export async function middleware(req) {
  if (req.nextUrl.pathname == '/') {
    req.nextUrl.pathname = '/home'
    return NextResponse.redirect(req.nextUrl)
  }

  const token = await getToken({ req, secret })
  if (!token) {
    req.nextUrl.searchParams.set('callbackUrl', req.url)
    req.nextUrl.pathname = '/auth/signin'
    return NextResponse.redirect(req.nextUrl)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/favorites', '/new', '/'],
}
