import logo from '../../assets/images/logo.svg'
import social from '../../assets/images/social_media.svg'
import { Container, Descricao, Image, Social, SocialImage } from './styles'

const Footer = () => (
  <Container>
    <div className="Container">
      <Image src={logo} alt="" />
      <Social>
        <SocialImage src={social} alt="" />
      </Social>
      <div>
        <Descricao>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </Descricao>
      </div>
    </div>
  </Container>
)

export default Footer
