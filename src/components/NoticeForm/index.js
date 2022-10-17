import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from './style';
import { Input } from '../Input';
import { Select } from '../Select';
import { TextArea } from '../TextArea';
import Button from '../Button';
import convertDateToEnUs from '../../utils/convertDateToEnUs';

export default function NoticeForm({ buttonLabel, onSubmit, noticeData }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(noticeData !== null);

  const fieldTitle = useRef(null);
  const fieldDescription = useRef(null);
  const fielDate = useRef(null);
  const fielStatus = useRef(null);

  function handleChangeFields() {
    setIsFormValid(fieldTitle.current?.value
      && fieldDescription.current?.value
      && fielDate.current?.value
      && fielStatus.current?.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);

    const title = fieldTitle.current.value;
    const description = fieldDescription.current.value;
    const date = fielDate.current.value;
    const status = fielStatus.current.value;

    await onSubmit({
      title, description, date, status,
    });

    if (!noticeData) {
      fieldTitle.current.value = '';
      fieldDescription.current.value = '';
      fielDate.current.value = '';
      fielStatus.current.value = '';
      setIsFormValid(false);
    }

    setIsSubmitting(false);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Título do Edital"
        ref={fieldTitle}
        defaultValue={noticeData?.noticeTitle}
        onChange={handleChangeFields}
      />

      <TextArea
        placeholder="Descrição"
        ref={fieldDescription}
        defaultValue={noticeData?.noticeDescription}
        onChange={handleChangeFields}
      />

      <Input
        type="date"
        ref={fielDate}
        defaultValue={convertDateToEnUs(noticeData?.noticeOpeningDate)}
        onChange={handleChangeFields}
      />

      <Select ref={fielStatus} defaultValue={noticeData?.noticeStatus || ''} onChange={handleChangeFields}>
        <option value="">Selecione o status</option>
        <option value="true">Aberto</option>
        <option value="false">Fechado</option>
      </Select>

      <Button
        variant="default"
        label={buttonLabel}
        disabled={!isFormValid}
        isLoading={isSubmitting}
      />
    </Form>

  );
}

NoticeForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  noticeData: PropTypes.shape({
    noticeID: PropTypes.number.isRequired,
    noticeTitle: PropTypes.string.isRequired,
    noticeDescription: PropTypes.string.isRequired,
    noticeOpeningDate: PropTypes.string.isRequired,
    noticeStatus: PropTypes.string.isRequired,
  }),
};

NoticeForm.defaultProps = {
  noticeData: null,
};
