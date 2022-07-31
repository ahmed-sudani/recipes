import NextHead from 'next/head'

export default function Head(props) {
  return (
    <NextHead>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}
