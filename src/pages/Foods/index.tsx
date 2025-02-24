import Banner from '../../components/Banner'
import FoodsList from '../../components/FoodsList'
import HeaderBuy from '../../components/HeaderBuy'
import { Container } from '../../styles'
import { useParams } from 'react-router-dom'
import { useGetFoodsQuery, useGetBannerQuery } from '../../services/api'

export interface FoodItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface Restaurant1 {
  id: number
  nome: string
  cardapio: FoodItem[]
}

const Foods = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetBannerQuery(id!)
  const { data: foods } = useGetFoodsQuery(id!)

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  if (!foods) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderBuy />
      <Banner restaurant={restaurant} />
      <Container>
        <FoodsList food={foods.cardapio} />
      </Container>
    </>
  )
}

export default Foods
