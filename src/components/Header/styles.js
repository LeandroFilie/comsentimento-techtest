/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  max-width: 1200px;
  padding: 1rem 5rem;
  margin: 0 auto;

  .menu-icon{
    border: none;
    outline: none;
    background: transparent;

    img {
      height: 28px;
    }
  }

  @media (max-width: 650px) {
      padding: 1rem;
  }

  @media (min-width: 900px) {
    .menu-icon {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a {
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

  @media (max-width: 900px) {
    display: none;
  }
`;
