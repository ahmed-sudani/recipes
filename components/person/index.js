import styles from './styles.module.css'
import { Github, Linkedin } from 'react-bootstrap-icons'
import Image from 'next/image'

export default function Person(props) {
  return (
    <div className={styles.Person}>
      <Image width={200} height={200} alt={props.name} src={props.img} />
      <div> {props.name} </div>
      <div> {props.jobTitle} </div>
      <p> {props.description} </p>
      <div className={styles.icons}>
        <a href={props.github}>
          <Github size={40} />
        </a>
        <a href={props.linkedin}>
          <Linkedin size={40} />
        </a>
      </div>
    </div>
  )
}
