import { getCsrfToken } from 'next-auth/react'
import Button from '../../../components/button'
import Head from '../../../components/head'

import styles from './styles.module.css'
export default function Signin({ csrfToken }) {
  return (
    <>
      <Head title="Login" description="Login To Save Your Favourites Recipes" />
      <form
        className={styles.Form}
        action="/api/auth/signin/email"
        method="POST"
      >
        <div className={styles.Text}>Login To Save Your Favourites Recipes</div>
        <div className={styles.inputForm}>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <label> Email </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            className={styles.input}
          />
        </div>
        <Button text="Send Link" />
      </form>
    </>
  )
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken },
  }
}
