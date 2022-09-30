import Card from '../card'
import styles from './styles.module.css'
export default function CardsList(props) {
  let cardsComp = props.cards.map((item) => (
    <Card
      key={item.id}
      img={item.img}
      time={item.time}
      name={item.name}
      country={item.country}
      description1={item.description1}
      description2={item.description2}
      description3={item.description3}
    />
  ))
  return <div className={styles.container} data-testid="container">{cardsComp}</div>
}
