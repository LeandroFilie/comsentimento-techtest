import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 5rem;
  margin-bottom: 3rem;

  a{
    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;

    span{
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 500;
    }
  }
`;
