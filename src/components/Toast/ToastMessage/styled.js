import styled, { css } from 'styled-components';

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.green};
  `,
};

export const Container = styled.div`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: #FFF;
  border-radius: 4px;
  box-shadow: 0px 28px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & + & {
    margin-top: 1rem;
  }

  ${({ type }) => containerVariants[type] || containerVariants.default}

`;
