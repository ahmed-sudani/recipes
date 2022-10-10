import { SessionProvider } from 'next-auth/react'
import NextNProgress from 'nextjs-progressbar'
import { Layout } from '../common/components'
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <NextNProgress />
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
