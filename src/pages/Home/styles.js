import styled from 'styled-components';

import BannerImage from '../../assets/banner.png';

export const Container = styled.main`
  position: relative;
`;

export const Banner = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 65vh;
  background-image: url(${BannerImage});
  background-size: cover;
  background-position: 69%;

  .banner-text{
    margin-left: 5rem;
    margin-top: -54px;
    max-width: 1200px;
    margin: 0 auto;

    h1 {
      font-size: 3.75rem;
      width: 40%;
      margin-left: 7rem;
      font-weight: 600;
      letter-spacing: 0.2rem;

      color: ${({ theme }) => theme.colors.gray[50]};
    }
  }

  @media (max-width: 1200px) {
    .banner-text h1 {
      width: 50%;
    }
  }

  @media (max-width: 900px) {
    .banner-text h1 {
      width: 60%;
    }
  }

  @media (max-width: 650px) {
    background: ${({ theme }) => theme.colors.primary};

    .banner-text{
      margin: 0 auto;
      
      h1 {
        width: 90%;
        font-size: 2rem;
        margin: 0;
      }
    }
  }

  @media (max-width: 450px) {
    .banner-text h1 {
      width: 90%;
      font-size: 1 !important;
    }
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem auto;
  margin-top: 0;

  img {
    width: 25px;
    height: 25px;
  }

  h2 {
    font-size: 2rem;
    text-align: center;
  }
`;

export const ContainerNotice = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ContainerProgram = styled.section`
  background: ${({ theme }) => theme.colors.gray[100]};
  padding: 5rem 2rem;
  padding-bottom: calc(10rem - 32px);

  .content {
    display: flex;
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto;

    max-width: 1200px;

    p + p {
      margin-top: 2rem;
    }

    p {
      font-size: 1.25rem;

      img{
        width: 10px;
        height: 10px;
        margin-right: 8px;
      }
    }

    @media (max-width: 700px){
      flex-direction: column;
    }
  }

`;
