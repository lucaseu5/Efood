import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 472px;
  max-height: 398px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 45px;
    max-width: 350px;
  }

  & > img {
    width: 472px;
    height: 217px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 350px;
    }
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const TitleDiv = styled.div`
  display: flex;
  flex-direction: inherit;
  justify-content: space-between;
`
export const Rate = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-size: 18px;
    margin-right: 8px;
    font-weight: bold;
  }

  img {
    vertical-align: middle;
  }
`

export const TextDiv = styled.div`
  border: 1px solid ${cores.rosa};
  border-top: none;
  padding: 8px;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 21px;
  display: block;
  margin-top: 8px;
  margin-bottom: 16px;
  color: ${cores.rosa};
`

export const Descricao = styled.p`
  color: ${cores.rosa};
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding-bottom: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
