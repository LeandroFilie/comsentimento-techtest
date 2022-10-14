import styled from 'styled-components';

export const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.gray[700]};
  height: 32px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
