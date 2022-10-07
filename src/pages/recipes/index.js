import axios from 'axios'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Button from '../../common/components/button'
import CardsList from '../../common/components/cardsList'
import CountrySelector from '../../common/components/countrySelector'
import Head from '../../common/components/head'
import InputWithLabel from '../../common/components/InputWithLabel'
import styles from './styles.module.css'

export default function recipes({ recipes }) {
  const router = useRouter()
  const nameInputRef = useRef()
  const timeInputRef = useRef()
  const countryInputRef = useRef()
  const onSubmitSearch = () => {
    let url = `/recipes?`
    if (nameInputRef.current.value) {
      url += `name=${nameInputRef.current.value}`
    }
    if (countryInputRef.current.state.selectValue[0]) {
      url += `&country=${countryInputRef.current.state.selectValue[0].label}`
    }
    if (timeInputRef.current.value) {
      url += `&time=${timeInputRef.current.value}`
    }
    router.push(url)
  }
  return (
    <>
      <Head title="Recipes" description="Find you best recipes ever" />
      <div className={styles.container}>
        <div className={styles.filter}>
          <InputWithLabel
            innerref={nameInputRef}
            name="Query"
            minLength={5}
            maxLength={50}
          />

          <hr />

          <CountrySelector innerref={countryInputRef} text="Country" />

          <hr />

          <InputWithLabel
            innerref={timeInputRef}
            name="Required Time"
            min={1}
            max={180}
            type="number"
          />

          <Button name="Search" onClick={onSubmitSearch} />
        </div>

        <CardsList cards={recipes || []} />
      </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const axiosConfig = {
    withCredentials: true,
    headers: {
      Cookie: context.req.headers.cookie,
    },
  }
  const url = `http://${context.req.headers.host}/api/${context.resolvedUrl}`
  const recipes = await axios.get(url, axiosConfig)
  return {
    props: { recipes: recipes.data.length ? recipes.data : [] },
  }
}
