import styled from 'styled-components'

type Props = {
  $tipo?: 'principal' | 'secundario'
  fontSize?: number
}

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; /* 👈 ESSA LINHA */

  @media (max-width: 768px) {
    position: static;
    margin-bottom: 40px;
  }
`

export const Descricao = styled.p<Props>`
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '18px')};
  color: ${(props) =>
    props.$tipo === 'secundario'
      ? props.theme.corSecundaria
      : props.theme.corPrincipal};
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px 12px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
