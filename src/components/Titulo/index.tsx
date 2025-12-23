import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = ({ children, fontSize }: Props) => (
  <TituloEstilo $fontSize={fontSize}>{children}</TituloEstilo>
)

export default Titulo
