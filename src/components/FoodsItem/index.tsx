import { Button, Card, Description, Title } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const FoodsItem = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button>Adionar ao carrinho</Button>
  </Card>
)

export default FoodsItem
