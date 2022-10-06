import axios from 'axios'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { EggFried, PlusSquare } from 'react-bootstrap-icons'
import Button from '../../components/button'
import Head from '../../components/head'
import InputWithLabel from '../../components/InputWithLabel'
import styles from './styles.module.css'
import { useRouter } from 'next/router'

export default function AddRecipe() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [country, setCountry] = useState('')
  const [time, setTime] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientsInputRef = useRef()

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
        setImage('')
      }
    }
  }

  const ImageOnError = (e) => {
    setImage('')
  }
  const ImageOrIcon = () => {
    return (
      <div className={styles.image}>
        {image && (
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
