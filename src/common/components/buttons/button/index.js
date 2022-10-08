import styles from './styles.module.css'
export function Button(props) {
  return (
    <button {...props} className={styles.btn}>
      {props.name}
    </button>
  )
}
