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
  align-items: center;
`

export const Logo = styled.img`
  padding-top: 64px;
  padding-bottom: 136px;
`

export const Titulo = styled.h1`
  width: 536px;
  height: 84px;
  text-align: center;
`
