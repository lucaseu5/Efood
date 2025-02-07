import { Restaurant } from '../../pages/Home'
import FoodsItem from '../FoodsItem'
import { List } from './styles'

type Props = {
  food: Restaurant['cardapio'][] | undefined
}

const FoodsList = ({ food }: Props) => {
  if (!food) {
    return <h3>Carregando...</h3>
  }
  return (
    <List>
      {food.map((item) => (
        <li key={item.id}>
          <FoodsItem
            title={item.nome}
            description={item.descricao}
            image={item.foto}
            foodName={item.nome}
            quantidade={item.porcao}
            value={item.preco}
          />
        </li>
      ))}
    </List>
  )
}

export default FoodsList
