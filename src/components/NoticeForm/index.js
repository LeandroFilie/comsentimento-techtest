import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Form } from './style';
import { Input } from '../Input';
import { Select } from '../Select';
import { TextArea } from '../TextArea';
import Button from '../Button';

export default function NoticeForm({ buttonLabel, onSubmit }) {
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
      <Input placeholder="Título do Edital" ref={fieldTitle} />

      <TextArea placeholder="Descrição" ref={fieldDescription} />

      <Input type="date" ref={fielDate} />

      <Select ref={fielStatus}>
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
};
