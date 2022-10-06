import Image from 'next/image'
import { Clock } from 'react-bootstrap-icons'
import styles from './styles.module.css'

export default function ImageWithTime({
  image,
  width,
  height,
  alt,
  time,
  onClickOnImage,
}) {
  return (
    <div className={styles.image}>
      <Image
        src={`https://res.cloudinary.com/demo/image/fetch/${image}`}
        height={height}
        width={width}
        alt={alt}
        objectFit="cover"
        onClick={onClickOnImage}
      />

      <span className={styles.time}>
        <Clock /> {`${time} min`}
      </span>
    </div>
  )
}
