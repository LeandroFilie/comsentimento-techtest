import styled from 'styled-components';

export const Container = styled.article`
  background: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  margin: 0 auto;
  max-width: 1200px;

  cursor: pointer;

  p{
    font-size: 1.125rem;
    font-weight: 500;
  }

  .status{
    color: ${({ theme, isOpened }) => (isOpened ? theme.colors.green : theme.colors.danger)};

    img{
      width: 10px;
      height: 10px;
      margin-right: 8px;
    }
  }
`;
