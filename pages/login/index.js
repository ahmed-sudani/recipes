import Button from '../../components/button'
import Head from '../../components/head'
import styles from './styles.module.css'
export default function Login() {
  return (
    <>
      <Head title="Login" description="Login To Save Your Favourites Recipes" />
      <form className={styles.Form} action="" method="POST">
        <div className={styles.Text}>Login To Save Your Favourites Recipes</div>
        <div className={styles.inputForm}>
          <label> Email </label>
          <input required type="email" className={styles.input} />
        </div>
        <Button text="Send Link" />
      </form>
    </>
  )
}
