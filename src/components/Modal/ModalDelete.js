/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useState } from 'react';

import NoticesServices from '../../services/NoticesServices';
import Button from '../Button';
import { Content, Footer } from './style';

// eslint-disable-next-line react/prop-types
export default function ModalDelete({ onClose, noticeID }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleConfirmDeleteNotice(id) {
    try {
      setIsSubmitting(true);
      await NoticesServices.deleteNotice(id);

      onClose();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Content>Esta ação não poderá ser desfeita!</Content>
      <Footer>
        <Button
          label="Cancelar"
          onClick={onClose}
          variant="cancel"
          disabled={isSubmitting}
        />
        <Button
          label="Excluir"
          onClick={() => handleConfirmDeleteNotice(noticeID)}
          variant="danger"
          isLoading={isSubmitting}
        />
      </Footer>
    </>
  );
}

ModalDelete.propTypes = {
  onClose: PropTypes.func.isRequired,
  noticeID: PropTypes.number.isRequired,
};
