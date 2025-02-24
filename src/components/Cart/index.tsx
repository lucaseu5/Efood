import { Button } from '../FoodsItem/styles'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'
import pizza from '../../assets/images/image 3.png'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={pizza} />
            <div>
              <h3>Nome da comida</h3>
              <span>R$ 60,90</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={pizza} />
            <div>
              <h3>Nome da comida</h3>
              <span>R$ 60,90</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Prices>
          <p>Valor total</p>
          <p>R$ 182,70</p>
        </Prices>
        <Button>Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
