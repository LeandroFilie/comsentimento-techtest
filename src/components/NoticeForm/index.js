import { Form } from './style';
import { Input } from '../Input';
import { Select } from '../Select';
import { TextArea } from '../TextArea';
import { Button } from '../Button';

export default function NoticeForm() {
  return (
    <Form>
      <Input placeholder="Título do Edital" />
      <TextArea placeholder="Descrição" />
      <Input type="date" />
      <Select>
        <option value="open">Aberto</option>
        <option value="close">Fechado</option>
      </Select>
      <Button variant="default">Cadastrar</Button>
    </Form>

  );
}
