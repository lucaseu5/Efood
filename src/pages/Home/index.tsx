import ProductsList from '../../components/ProductsList'
import Restaurant from '../../models/Restaurant'
import sushi from '../../assets/images/sushi.png'
import italiana from '../../assets/images/italiana.png'
import Header from '../../components/Header'
import { Container } from '../../styles'

const restaurantes: Restaurant[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    rate: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    infos: ['italiana']
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    infos: ['italiana']
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    infos: ['italiana']
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    infos: ['italiana']
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    rate: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: italiana,
    infos: ['italiana']
  }
]

const Home = () => (
  <>
    <Header />
    <Container>
      <ProductsList restaurant={restaurantes} />
    </Container>
  </>
)

export default Home
