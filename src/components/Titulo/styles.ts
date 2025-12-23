import styled from 'styled-components'

type Props = {
  $fontSize?: number
}

export const Titulo = styled.h3<Props>`
  font-size: ${(props) => (props.$fontSize ? `${props.$fontSize}px` : '16px')};
  color: ${(props) => props.theme.corPrincipal};
  font-weight: bold;
  margin-bottom: 16px;
`
