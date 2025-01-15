import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Foods from './pages/Foods'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/comidas" element={<Foods />} />
  </Routes>
)

export default Rotas
