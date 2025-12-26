import styled from 'styled-components'

export const StackGrid = styled.ul`
  margin-top: 16px;
  margin-bottom: 48px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const StackCard = styled.li`
  background-color: ${(props) => props.theme.corDeFundo};
  border: 1px solid ${(props) => props.theme.corDaBorda};
  border-radius: 12px;
  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.corPrincipal};

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`
