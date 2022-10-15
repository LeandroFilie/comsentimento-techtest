import styled from 'styled-components';

export const Container = styled.main`
  background: linear-gradient(180deg, #604FFF 0%, #604FFF 39.06%, #B8B0FF 94.79%);
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 0 2rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    height: 155px;
    object-fit: cover;
  }

  h1 {
    font-size: 2rem;  
    color: ${({ theme }) => theme.colors.gray[50]};
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 25rem;

  margin-top: 2rem;

  @media(max-width: 400px){
    width: 20rem;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    color: ${({ theme }) => theme.colors.gray[50]};
    font-weight: 500;
    font-size: 1.175rem;
    width: 100%;
  }
`;
