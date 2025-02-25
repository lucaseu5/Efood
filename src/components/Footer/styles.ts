import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.pasta};
  padding: 40px 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const Descricao = styled.p`
  width: 600px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 350px;
  }
`

export const Image = styled.img`
  padding-top: 40px;
`
export const Social = styled.div`
  padding-top: 32px;
  padding-bottom: 80px;
`
export const SocialImage = styled.img`
  width: 100px;
  height: auto;
`
