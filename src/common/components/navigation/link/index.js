import styles from './Link.module.css'
import NextLink from 'next/link'
import { Icon } from '../../Icons/Icon'
export function Link(props) {
  return (
    <NextLink href={`/${props.name.toLowerCase()}`}>
      <a className={styles.link} data-cy={props.name.toLowerCase()}>
        <Icon icon={props.icon} size={20} />
        <div>{props.name}</div>
      </a>
    </NextLink>
  )
}
