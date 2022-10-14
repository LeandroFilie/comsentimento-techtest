import styled from 'styled-components';

export const Button = styled.button`
  padding: 12px 16px;

  background: ${({ theme }) => theme.colors.secondary};
  border: none;
  border-radius: 4px;

  font-weight: 500;
  font-size: 1.175rem;
  width: 100%;

  margin-top: 1rem;
`;
