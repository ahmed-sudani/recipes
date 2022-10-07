import styles from './styles.module.css'

export default function InputWithLabel(props) {
  return (
    <div className={styles.inputForm}>
      <label> {props.name} </label>
      <input {...props} required className={styles.input} />
    </div>
  )
}
