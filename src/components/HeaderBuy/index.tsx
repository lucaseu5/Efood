import logo from '../../assets/images/logo.svg'
import { HeaderFoods, Links, CartButton } from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderBuy = () => {
  const dispatch = useDispatch()
  const { foods } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderFoods>
      <Links to="/">Restaurantes</Links>
      <img src={logo} alt="EFOOD" />
      <CartButton onClick={openCart}>
        {foods.length} produto(s) no carrinho
      </CartButton>
    </HeaderFoods>
  )
}

export default HeaderBuy
