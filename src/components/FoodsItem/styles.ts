import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: ${cores.rosa};
  color: ${cores.pasta};
  padding: 8px;

  & > img {
    width: 304px;
    height: 167px;
    object-fit: cover;
    padding: 8px;
  }
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  display: none;
  z-index: 1;

  &.visible {
    display: flex;
  }

  .container {
    max-width: 1024px;
    max-height: 344px;
    display: flex;
    background-color: ${cores.rosa};
    color: ${cores.branco};
    padding: 32px;
    position: relative;
    position: relative;
    z-index: 1;

    > img {
      margin-right: 24px;
      object-fit: cover;
      width: 280px;
      height: 280px;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  padding-bottom: 16px;
  position: relative;
  z-index: 1;

  h4 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
  }

  h4,
  p {
    padding-bottom: 16px;
  }

  button {
    background-color: ${cores.pasta};
    color: ${cores.rosa};
    border: none;
    padding: 4px 8px;
    cursor: pointer;
  }
`

export const Close = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  width: 16px;
  height: 16px;
`
