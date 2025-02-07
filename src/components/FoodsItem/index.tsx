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

type Props = {
  title: string
  description: string
  image: string
  quantidade: string
  foodName: string
  value: number
}

const FoodsItem = ({
  title,
  description,
  image,
  foodName,
  quantidade,
  value
}: Props) => {
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
        <img src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{getDescricao(description)}</Description>
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
          <img src={image} />
          <ModalContent>
            <Close src={close} onClick={() => setModalOpen(false)} />
            <h4>{foodName}</h4>
            <p>{description}</p>
            <p>Serve: {quantidade}</p>
            <button>Adicionar ao carrinho - R${value}0</button>
          </ModalContent>
        </Container>
        <div className="overlay" onClick={() => setModalOpen(false)}></div>
      </Modal>
    </>
  )
}

export default FoodsItem
