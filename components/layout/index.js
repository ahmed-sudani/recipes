import Footer from '../footer'
import Nav from '../nav'

export default function Layout(props) {
  return (
    <>
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
