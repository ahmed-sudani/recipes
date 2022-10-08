import axios from 'axios'
import { useRouter } from 'next/router'
import {
  Button,
  ImageWithTime,
  IngredientsList,
  RecipeCarHeader,
} from '../../../common/components/'
import styles from './styles.module.css'

export default function Recipe(props) {
  const router = useRouter()
  const deleteRecipe = async () => {
    try {
      await axios.delete(`/api/recipes/${props.recipe._id}`)
      router.push('/recipes')
    } catch (error) {}
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.infos}>
          <RecipeCarHeader
            name={props.recipe.name}
            country={props.recipe.country}
            isFavorite={props.isFavorite}
          />
          <ImageWithTime
            width={300}
            height={160}
            image={props.recipe.image}
            alt={props.recipe.name}
            time={props.recipe.time}
          />

          {props.isCreator && <Button name="Delete" onClick={deleteRecipe} />}
        </div>
        <div className={styles.vl} />
        <div className={styles.ingredients}>
          <h3>Ingredients</h3>
          <IngredientsList ingredients={props.recipe.ingredients} />
        </div>
        <div className={styles.vl} />
      </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const recipeId = context.params.rid
  const axiosConfig = {
    withCredentials: true,
    headers: {
      Cookie: context.req.headers.cookie,
    },
  }

  try {
    const { data: recipe } = await axios.get(
      `http://${context.req.headers.host}/api/recipes/${recipeId}`,
      axiosConfig
    )

    return {
      props: recipe,
    }
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    }
  }
}
