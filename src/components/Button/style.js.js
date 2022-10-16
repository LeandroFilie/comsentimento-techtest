import styled, { css } from 'styled-components';

const containerVariant = {
  default: css`
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.gray[900]};
    width: 100%;
    font-size: 1.175rem;
  `,
  ghost: css`
    background: transparent;
    border: solid 2px ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      color: ${({ theme }) => theme.colors.gray[50]};
      background: ${({ theme }) => theme.colors.primary};
      transition: all 0.2s;
    }
  `,
};

export const Container = styled.button`
  padding: 12px 16px;
  border: none;
  border-radius: 4px;

  font-weight: 500;
  font-size: 1rem;

  transition: all 0.2s;

  ${({ variant }) => containerVariant[variant] || containerVariant.default};
`;