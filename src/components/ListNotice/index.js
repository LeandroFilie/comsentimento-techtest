import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import NoticesServices from '../../services/NoticesServices';
import Notice from '../Notice';
import Loader from '../Loader';
import EmptyResponse from '../EmptyResponse';
import { Container } from './style';

export default function ListNotice({ onOpenModal, noticeIdBeingDeleted, notDetailed }) {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadNotices = useCallback(async () => {
    try {
      const noticesList = await NoticesServices.listNotices();

      setNotices(noticesList.notices);
      setLoading(false);
    } catch (error) {
      setNotices({});
    } finally {
      setLoading(false);
    }
  }, [noticeIdBeingDeleted]);

  useEffect(() => {
    loadNotices();
  }, [loadNotices]);

  if (loading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  return (
    <Container>
      {notices.length > 0 ? (
        notices.map((notice) => (
          <Notice
            key={Math.random()}
            notice={notice}
            onOpenModal={() => onOpenModal(notice)}
            notDetailed={notDetailed}
          />
        ))
      ) : (
        <EmptyResponse />
      )}
    </Container>
  );
}

ListNotice.propTypes = {
  onOpenModal: PropTypes.func,
  noticeIdBeingDeleted: PropTypes.number,
  notDetailed: PropTypes.bool,
};

ListNotice.defaultProps = {
  onOpenModal: undefined,
  noticeIdBeingDeleted: undefined,
  notDetailed: false,
};
