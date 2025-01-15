import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.pasta};
  padding: 8px;
`
export const Title = styled.h1`
  font-size: 16px;
  padding-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  padding-bottom: 8px;
`

export const Button = styled.button`
  background-color: ${cores.pasta};
  color: ${cores.rosa};
  border: none;
  font-size: 14px;
  padding: 4px 84px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
`
