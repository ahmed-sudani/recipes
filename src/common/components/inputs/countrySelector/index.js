import React, { useState } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import styles from './styles.module.css'

export function CountrySelector({ innerref }) {
  const [value, setValue] = useState(null)
  const options = countryList().getData()

  const changeHandler = (value) => {
    setValue(value)
  }

  return (
    <Select
      className={styles.container}
      ref={innerref}
      options={options}
      value={value}
      onChange={changeHandler}
      name="country"
    />
  )
}
