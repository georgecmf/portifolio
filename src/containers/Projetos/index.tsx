import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'

const projetos = [
  {
    titulo: 'Mimos da Bru',
    descricao:
      'Site institucional para marca de roupas personalizadas, com foco em apresentação de produtos, identidade visual e contato com clientes.',
    link: 'https://site-mimosbru-george.vercel.app',
    github: 'https://github.com/georgecmf/site.mimosbru'
  },
  {
    titulo: 'Nail Designer',
    descricao:
      'Site institucional para profissional autônoma, destacando serviços, valores e facilitando o contato com clientes.',
    link: 'https://bruna-nail-designer.vercel.app',
    github: 'https://github.com/georgecmf/bruna-nail-designer'
  },
  {
    titulo: 'Projeto Restaurante',
    descricao:
      'Site institucional para restaurante, com apresentação do cardápio, informações do estabelecimento e layout responsivo.',
    link: 'https://projeto-restaurante-one.vercel.app',
    github: 'https://github.com/georgecmf/projeto-restaurante'
  },
  {
    titulo: 'Clone Disney+',
    descricao:
      'Interface inspirada no Disney+, com layout responsivo, animações e organização de código focada em boas práticas de front-end.',
    link: 'https://clone-disneyplus-pied-xi.vercel.app',
    github: 'https://github.com/georgecmf/clone_disneyplus'
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
