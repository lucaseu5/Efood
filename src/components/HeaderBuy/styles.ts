import styled from 'styled-components'
import headerBar from '../../assets/images/Header.png'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderFoods = styled.header`
  background-image: url(${headerBar});
  background-size: cover;
  width: auto;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 0px 171px;
`

export const Links = styled(Link)`
  color: ${cores.rosa};
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
`
