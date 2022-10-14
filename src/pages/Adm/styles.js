import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
  max-width: 1200px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  margin-top: 5rem;
`;

export const Button = styled.button`
  padding: 0.75rem 1rem;
  background: transparent;

  border: solid 2px ${({ theme }) => theme.colors.primary};
  border-radius: 4px;

  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.gray[50]};
    background: ${({ theme }) => theme.colors.primary};
    transition: all 0.2s;
  }
`;

export const ContainerNotice = styled.section`
  padding: 2rem;
  margin: 0 auto;
`;
