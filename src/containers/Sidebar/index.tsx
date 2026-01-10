import Avatar from '../../components/Avatar'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer, DescricaoContato } from './styles'
import { Mail, MessageCircle, Github } from 'lucide-react'


type Props = {
  trocaTema: () => void
}

const Sidebar = ({ trocaTema }: Props) => (
  <aside className="sidebar">
    <SidebarContainer>
      <Avatar />

      <Titulo fontSize={20}>George Marques</Titulo>

      <DescricaoContato>
        <Mail size={16} />{' '}
        <a href="mailto:gemarquesf@gmail.com">gemarquesf@gmail.com</a>
      </DescricaoContato>

      <DescricaoContato>
        <MessageCircle size={16} />{' '}
        <a href="https://wa.me/5551986028455" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </DescricaoContato>

      <DescricaoContato>
        <Github size={16} />{' '}
        <a href="https://github.com/georgecmf" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </DescricaoContato>

      <Descricao $tipo="principal" fontSize={14}>
        Desenvolvedor Front-end | React • TypeScript
      </Descricao>




      <BotaoTema onClick={trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
