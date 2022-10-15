import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0 0.5rem;
`;

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  margin: 5rem 2rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 1rem 2rem;

  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};

  h3{
    font-size: 1.5rem;
    font-weight: 600;
  }

  span {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem;

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }

  img {
    height: 15px;
    object-fit: cover;
    margin-right: 8px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: end;
  padding: 1rem 2rem;

  img {
    height: 80px;
    object-fit: cover;
    margin-top: -4rem;
  }
`;
