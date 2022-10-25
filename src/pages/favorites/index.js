import { Head, RecipesList } from '../../common/components'
import styles from './styles.module.css'
import axios from 'axios'

export default function favorites({ recipes }) {
  return (
    <>
      <Head title="Favorites" description="Save your favorites recipes" />
      <div className={styles.container}>
        <RecipesList recipes={recipes || []} />
      </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const recipes = await axios.get(
    `http://${context.req.headers.host}/api/favorites`,
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
