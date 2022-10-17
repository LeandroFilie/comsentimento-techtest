import PropTypes from 'prop-types';

import { Content, Footer } from './style';

import logo from '../../assets/logo-color.png';
import plusIcon from '../../assets/plus.png';

export default function ModalDetail({ notice }) {
  return (
    <>
      <Content>
        <h3>
          <img src={plusIcon} alt="item" />
          Título:
          {' '}
          {notice.noticeTitle}
        </h3>
        <p>
          <img src={plusIcon} alt="item" />
          {notice.noticeDescription}
        </p>
        <p>
          <img src={plusIcon} alt="item" />
          Data de Abertura:
          {' '}
          {notice.noticeOpeningDate}
        </p>
        <p>
          <img src={plusIcon} alt="item" />
          Status:
          {' '}
          {notice.noticeStatus === 'true' ? 'aberto' : 'fechado'}
        </p>
      </Content>
      <Footer>
        <img src={logo} alt="Comsentimento" />
      </Footer>
    </>
  );
}

ModalDetail.propTypes = {
  notice: PropTypes.shape({
    noticeID: PropTypes.number,
    noticeTitle: PropTypes.string,
    noticeDescription: PropTypes.string,
    noticeOpeningDate: PropTypes.string,
    noticeStatus: PropTypes.string,
  }).isRequired,
};
