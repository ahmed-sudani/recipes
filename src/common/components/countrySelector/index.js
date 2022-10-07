import React, { useState } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import styles from './styles.module.css'

export default function CountrySelector({ text, innerref }) {
  const [value, setValue] = useState(null)
  const options = countryList().getData()

  const changeHandler = (value) => {
    setValue(value)
  }

  return (
    <div className={styles.inputForm}>
      <label>{text}</label>
      <Select
        className={styles.input}
        ref={innerref}
        options={options}
        value={value}
        onChange={changeHandler}
        name="country"
        required
      />
    </div>
  )
}
