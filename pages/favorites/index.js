import CardsList from '../../components/cardsList'
import Head from '../../components/head'
import styles from './styles.module.css'
export default function favorites() {
  let cards = [
    {
      id: '2',
      img: '/cster.png',
      time: '50 min',
      name: 'Chicken Vesuvio',
      country: 'italian',
      description1: '  1  dbjksdklca asdk ds',
      description2: '  2  ksldf nlks ask  ac',
      description3: '  3  dmfkwnd qwkdnmowqd ',
    },
    {
      id: '1',
      img: '/cster.png',
      time: '50 min',
      name: 'Chicken Vesuvio',
      country: 'italian',
      description1: '  1  dbjksdklca asdk ds',
      description2: '  2  ksldf nlks ask  ac',
      description3: '  3  dmfkwnd qwkdnmowqd ',
    },
  ]

  return (
    <>
      <Head title="Favorites" description="Your favorites recipes" />
      <div className={styles.container}>
        <CardsList cards={cards} />
      </div>
    </>
  )
}
