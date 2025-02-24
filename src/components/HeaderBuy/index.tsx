import logo from '../../assets/images/logo.svg'
import { HeaderFoods, Links, CartButton } from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const HeaderBuy = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderFoods>
      <Links to="/">Restaurantes</Links>
      <img src={logo} alt="EFOOD" />
      <CartButton onClick={openCart}>0 produto(s) no carrinho</CartButton>
    </HeaderFoods>
  )
}

export default HeaderBuy
