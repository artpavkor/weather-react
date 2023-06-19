import { FormGroup, FormLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import {
  getCurrentWeather,
  defaultParams,
  getForecastWeather,
} from '../../services/apiService';

function SearchForm({
  setCurrentWeather,
  setForecastWeather,
  closeSideBar,
  setSelectedCity,
}) {
  const [selectedData, setSelectedData] = useState(null);

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
      lang: event.target.language.value,
    };
    setSelectedData(params);
    const currentWeather = await getCurrentWeather(params);
    setCurrentWeather(currentWeather);
    const forecastWeather = await getForecastWeather(params);
    setForecastWeather(forecastWeather);
    closeSideBar();
    setSelectedCity([
      parseFloat(params.lat),
      parseFloat(params.lon),
      `${currentWeather?.name} ${currentWeather?.sys.country}`,
    ]);
  };
  const defaultValue = selectedData || defaultParams;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 mt-3">
        <Form.Label>Широта</Form.Label>
        <Form.Control
          type="text"
          placeholder="Latitude"
          name="latitude"
          defaultValue={defaultValue.lat}
        />
        <Form.Text className="text-muted">Пример: 59.4370</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Долгота</Form.Label>
        <Form.Control
          type="text"
          placeholder="Longitude"
          name="longitude"
          defaultValue={defaultValue.lon}
        />
        <Form.Text className="text-muted">Пример: 24.7536</Form.Text>
      </Form.Group>
      <FormGroup className="mb-3">
        <FormLabel>Язык</FormLabel>
        <Form.Select name="language" disabled defaultValue={defaultValue.lang}>
          {languages.map((elem, index) => (
            <option value={elem.code} key={index}>
              {elem.label}
            </option>
          ))}
        </Form.Select>
      </FormGroup>
      <div className="d-grid">
        <Button variant="primary" type="submit">
          Поиск
        </Button>
      </div>
    </Form>
  );
}

export default SearchForm;
