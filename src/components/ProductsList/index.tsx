import Restaurant from '../../models/Restaurant'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  restaurant: Restaurant[]
}

const ProductsList = ({ restaurant }: Props) => (
  <Container>
    <List>
      {restaurant.map((restaurant) => (
        <Product
          key={restaurant.id}
          title={restaurant.title}
          rate={restaurant.rate}
          description={restaurant.description}
          image={restaurant.image}
          infos={restaurant.infos}
        />
      ))}
    </List>
  </Container>
)

export default ProductsList
