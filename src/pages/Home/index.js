import Header from '../../components/Header';
import {
  Container, Banner, TitleSection, ContainerProgram, ContainerNotice,
} from './styles';

import { Footer } from '../../components/Footer';
import Edital from '../../components/Notice';

import PlusIcon from '../../assets/plus.png';

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

        <ContainerNotice id="notice">
          <TitleSection>
            <img src={PlusIcon} alt="Icon" />
            <h2>Editais de Linhas de Pesquisa</h2>
          </TitleSection>

          <Edital name="Extração de relações temporais em textos clínicos" isOpened />

          <Edital name="Extração de relações temporais em textos clínicos" isOpened />

          <Edital name="Extração de relações temporais em textos clínicos" isOpened={false} />

          <Edital name="Extração de relações temporais em textos clínicos" isOpened />
        </ContainerNotice>

        <ContainerProgram id="program">
          <TitleSection>
            <img src={PlusIcon} alt="Icon" />
            <h2>O Programa</h2>
          </TitleSection>

          <div className="content">
            <div className="objective">
              <p>
                <img src={PlusIcon} alt="Item" />
                Aproximar a organização do ambiente de pesquisa acadêmico
              </p>
              <p>
                <img src={PlusIcon} alt="Item" />
                Aumentar a contratação e retenção de talentos de IA em saúde
              </p>
              <p>
                <img src={PlusIcon} alt="Item" />
                Demonstrar autoridade no tema através de publicações científicas
              </p>
              <p>
                <img src={PlusIcon} alt="Item" />
                Desenvolver tecnologias que possam ser acopladas ao pipeline atual
                de produtos ou que possibilitem novos caminhos de geração de valor
              </p>
            </div>

            <div className="requirements">
              <p>
                <img src={PlusIcon} alt="Item" />
                Estudantes de Iniciação Científica, Mestrado, Doutorado ou Pós-doutorado
              </p>

              <p>
                <img src={PlusIcon} alt="Item" />
                Interesse nos temas apresentados
              </p>

              <p>
                <img src={PlusIcon} alt="Item" />
                Recebimento de bolsa
              </p>

              <p>
                <img src={PlusIcon} alt="Item" />
                Se tornará parte da equipe de NLP da Comsentimento
              </p>
            </div>
          </div>

        </ContainerProgram>

      </Container>

      <Footer />
    </>
  );
}
