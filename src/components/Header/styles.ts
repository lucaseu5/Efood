import styled from 'styled-components'
import headerBar from '../../assets/images/Header.png'

export const HeaderBar = styled.header`
  background-image: url(${headerBar});
  background-size: cover;
  padding: 24px;
  height: 384px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Alinha os itens horizontalmente no centro */
  align-items: center; /* Alinha os itens verticalmente no centro */
`
