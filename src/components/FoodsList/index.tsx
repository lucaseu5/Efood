import FoodsItem from '../FoodsItem'
import { Container, List } from './styles'
import Food from '../../models/Food'

export type Props = {
  food: Food[]
}

const FoodsList = ({ food }: Props) => (
  <Container>
    <List>
      {food.map((food) => (
        <FoodsItem
          title={food.title}
          description={food.description}
          image={food.image}
          key={food.id}
        />
      ))}
    </List>
  </Container>
)
export default FoodsList
