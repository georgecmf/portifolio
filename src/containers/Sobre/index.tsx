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
      Desenvolvedor front-end focado na criação de sites e aplicações modernas,
      rápidas e responsivas. Trabalho com projetos do zero ao deploy, sempre
      priorizando boa experiência no mobile, organização de código e visual
      profissional.
    </Paragrafo>

    <Titulo fontSize={16}>Ferramentas</Titulo>

    <StackGrid>
      {stack.map((item) => (
        <StackCard key={item}>{item}</StackCard>
      ))}
    </StackGrid>
  </section>
)

export default Sobre
