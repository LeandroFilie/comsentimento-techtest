import { useState } from 'react';
import PropTypes from 'prop-types';

import NoticesServices from '../../services/NoticesServices';

import Button from '../Button';
import toast from '../../utils/toast';

import { Content, Footer } from './style';

export default function ModalDelete({ onClose, noticeID }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleConfirmDeleteNotice(id) {
    try {
      setIsSubmitting(true);
      await NoticesServices.deleteNotice(id);

      onClose();

      toast({
        type: 'success',
        text: 'Edital removido com sucesso',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Erro ao remover edital',
      });
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
