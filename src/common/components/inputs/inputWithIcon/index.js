import { Icon } from '../../Icons/Icon'
import styles from './styles.module.css'

export function InputWithIcon(props) {
  return (
    <div className={styles.ingredientsInput}>
      <input ref={props.innerref} {...props} />
      <Icon size={20} icon={props.icon} />
    </div>
  )
}
