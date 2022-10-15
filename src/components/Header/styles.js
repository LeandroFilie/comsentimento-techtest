/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
`;

export const Menu = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between; 
  max-width: 1200px;
  padding: 1rem 5rem;
  margin: 0 auto;

  @media (max-width: 650px) {
      padding: 1rem;
  }
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  li {
    font-size: 1.075rem;
    padding: 0.5rem;

    display: flex;
    flex-direction: column;

    cursor: pointer;

    span{
      height: 2px;
      width: 0%;
      background: ${({ theme }) => theme.colors.primary};
      transition: all .5s;
    }

    &:hover{
      span {
        width: 100%;
      }
    }
    
  }

  @media (max-width: 650px) {
    display: none;
  }
`;
