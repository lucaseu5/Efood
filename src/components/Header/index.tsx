import { HeaderBar } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="EFOOD" />
    <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
  </HeaderBar>
)

export default Header
