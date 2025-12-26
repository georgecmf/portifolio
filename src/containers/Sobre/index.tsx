import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { StackGrid, StackCard } from './styles'

const stack = [
  'React',
  'TypeScript',
  'Styled-components',
  'HTML',
  'CSS',
  'Git',
  'GitHub',
  'Vercel'
]

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>

    <Paragrafo $tipo="principal">
      Desenvolvedor front-end em início de carreira, com foco em React,
      TypeScript e styled-components. Experiência na criação de interfaces
      responsivas e projetos reais do zero ao deploy.
    </Paragrafo>

    <Titulo fontSize={16}>Tecnologias</Titulo>

    <StackGrid>
      {stack.map((item) => (
        <StackCard key={item}>{item}</StackCard>
      ))}
    </StackGrid>
  </section>
)

export default Sobre
