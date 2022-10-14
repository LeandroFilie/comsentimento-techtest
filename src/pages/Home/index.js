import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Notice from '../../components/Notice';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import {
  Banner, TitleSection, Description, ListNotices, Container,
} from './styles';

import PlusIcon from '../../assets/plus.png';

export default function Home() {
  return (
    <Container>
      <Header>
        <li>
          <a href="#notice">Editais</a>
          <span />
        </li>
        <li>
          <a href="#program">O Programa</a>
          <span />
        </li>
        <Link to="/login"><Button variant="ghost" type="button">Área Administrativa</Button></Link>
      </Header>

      <Banner>
        <div className="banner-text">
          <h1>Programa de Desenvolvimento de Inteligência Artificial em Saúde</h1>
        </div>
      </Banner>

      <ListNotices id="notice">
        <TitleSection>
          <img src={PlusIcon} alt="Icon" />
          <h2>Editais de Linhas de Pesquisa</h2>
        </TitleSection>

        <Notice name="Extração de relações temporais em textos clínicos" isOpened />

        <Notice name="Extração de relações temporais em textos clínicos" isOpened />

        <Notice name="Extração de relações temporais em textos clínicos" isOpened={false} />

        <Notice name="Extração de relações temporais em textos clínicos" isOpened />
      </ListNotices>

      <Description id="program">
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

      </Description>
      <Footer />
    </Container>
  );
}
