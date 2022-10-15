import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);

  opacity: 0;
  pointer-events: none;
  transition: all 0.2s;
  transform: translateY(50px);

  > button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    border: none;
    outline: none;
    background: transparent;

    img {
      height: 32px;
    }
    
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    font-size: 2rem;
    font-weight: 600;

    button {
      font-size: 1.5rem;
    }
  }

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transition: all 0.2s;
    transform: translateY(0);
  `}
`;
