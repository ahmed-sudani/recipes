import axios, { AxiosError } from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { EggFried } from 'react-bootstrap-icons'
import {
  Button,
  CountrySelector,
  FormIngredients,
  Head,
  IngredientsInput,
  InputWithLabel,
} from '../../common/components'
import styles from './styles.module.css'

export default function AddRecipe() {
  const router = useRouter()
  const nameInputRef = useRef()
  const timeInputRef = useRef()
  const countryInputRef = useRef()
  const [image, setImage] = useState('')
  const [error, setError] = useState()
  const [ingredients, setIngredients] = useState([])

  const axiosConfig = {
    withCredentials: true,
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
      country: countryInputRef.current.state.selectValue[0].label,
      time: timeInputRef.current.value,
      image: image,
      ingredients: ingredients,
    }

    try {
      await axios.post('/api/recipes', recipe, axiosConfig)
      router.push('/recipes')
    } catch (error) {
      if (error instanceof AxiosError)
        return setError(error.response.data.message)
      setError('something went wrong please try again later')
    }
  }

  const submitForm = (e) => {
    e.preventDefault()
    sendApiRequest()
  }

  return (
    <>
      <Head title="Create New Recipe" description="create new recipe" />

      <div className={styles.container}>
        <ImageOrIcon />

        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.text}>Add new recipe to the site</div>

          {error && <div className={styles.error}>{error}</div>}

          <InputWithLabel
            name="Name"
            minLength={5}
            maxLength={50}
            innerref={nameInputRef}
          />
          <InputWithLabel
            name="Image Url"
            type="url"
            maxLength={100}
            onBlur={updateImageInput}
          />
          <CountrySelector text="Country" innerref={countryInputRef} />
          <InputWithLabel
            name="Required Time"
            min={1}
            max={180}
            type="number"
            innerref={timeInputRef}
          />
          <IngredientsInput {...{ ingredients, setIngredients }} />
          <Button name="Create Recipe" type="submit" />
        </form>
        <FormIngredients {...{ ingredients, setIngredients }} />
      </div>
    </>
  )
}
