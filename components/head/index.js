import NextHead from 'next/head'

export default function Head(props) {
  return (
    <NextHead>
      <title data-testid={props.title}>{props.title}</title>
      <meta
        data-testid={props.description}
        name="description"
        content={props.description}
      />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}
