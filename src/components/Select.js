import styled, { css } from 'styled-components';

const selectVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.gray[100]};
      &:focus{
      outline: 2px solid ${({ theme }) => theme.colors.primary};
    }
  `,
  login: css`
    background: ${({ theme }) => theme.colors.gray[50]};
    &:focus{
      outline: 2px solid ${({ theme }) => theme.colors.secondary};
    }
  `,
};

export const Select = styled.select`
  height: 48px;
  border: none;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 1.125rem;
  width: 100%;

  ${({ variant }) => selectVariants[variant] || selectVariants.default};
`;
