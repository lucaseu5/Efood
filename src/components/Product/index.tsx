import Tag from '../Tag'
import {
  Card,
  Descricao,
  Infos,
  Rate,
  TextDiv,
  TitleDiv,
  Titulo
} from './styles'
import estrela from '../../assets/images/estrela.svg'

type Props = {
  title: string
  rate: string
  description: string
  infos: string[]
  image: string
}

const Product = ({ title, rate, description, infos, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <TextDiv>
      <TitleDiv>
        <Titulo>{title}</Titulo>
        <Rate>
          <h2>{rate}</h2>
          <img src={estrela} alt="" />
        </Rate>
      </TitleDiv>
      <Descricao>{description}</Descricao>
      <Tag>Saiba Mais</Tag>
    </TextDiv>
  </Card>
)

export default Product
