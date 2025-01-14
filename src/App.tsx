import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header'
import { Container, GlobalCss } from './styles'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </>
  )
}

export default App
