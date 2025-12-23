import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = ({ trocaTema }: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />

      <Titulo fontSize={20}>
        George Marques
      </Titulo>

      <Paragrafo $tipo="secundario" fontSize={16}>
        georgecmf
      </Paragrafo>

      <Descricao $tipo="principal" fontSize={12}>
        Desenvolvedor Front-end | React • TypeScript
      </Descricao>

      <BotaoTema onClick={trocaTema}>
        Trocar tema
      </BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
