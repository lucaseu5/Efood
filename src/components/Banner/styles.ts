import styled from 'styled-components'
import { cores } from '../../styles'

export const Baner = styled.div`
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
export const TextBanner = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 120px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: space-between;
  z-index: 1;
`

export const Type = styled.p`
  color: ${cores.branco};
  font-size: 32px;
  margin-top: 25px;
  font-weight: 100;
`
export const Restaurante = styled.h2`
  color: ${cores.branco};
  font-size: 32px;
  margin-top: 156px;
  font-weight: bold;
`

export const Bannerimg = styled.img`
  width: 100%;
  max-height: 280px;
  object-fit: cover;
`
