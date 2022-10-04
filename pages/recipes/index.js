import CardsList from '../../components/cardsList'
import Head from '../../components/head'
import styles from './styles.module.css'
import axios from 'axios'

export default function recipes({ recipes }) {
  return (
    <>
      <Head title="Recipes" description="Find you best recipes ever" />
      <div className={styles.container}>
        <CardsList cards={recipes || []} />
      </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const recipes = await axios.get(
    `http://${context.req.headers.host}/api/recipes`,
    {
      withCredentials: true,
      headers: {
        Cookie: context.req.headers.cookie,
      },
    }
  )
  return {
    props: { recipes: recipes.data.length ? recipes.data : [] },
  }
}
