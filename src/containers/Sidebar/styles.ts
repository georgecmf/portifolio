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
  text-align: center;

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

  a {
    color: ${(props) => props.theme.corPrincipal};
    font-size: inherit;
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }
`

export const DescricaoContato = styled(Descricao)`
  font-size: 16px;
  margin: 6px 0;

  display: flex;
  align-items: center;
  gap: 6px;

  a {
    color: ${(props) => props.theme.corPrincipal};
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px 12px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
