import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import NoticesServices from '../../services/NoticesServices';
import Notice from '../Notice';
import { Container } from './style';

export default function ListNotice({ onClick }) {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    async function loadNotices() {
      try {
        const noticesList = await NoticesServices.listNotices();

        setNotices(noticesList.notices);
      } catch (error) {
        console.log('error', error);
      }
    }

    loadNotices();
  }, []);

  return (
    <Container>
      {notices.length > 0 && (
        notices.map((notice) => (
          <Notice
            key={notice.noticeID}
            name={notice.noticeTitle}
            description={notice.noticeDescription}
            date={notice.noticeOpeningDate}
            isOpened={notice.noticeStatus === 'true'}
            onClick={onClick}
          />
        ))
      )}
    </Container>
  );
}

ListNotice.propTypes = {
  onClick: PropTypes.func,
};

ListNotice.defaultProps = {
  onClick: undefined,
};
