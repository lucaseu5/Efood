import { FoodItem } from '../../pages/Foods'
import { Restaurant } from '../../pages/Home'
import FoodsItem from '../FoodsItem'
import { List } from './styles'

export type Props = {
  food: FoodItem[]
}

const FoodsList = ({ food }: Props) => {
  return (
    <List>
      {food.map((item: FoodItem) => (
        <li key={item.id}>
          <FoodsItem foods={item} />
        </li>
      ))}
    </List>
  )
}

export default FoodsList
