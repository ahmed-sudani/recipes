import styles from "./styles.module.css";
import { Github, Linkedin } from "react-bootstrap-icons";

export default function Person(props) {
  return (
    <div className={styles.Person}>
      <img src={props.img} />
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
  );
}
