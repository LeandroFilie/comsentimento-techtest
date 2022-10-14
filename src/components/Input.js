import styled from 'styled-components';

export const Input = styled.input`
  height: 48px;
  border: none;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 1.125rem;
  width: 100%;

  background: ${({ variant, theme }) => (variant === 'light' ? theme.colors.gray[50] : theme.colors.gray[100])};

  &:focus{
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;
