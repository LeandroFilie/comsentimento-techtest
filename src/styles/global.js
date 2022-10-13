import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'League Spartan', sans-serif;
  }

  body{
    background: ${({ theme }) => theme.colors.gray[50]};
    color: ${({ theme }) => theme.colors.gray[900]};
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  @media (max-width: 1080px) {
    html {
        font-size: 93.75%;
      }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
