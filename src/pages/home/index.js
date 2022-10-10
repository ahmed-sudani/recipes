import Image from 'next/image'
import { ImageWithText, SplideImages } from '../../common/components'
import styles from './styles.module.css'
export default function Home() {
  const image =
    'https://images.pexels.com/photos/13795311/pexels-photo-13795311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  return (
    <div className={styles.container}>
      <div>
        <ImageWithText />
        <SplideImages />
      </div>

      <div className={styles.text}>
        <h1>{`Can't find the recipe you wanted?`}</h1>
        <p>
          {`We've got it. Search for any dish and we give you the ingredients and
          cooking time.`}
        </p>
      </div>
      <div className={styles.item}>
        <div className={styles.image}>
          <Image
            src={`https://res.cloudinary.com/demo/image/fetch/${image}`}
            alt="recipes"
            width={300}
            height={300}
            objectFit="fill"
          />
        </div>
        <div className={styles.ingredients}>
          <h3>Chicken Vesuvio</h3>
          <ul>
            <li>5 cloves garlic, peeled</li>
            <li>2 large russet potatoes, peeled and cut into chunks</li>
            <li>1/2 cup olive oil</li>
            <li>3/4 cup chicken stock</li>
            <li>3 tablespoons chopped parsley</li>
            <li>1 tablespoon dried oregano</li>
            <li>Salt and pepper</li>
            <li>1 cup frozen peas, thawed</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
