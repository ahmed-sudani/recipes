import Image from 'next/image'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function DynamicImage(props) {
  const [image, setImage] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `/api/pexels?query=${props.text}, &size=small`
      )
      setImage(data.image)
    }
    fetchData()
  }, [])
  return (
    <Image
      src={`https://res.cloudinary.com/demo/image/fetch/${image}`}
      height={props.width}
      width={props.height}
      alt={image}
      objectFit="cover"
    />
  )
}
