import Card from '../card'
import styles from './styles.module.css'
export default function CardsList(props) {
  let cardsComp = props.cards.map((item) => <Card key={item._id} {...item} />)
  return (
    <div className={styles.container} data-testid="container">
      {cardsComp}
    </div>
  )
}
