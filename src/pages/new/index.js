import axios, { AxiosError } from 'axios'
import { ValidationError } from 'joi'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { EggFried } from 'react-bootstrap-icons'
import {
  Button,
  CountrySelector,
  Head,
  IngredientsList,
  InputWithIcon,
} from '../../common/components'
import { WithLabel } from '../../common/hoc/withLabel'
import { recipesSchema } from '../../common/schemas/recipes'
import styles from './styles.module.css'

export default function AddRecipe() {
  const router = useRouter()
  const nameInputRef = useRef()
  const timeInputRef = useRef()
  const ingredientsInputRef = useRef()
  const countryInputRef = useRef()
  const [image, setImage] = useState('')
  const [error, setError] = useState()
  const [ingredients, setIngredients] = useState([])

  const axiosConfig = {
    withCredentials: true,
  }

  const removeIngredient = (e) => {
    setIngredients((prev) =>
      prev.filter((value) => value != e.target.innerText)
    )
  }

  const addIngredients = () => {
    if (ingredientsInputRef.current.value)
      setIngredients([...ingredients, ingredientsInputRef.current.value])
    ingredientsInputRef.current.value = ''
  }

  const updateImageInput = (e) => {
    try {
      setError('')
      setImage('')

      if (!e.target.value) {
        return
      }

      if (new URL(e.target.value).protocol != 'https:') {
        throw Error()
      }

      setImage(e.target.value)
    } catch (error) {
      onImageError()
    }
  }

  const onImageError = (e) => {
    setImage('')
    setError('please enter a valid url')
  }

  const CustomImage = () => (
    <div className={styles.image}>
      <Image
        src={`https://res.cloudinary.com/demo/image/fetch/${image}`}
        height={300}
        width={300}
        alt={image}
        onError={onImageError}
        objectFit="cover"
      />
    </div>
  )

  const ImageOrIcon = () => {
    return image ? <CustomImage /> : <EggFried size={300} />
  }

  const sendApiRequest = async () => {
    const recipe = {
      name: nameInputRef.current.value,
      country: countryInputRef.current.state.selectValue[0]
        ? countryInputRef.current.state.selectValue[0].label
        : '',
      time: timeInputRef.current.value | 0,
      image: image,
      ingredients: ingredients,
    }
    try {
      await recipesSchema.validateAsync(recipe)
      await axios.post('/api/recipes', recipe, axiosConfig)
      router.push('/recipes')
    } catch (error) {
      if (error instanceof AxiosError)
        return setError(error.response.data.message)
      if (error instanceof ValidationError) return setError(error.message)
      setError('something went wrong please try again later')
    }
  }

  return (
    <>
      <Head title="Create New Recipe" description="create new recipe" />

      <div className={styles.container}>
        <ImageOrIcon />

        <div className={styles.form}>
          <div className={styles.text}>Add new recipe to the site</div>

          {error && <div className={styles.error}>{error}</div>}

          <WithLabel label={'Name'}>
            <input name="Name" ref={nameInputRef} />
          </WithLabel>

          <WithLabel label={'Image Url'}>
            <input name="Image Url" onBlur={updateImageInput} />
          </WithLabel>

          <WithLabel label={'Country'}>
            <CountrySelector innerref={countryInputRef} />
          </WithLabel>

          <WithLabel label={'Required Time'}>
            <input name="Required Time" type="number" ref={timeInputRef} />
          </WithLabel>

          <WithLabel label={'Ingredients'}>
            <InputWithIcon
              icon="PlusSquare"
              name="Ingredient"
              innerref={ingredientsInputRef}
              onKeyDown={(e) => (e.key === 'Enter' ? addIngredients() : '')}
            />
          </WithLabel>

          <Button onClick={sendApiRequest} name="Create Recipe" type="submit" />
        </div>

        <IngredientsList
          className={styles.list}
          ingredients={ingredients}
          onClickOnItem={removeIngredient}
        />
      </div>
    </>
  )
}
