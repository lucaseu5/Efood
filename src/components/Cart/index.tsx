import { Button } from '../FoodsItem/styles'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'
import pizza from '../../assets/images/image 3.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ProductsList'

const Cart = () => {
  const { isOpen, foods } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return foods.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeFood = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {foods.map((food) => (
            <CartItem key={food.id}>
              <img src={food.foto} alt={food.nome} />
              <div>
                <h3>{food.nome}</h3>
                <span>{formataPreco(food.preco)}</span>
              </div>
              <button onClick={() => removeFood(food.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <p>Valor total</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </Prices>
        <Button>Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
