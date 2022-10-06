import DynamicImage from '../image'
import styles from './styles.module.css'

export default function ingredient(props) {
  return (
    <li onClick={props.onClickOnItem} className={styles.li}>
      <div className={styles.image}>
        <DynamicImage size={'small'} width={40} height={40} text={props.text} />
      </div>
      <p>{props.text}</p>
    </li>
  )
}
