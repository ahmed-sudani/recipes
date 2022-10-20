import axios from 'axios'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import {
  Button,
  CountrySelector,
  Head,
  RecipesList,
} from '../../common/components'
import { WithLabel } from '../../common/hoc/withLabel'
import styles from './styles.module.css'

export default function Recipes({ recipes }) {
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
          <WithLabel label="Query">
            <input ref={nameInputRef} name="Query" />
          </WithLabel>

          <hr />

          <WithLabel label="Country">
            <CountrySelector ref={countryInputRef} />
          </WithLabel>

          <hr />

          <WithLabel label="Required Time">
            <input ref={timeInputRef} name="Required Time" type="number" />
          </WithLabel>

          <Button name="Search" onClick={onSubmitSearch} />
        </div>

        <RecipesList cards={recipes || []} />
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
