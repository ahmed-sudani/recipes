import styles from './Link.module.css'
import NextLink from 'next/link'
import * as Icons from 'react-bootstrap-icons'
export default function Link(props) {
  const Icon = Icons[props.icon]
  return (
    <NextLink href={props.name.toLowerCase()}>
      <div className={styles.link}>
        <Icon size={20} />
        <div>{props.name}</div>
      </div>
    </NextLink>
  )
}
