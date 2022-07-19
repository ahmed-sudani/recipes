import styles from "./Link.module.css";
import * as Icons from "react-bootstrap-icons";
export default function Link(props) {
  const Icon = Icons[props.icon];
  return (
    <div className={styles.link}>
      <Icon size={20} />
      <div>{props.name}</div>
    </div>
  );
}
