import Image from 'next/image'
import styles from './styles.module.css'
export function ImageWithText() {
  const image =
    'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg'
  return (
    <div className={styles.image}>
      <Image
        src={`https://res.cloudinary.com/demo/image/fetch/${image}`}
        alt=""
        layout="fill"
        objectFit="cover"
      />
      <p className={styles.imageText}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
        beatae consequatur magni voluptas, accusamus deleniti. Nihil accusamus
        quo reprehenderit delectus officia distinctio nostrum libero labore
        earum necessitatibus! Neque, quasi rerum.
      </p>
    </div>
  )
}
