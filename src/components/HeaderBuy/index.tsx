import logo from '../../assets/images/logo.svg'
import { HeaderFoods, Links } from './styles'

const HeaderBuy = () => (
  <HeaderFoods>
    <Links to="/">Restaurantes</Links>
    <img src={logo} alt="EFOOD" />
    <Links to="#">0 produto(s) no carrinho</Links>
  </HeaderFoods>
)

export default HeaderBuy
