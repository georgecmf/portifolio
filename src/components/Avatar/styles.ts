import styled from 'styled-components'

export const FotoPerfil = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-bottom: 24px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  @media (max-width: 768px) {
    width: 96px;
    height: 96px;
  }
`
