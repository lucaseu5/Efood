import Banner from '../../components/Banner'
import FoodsList from '../../components/FoodsList'
import HeaderBuy from '../../components/HeaderBuy'
import { Container } from '../../styles'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurant } from '../Home'

interface FoodItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Foods = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant>()
  const [food, setFood] = useState<FoodItem[]>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setRestaurant(res)
        setFood(res.cardapio)
      })
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderBuy />
      <Banner foods={restaurant} />
      <Container>
        <FoodsList food={food} />
      </Container>
    </>
  )
}

export default Foods
