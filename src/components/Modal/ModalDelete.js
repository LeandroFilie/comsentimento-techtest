import PropTypes from 'prop-types';

import NoticesServices from '../../services/NoticesServices';
import Button from '../Button';
import { Content, Footer } from './style';

export default function ModalDelete({ onClose, noticeID }) {
  async function handleConfirmDeleteNotice(id) {
    try {
      await NoticesServices.deleteNotice(id);

      location.reload();

      onClose();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Content>Esta ação não poderá ser desfeita!</Content>
      <Footer>
        <Button label="Cancelar" onClick={onClose} variant="cancel" />
        <Button label="Excluir" onClick={() => handleConfirmDeleteNotice(noticeID)} variant="danger" />
      </Footer>
    </>
  );
}

ModalDelete.propTypes = {
  onClose: PropTypes.func.isRequired,
  noticeID: PropTypes.number.isRequired,
};
