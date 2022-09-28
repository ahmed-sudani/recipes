import { List as ListIcon } from 'react-bootstrap-icons'
import Link from '../link'
import styles from './styles.module.css'
export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.icon}>
        <div></div>
        <div>Intouch Recipes</div>
      </div>

      <input className={styles.checkInput} type="checkbox" id="side-menu" />

      <label className={styles.checkBtn} htmlFor="side-menu">
        <ListIcon size={20} />
      </label>

      <nav className={styles.nav}>
        <Link name="Home" icon="House" />
        <Link name="Recipes" icon="EggFried" />
        <Link name="Favorites" icon="Heart" />
        <Link name="Developers" icon="CodeSlash" />
        <Link name="Login" icon="Person" />
      </nav>
    </header>
  )
}
