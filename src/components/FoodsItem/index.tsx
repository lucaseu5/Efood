import { useState } from 'react'
import {
  Button,
  Card,
  Close,
  Description,
  Modal,
  ModalContent,
  Title
} from './styles'
import { Container } from '../../styles'
import close from '../../assets/images/close.svg'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { FoodItem } from '../../pages/Foods'
import { formataPreco } from '../ProductsList'

type Props = {
  foods: FoodItem
}

const FoodsItem = ({ foods }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(foods))
    dispatch(open())
    setModalOpen(false)
  }

  const [modalOpen, setModalOpen] = useState(false)

  const getDescricao = (descricao: string) => {
    if (descricao.length > 253) {
      return descricao.slice(0, 250) + '...'
    }

    return descricao
  }

  return (
    <>
      <Card>
        <img src={foods.foto} alt={foods.nome} />
        <Title>{foods.nome}</Title>
        <Description>{getDescricao(foods.descricao)}</Description>
        <Button
          onClick={() => {
            setModalOpen(true)
          }}
        >
          Adicionar ao carrinho
        </Button>
      </Card>

      <Modal className={modalOpen ? 'visible' : ''}>
        <Container className="container">
          <img src={foods.foto} />
          <ModalContent>
            <Close src={close} onClick={() => setModalOpen(false)} />
            <h4>{foods.nome}</h4>
            <p>{foods.descricao}</p>
            <p>Serve: {foods.porcao}</p>
            <button onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(foods.preco)}
            </button>
          </ModalContent>
        </Container>
        <div className="overlay" onClick={() => setModalOpen(false)}></div>
      </Modal>
    </>
  )
}

export default FoodsItem
