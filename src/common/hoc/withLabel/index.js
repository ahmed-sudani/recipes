import styles from './styles.module.css'

export function WithLabel({ children, label }) {
  return (
    <div className={styles.container}>
      <label> {label} </label>
      {children}
    </div>
  )
}
