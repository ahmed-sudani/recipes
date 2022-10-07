import styles from './styles.module.css'
export default function Button(props) {
  return (
    <button {...props} className={styles.btn}>
      {props.name}
    </button>
  )
}
