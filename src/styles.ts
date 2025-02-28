import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#FFFFFF',
  brancoClaro: '#FFF8F2',
  pasta: '#FFEBD9',
  rosa: '#E66767'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  cell: '425px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.brancoClaro};
    color: ${cores.rosa};
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
`
