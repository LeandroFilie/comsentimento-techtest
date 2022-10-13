import Header from '../../components/Header';
import { Container, Banner, TitleSection } from './styles';

import PlusIcon from '../../assets/plus.png';
import { Footer } from '../../components/Footer';
import Edital from '../../components/Edital';

export default function Home() {
  return (
    <>
      <Container>
        <Header />

        <Banner>
          <div className="banner-text">
            <h1>Programa de Desenvolvimento de Inteligência Artificial em Saúde</h1>
          </div>
        </Banner>

        <section>
          <TitleSection>
            <img src={PlusIcon} alt="Icon" />
            <h2>Editais de Linhas de Pesquisa</h2>
          </TitleSection>

          <Edital name="Extração de relações temporais em textos clínicos" isOpened />

          <Edital name="Extração de relações temporais em textos clínicos" isOpened />

          <Edital name="Extração de relações temporais em textos clínicos" isOpened={false} />

          <Edital name="Extração de relações temporais em textos clínicos" isOpened />
        </section>

      </Container>

      <Footer />
    </>
  );
}
