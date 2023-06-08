import { FormGroup, FormLabel, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import {
  getCurrentWeather,
  defaultParams,
  getForecastWeather,
} from '../../services/apiService';

function SearchForm({
  setCurrentWeather,
  setForecastWeather,
  closeSideBar,
  selectedData,
  setSelectedData,
}) {
  const units = ['standard', 'metric', 'imperial'];
  const languages = [
    {
      label: 'English',
      code: 'en',
    },
    {
      label: 'Finnish',
      code: 'fi',
    },
    {
      label: 'Russian',
      code: 'ru',
    },
  ];
  const handleSubmit = async (event) => {
    event.preventDefault();
    const params = {
      lat: event.target.latitude.value,
      lon: event.target.longitude.value,
      units: event.target.unit.value,
      lang: event.target.language.value,
    };
    setSelectedData(params);
    const currentWeather = await getCurrentWeather(params);
    console.log(currentWeather);
    setCurrentWeather(currentWeather);
    const forecastWeather = await getForecastWeather(params);
    setForecastWeather(forecastWeather);
    closeSideBar();
  };
  const defaultValue = selectedData || defaultParams;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 mt-3">
        <Form.Label>Latitude</Form.Label>
        <Form.Control
          type="text"
          placeholder="Latitude"
          name="latitude"
          defaultValue={defaultValue.lat}
        />
        <Form.Text className="text-muted">Example: 59.4370</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Longitude</Form.Label>
        <Form.Control
          type="text"
          placeholder="Longitude"
          name="longitude"
          defaultValue={defaultValue.lon}
        />
        <Form.Text className="text-muted">Example: 24.7536</Form.Text>
      </Form.Group>
      <Row>
        <Col>
          <FormGroup className="mb-3">
            <FormLabel>Units</FormLabel>
            {units.map((elem, index) => (
              <Form.Check
                type="radio"
                label={elem}
                key={index}
                name="unit"
                value={elem}
                defaultChecked={elem === defaultValue.units}
              />
            ))}
            <Form.Text className="text-muted">Measurement type</Form.Text>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup className="mb-3">
        <FormLabel>Languages</FormLabel>
        <Form.Select name="language" defaultValue={defaultValue.lang}>
          {languages.map((elem, index) => (
            <option value={elem.code} key={index}>
              {elem.label}
            </option>
          ))}
        </Form.Select>
      </FormGroup>

      <div className="d-grid">
        <Button variant="primary" type="submit">
          Search
        </Button>
      </div>
    </Form>
  );
}

export default SearchForm;
