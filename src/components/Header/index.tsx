import { HeaderBar, Logo, Titulo } from './styles'

import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <Logo src={logo} alt="EFOOD" />
    <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
  </HeaderBar>
)

export default Header
