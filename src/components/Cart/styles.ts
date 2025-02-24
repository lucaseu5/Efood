import styled from 'styled-components'
import { cores } from '../../styles'
import trash from '../../assets/images/trash.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360x;
  max-height: 100%;
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 40px;
  p {
    font-size: 14px;
    font-weight: 700;
    color: ${cores.pasta};
  }
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.pasta};
  padding: 8px;
  padding-bottom: 12px;
  margin-bottom: 16px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  div {
    margin-left: 8px;

    h3 {
      margin-bottom: 16px;
      font-size: 18px;
      font-weight: 900;
    }

    span {
      font-size: 14px;
    }
  }

  button {
    background-image: url(${trash});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 76px;
    right: 8px;
    cursor: pointer;
  }
`
