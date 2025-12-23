import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao, Actions } from './styles'

type Props = {
  titulo: string
  descricao: string
  link: string
  github?: string
}

const Projeto = ({ titulo, descricao, link, github }: Props) => {
  return (
    <Card>
      <Titulo>{titulo}</Titulo>

      <Paragrafo $tipo="secundario">{descricao}</Paragrafo>

      <Actions>
        <LinkBotao href={link} target="_blank">
          Visualizar
        </LinkBotao>

        {github && (
          <LinkBotao href={github} target="_blank">
            GitHub
          </LinkBotao>
        )}
      </Actions>
    </Card>
  )
}

export default Projeto
