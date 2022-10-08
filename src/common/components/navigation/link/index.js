import styles from './Link.module.css'
import NextLink from 'next/link'
import * as Icons from 'react-bootstrap-icons'
export function Link(props) {
  const Icon = Icons[props.icon]
  return (
    <NextLink href={`/${props.name.toLowerCase()}`}>
      <div className={styles.link} data-cy={props.name.toLowerCase()}>
        <Icon size={20} />
        <div>{props.name}</div>
      </div>
    </NextLink>
  )
}
