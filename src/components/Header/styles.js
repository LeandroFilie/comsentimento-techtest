/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between; 
  max-width: 1200px;
  padding: 1rem 5rem;
  margin: 0 auto;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;

  li {
    font-size: 1.075rem;
  }
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
