import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
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

export const ListNotices = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Description = styled.section`
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
