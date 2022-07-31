import CardsList from '../../components/cardsList'
import styles from './styles.module.css'
export default function Favourites() {
  let cards = [
    {
      id: '2',
      img: 'cster.png',
      time: '50 min',
      name: 'Chicken Vesuvio',
      contry: 'italian',
      description1: '  1  dbjksdklca asdk ds',
      description2: '  2  ksldf nlks ask  ac',
      description3: '  3  dmfkwnd qwkdnmowqd ',
    },
    {
      id: '1',
      img: 'cster.png',
      time: '50 min',
      name: 'Chicken Vesuvio',
      contry: 'italian',
      description1: '  1  dbjksdklca asdk ds',
      description2: '  2  ksldf nlks ask  ac',
      description3: '  3  dmfkwnd qwkdnmowqd ',
    },
  ]

  return (
    <div className={styles.container}>
      <CardsList cards={cards} />
    </div>
  )
}
