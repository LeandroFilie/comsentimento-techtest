import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  h4 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    font-size: 1.25rem;
  }
`;
