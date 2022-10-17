import styled from 'styled-components';

export const Container = styled.article`
  background: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 4px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  margin: 0 auto;
  max-width: 1200px;

  cursor: ${({ authenticate }) => (authenticate ? 'default' : 'pointer')};

  h3{
    font-weight: 500;
  }

  & + & {
    margin-top: 1rem;
  }

  .details{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;

    p{
      font-size: 1rem;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      cursor: pointer;
    }
  }

  .status{
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme, isOpened }) => (isOpened ? theme.colors.green : theme.colors.danger)};

    span{
      display: block;
      height: 8px;
      width: 8px;
      border-radius: 50%;
      background: ${({ theme, isOpened }) => (isOpened ? theme.colors.green : theme.colors.danger)};
    }
  }
`;
