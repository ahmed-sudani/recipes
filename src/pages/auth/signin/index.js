import { getCsrfToken } from 'next-auth/react'
import { Button, Head } from '../../../common/components'
import { WithLabel } from '../../../common/hoc/withLabel'
import styles from './styles.module.css'
export default function Signin({ csrfToken }) {
  return (
    <>
      <Head
        title="Login"
        description="Login To Start Add and Save Your Favorites Recipes"
      />
      <form
        className={styles.Form}
        action="/api/auth/signin/email"
        method="POST"
      >
        <div className={styles.text}>
          Login To Start Add and Save Your Favorites Recipes
        </div>

        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

        <WithLabel label="Email">
          <input
            required
            type="email"
            name="email"
            id="email"
            className={styles.input}
          />
        </WithLabel>
        <Button name="Send Link" />
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
