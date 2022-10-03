import Image from 'next/image'
import { useRef, useState } from 'react'
import Button from '../../components/button'
import Head from '../../components/head'
import InputWithLabel from '../../components/InputWithLabel'
import { EggFried, PlusSquare } from 'react-bootstrap-icons'
import styles from './styles.module.css'
import { isAbsoluteUrl } from 'next/dist/shared/lib/utils'
export default function AddRecipe() {
  const [image, setImage] = useState('')
  const [ingredients, setIngredients] = useState([''])
  const inputRef = useRef()
  return (
    <>
      <Head title="Create new recipe" description="Create new recipe" />
      <div className={styles.container}>
        <div className={styles.image}>
          {image && (
            <Image
              src={`https://res.cloudinary.com/demo/image/fetch/${image}`}
              height={300}
              width={300}
              alt={image}
              onError={(e) => {
                setImage('')
              }}
              objectFit="cover"
            />
          )}
          {!image && <EggFried size={200} />}
        </div>

        <form className={styles.column} action="/api/recipes" method="POST">
          <div className={styles.Text}>Add new recipe to the site</div>
          <InputWithLabel name="Name" type="text" />
          <InputWithLabel
            name="Image Url"
            type="url"
            onBlur={(e) => {
              try {
                if (new URL(e.target.value).protocol === 'https:') {
                  e.target.value
                }
                setImage(e.target.value)
              } catch (error) {
                setImage('')
              }
            }}
          />
          <InputWithLabel name="Country" type="text" />
          <InputWithLabel
            name="Required Time"
            min={1}
            max={180}
            type="number"
          />
          <div className={styles.inputForm}>
            <label htmlFor="">Ingredients</label>
            <div className={styles.ingredientsInput}>
              <input type="text" ref={inputRef} />
              <button
                type="button"
                onClick={() => {
                  if (inputRef.current.value)
                    setIngredients([...ingredients, inputRef.current.value])
                  inputRef.current.value = ''
                }}
              >
                <PlusSquare size={30} />
              </button>
            </div>
          </div>

          <Button text="Create Recipe" />
        </form>
        <div className={styles.column}>
          {ingredients.map((ingredient, index) => (
            <div key={index}>{ingredient}</div>
          ))}
        </div>
      </div>
    </>
  )
}
