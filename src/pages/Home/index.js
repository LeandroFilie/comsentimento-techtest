import Header from '../../components/Header';
import { Banner } from './styles';

export default function Home() {
  return (
    <>
      <Header />
      <Banner>
        <div className="banner-text">
          <h1>Programa de Desenvolvimento de Inteligência Artificial em Saúde</h1>
        </div>
      </Banner>
    </>
  );
}
