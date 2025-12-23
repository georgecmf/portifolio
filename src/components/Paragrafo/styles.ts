import styled from 'styled-components'

type Props = {
  $tipo?: 'principal' | 'secundario'
  fontSize?: number
}

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '16px')};

  color: ${(props) =>
    props.$tipo === 'secundario'
      ? props.theme.corSecundaria
      : props.theme.corPrincipal};
`
