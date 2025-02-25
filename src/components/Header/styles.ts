import styled from 'styled-components'
import headerBar from '../../assets/images/Header.png'
import { breakpoints } from '../../styles'

export const HeaderBar = styled.header`
  background-image: url(${headerBar});
  background-size: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  padding-top: 64px;
  padding-bottom: 136px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-bottom: 70px;
  }
`

export const Titulo = styled.h1`
  width: 536px;
  height: 84px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
    width: 300px;
  }
`
