import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'

export function SplideImages() {
  const mainOptions = {
    type: 'loop',
    perPage: 4,
    gap: '2px',
    pagination: false,
    height: '14rem',
    autoplay: true,
  }

  const images = [
    `https://res.cloudinary.com/demo/image/fetch/https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://res.cloudinary.com/demo/image/fetch/https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://res.cloudinary.com/demo/image/fetch/https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600`,
    `https://res.cloudinary.com/demo/image/fetch/https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    `https://res.cloudinary.com/demo/image/fetch/https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
  ]
  return (
    <Splide options={mainOptions}>
      {images.map((image, index) => (
        <SplideSlide key={index}>
          <Image src={image} alt="" layout="fill" objectFit="cover" />
        </SplideSlide>
      ))}
    </Splide>
  )
}
