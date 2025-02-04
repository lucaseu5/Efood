import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section``

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

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
      width: 100%;
      height: 100%;
      margin-right: 24px;
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
