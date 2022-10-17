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
  cancel: css`
    color: ${({ theme }) => theme.colors.gray[400]};
    background: transparent;
    transition: all 0.2s;
  `,
  danger: css`
    color: ${({ theme }) => theme.colors.gray[50]};
    background: ${({ theme }) => theme.colors.danger};
    transition: all 0.2s;
  `,
};

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  height: 44px;

  font-weight: 500;
  font-size: 1rem;

  transition: all 0.2s;

  ${({ variant }) => containerVariant[variant] || containerVariant.default};

  &[disabled]{
    color: ${({ theme }) => theme.colors.gray[50]};
    background: ${({ theme }) => theme.colors.gray[400]};
    cursor: not-allowed;
  }
`;
