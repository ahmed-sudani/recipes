import { useSession, signIn, signOut } from 'next-auth/react'
import styles from './LoginButton.module.css'
export default function LoginButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <button className={styles.signOutBtn} onClick={() => signOut()}>
        Sign out
      </button>
    )
  }
  return (
    <button className={styles.signInBtn} onClick={() => signIn()}>
      Sign in
    </button>
  )
}
