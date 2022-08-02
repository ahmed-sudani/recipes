import Card from '../card'
import styles from "./styles.module.css";
export default function CardsList(props) {
  let cardsComp = props.cards.map((item) => (
    <Card
      key={item.id}
      img={item.img}
      time={item.time}
      name={item.name}
      contry={item.contry}
      description1={item.description1}
      description2={item.description2}
      description3={item.description3}
    />
  ))
  return <div className={styles.container}>{cardsComp}</div>
}