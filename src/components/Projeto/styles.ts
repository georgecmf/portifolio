import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.corDeFundo};

  display: flex;
  flex-direction: column;
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

export const LinkBotao = styled.a`
  flex: 1;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px 12px;

  border-radius: 4px;
  text-align: center;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
