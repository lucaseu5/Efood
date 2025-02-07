import { Restaurant } from '../../pages/Home'
import { Bannerimg, Baner, Restaurante, TextBanner, Type } from './styles'

type Props = {
  foods: Restaurant
}

const Banner = ({ foods }: Props) => {
  if (!foods) {
    return <div>Carregando...</div>
  }

  return (
    <>
      <Baner>
        <TextBanner>
          <Type>{foods.tipo}</Type>
          <Restaurante>{foods.titulo}</Restaurante>
        </TextBanner>
        <Bannerimg src={foods.capa} alt="" />
        <div className="overlay"></div>
      </Baner>
    </>
  )
}

export default Banner
