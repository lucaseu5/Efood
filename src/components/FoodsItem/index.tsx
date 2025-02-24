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
import { add } from '../../store/reducers/cart'
import { FoodItem } from '../../pages/Foods'

type Props = {
  foods: FoodItem
}

const FoodsItem = ({ foods }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(foods))
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
          Adionar ao carrinho
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
              Adicionar ao carrinho - R${foods.preco}0
            </button>
          </ModalContent>
        </Container>
        <div className="overlay" onClick={() => setModalOpen(false)}></div>
      </Modal>
    </>
  )
}

export default FoodsItem
