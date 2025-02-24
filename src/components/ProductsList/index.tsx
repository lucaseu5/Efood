import { Restaurant } from '../../pages/Home'
import Product from '../Product'
import { List } from './styles'

export type Props = {
  restaurant: Restaurant[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ restaurant }: Props) => {
  const getRestaurantTags = (restaurant: Restaurant) => {
    const tags = []

    if (restaurant.tipo) {
      tags.push(restaurant.tipo)
    }

    if (restaurant.destacado) {
      tags.push('Destaque da semana')
    }

    return tags
  }

  return (
    <section>
      <List>
        {restaurant.map((restaurant) => (
          <Product
            id={restaurant.id}
            key={restaurant.id}
            title={restaurant.titulo}
            rate={restaurant.avaliacao}
            description={restaurant.descricao}
            image={restaurant.capa}
            infos={getRestaurantTags(restaurant)}
          />
        ))}
      </List>
    </section>
  )
}

export default ProductsList
