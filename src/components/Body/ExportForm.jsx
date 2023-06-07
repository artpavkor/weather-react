import Form from 'react-bootstrap/Form';
import { FormGroup, FormLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { generateFetchUrl } from '../../services/apiService';

function ExportForm() {
  const modes = ['xml', 'html', 'json'];

  const handleSubmit = (event) => {
    event.preventDefault();
    const mode = event.target.mode.value;
    const url = generateFetchUrl({ mode });
    window.open(url);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className="mb-3">
        <FormLabel>Mode</FormLabel>
        <Form.Select name="mode" defaultValue={'ru'}>
          {modes.map((elem, index) => (
            <option value={elem} key={index}>
              {elem}
            </option>
          ))}
        </Form.Select>
      </FormGroup>
      <div className="d-grid">
        <Button variant="secondary" type="submit">
          Export
        </Button>
      </div>
    </Form>
  );
}

export default ExportForm;
