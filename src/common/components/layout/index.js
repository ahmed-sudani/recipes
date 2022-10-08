import { Footer, Nav } from '../navigation'

export function Layout(props) {
  return (
    <>
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
