import styled from 'styled-components';

import BannerImage from '../../assets/banner.png';

export const Container = styled.section`
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
      h1 {
        text-align: center;
        width: 90%;
        font-size: 2.5rem;
        margin: 0 auto;
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
