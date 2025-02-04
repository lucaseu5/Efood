import FoodsItem from '../FoodsItem'
import { Close, List, Modal, ModalContent } from './styles'
import { Container } from '../../styles'
import Food from '../../models/Food'
import pizza from '../../assets/images/pizza2.png'
import close from '../../assets/images/close.svg'

export type Props = {
  food: Food[]
}

const FoodsList = ({ food }: Props) => (
  <>
    <section>
      <List>
        {food.map((food) => (
          <FoodsItem
            title={food.title}
            description={food.description}
            image={food.image}
            key={food.id}
          />
        ))}
      </List>
    </section>
    <Modal>
      <Container className="container">
        <img src={pizza} />
        <ModalContent>
          <Close src={close} />
          <h4>Comida Teste</h4>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
            <br />
            <br />
            <br />
            Serve: de 2 a 3 pessoas
          </p>
          <button>Adicionar ao carrinho - R$60,90</button>
        </ModalContent>
      </Container>
      <div className="overlay"></div>
    </Modal>
  </>
)
export default FoodsList
