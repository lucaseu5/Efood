import { Restaurant } from '../../pages/Home'
import { Bannerimg, Baner, Restaurante, TextBanner, Type } from './styles'

type Props = {
  restaurant: Restaurant
}

const Banner = ({ restaurant }: Props) => {
  if (!restaurant) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <Baner>
        <TextBanner>
          <Type>{restaurant.tipo}</Type>
          <Restaurante>{restaurant.titulo}</Restaurante>
        </TextBanner>
        <Bannerimg src={restaurant.capa} alt="" />
        <div className="overlay"></div>
      </Baner>
    </>
  )
}

export default Banner
