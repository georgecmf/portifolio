import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'

const projetos = [
  {
    titulo: 'Clone Disney+',
    descricao: 'Clone da interface do Disney+',
    link: 'https://clone-disneyplus-oixq.vercel.app',
    github: 'https://github.com/georgecmf/clone_disneyplus'
  },
  {
    titulo: 'Mimos da Bru',
    descricao: 'Site de roupas personalizadas',
    link: 'https://site-mimosbru-george.vercel.app',
    github: 'https://github.com/georgecmf/mimos-da-bru'
  },
  {
    titulo: 'Nail Designer',
    descricao: 'Site institucional para nail designer',
    link: 'https://bruna-nail-designer.vercel.app',
    github: 'https://github.com/georgecmf/bruna-nail-designer'
  },
  {
    titulo: 'Projeto Restaurante',
    descricao: 'Site institucional para restaurante',
    link: 'https://gmf-projeto-restaurante.vercel.app',
    github: 'https://github.com/georgecmf/projeto-restaurante'
  }
]

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      {projetos.map((projeto) => (
        <li key={projeto.titulo}>
          <Projeto
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            link={projeto.link}
            github={projeto.github}
          />
        </li>
      ))}
    </Lista>
  </section>
)

export default Projetos
