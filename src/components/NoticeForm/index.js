import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Form } from './style';
import { Input } from '../Input';
import { Select } from '../Select';
import { TextArea } from '../TextArea';
import Button from '../Button';
import convertDateToEnUs from '../../utils/convertDateToEnUs';

export default function NoticeForm({ buttonLabel, onSubmit, noticeData }) {
  const fieldTitle = useRef(null);
  const fieldDescription = useRef(null);
  const fielDate = useRef(null);
  const fielStatus = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    const title = fieldTitle.current.value;
    const description = fieldDescription.current.value;
    const date = fielDate.current.value;
    const status = fielStatus.current.value;

    onSubmit({
      title, description, date, status,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Título do Edital" ref={fieldTitle} defaultValue={noticeData?.noticeTitle} />

      <TextArea placeholder="Descrição" ref={fieldDescription} defaultValue={noticeData?.noticeDescription} />

      <Input
        type="date"
        ref={fielDate}
        defaultValue={convertDateToEnUs(noticeData?.noticeOpeningDate)}
      />

      <Select ref={fielStatus} defaultValue={noticeData?.noticeStatus}>
        <option value="true">Aberto</option>
        <option value="false">Fechado</option>
      </Select>

      <Button variant="default" label={buttonLabel} />
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
