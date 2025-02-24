import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'
import { Container } from '../../styles'
import { useGetRestaurantesQuery } from '../../services/api'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantesQuery()

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Container>
        <ProductsList restaurant={restaurants} />
      </Container>
    </>
  )
}

export default Home
