import styles from './styles.module.css'

export default function InputWithLabel(props) {
  return (
    <div className={styles.inputForm}>
      <label> {props.name} </label>
      <input ref={props.innerref} {...props} className={styles.input} />
    </div>
  )
}
