import styles from './styles.module.css'
import Head from '../../../common/components/head'

export default function verifyRequest({ host }) {
  return (
    <>
      <Head title="Verify Request" />
      <div className={styles.container}>
        <h1>Check your email</h1>
        <p> A sign in link has been sent to your email address.</p>
        <span>{host}</span>
      </div>
    </>
  )
}

export const getServerSideProps = async (context) => ({
  props: { host: context.req.headers.host || null },
})
