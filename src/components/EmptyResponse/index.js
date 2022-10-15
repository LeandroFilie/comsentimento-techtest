import { Container } from './style';

import bad from '../../assets/bad.svg';

export default function EmptyResponse() {
  return (
    <Container>
      <h4>Nenhum edital no momento</h4>
      <img src={bad} alt="emoji triste" />
    </Container>
  );
}
