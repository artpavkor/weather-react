import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DayWeather from './DayWeather';
import { useEffect } from 'react';
import {
  getCurrentWeather,
  getForecastWeather,
} from '../../services/apiService';
import SideBar from './SideBar';
import Map from './Map';
import InfoWeather from './InfoWeather';
import ForecastWeather from './ForecastWeather';
import TemperaturaChart from './TemperaturaChart';

function Body({
  showSideBar,
  handleClose,
  selectedCity,
  currentWeather,
  setCurrentWeather,
  forecastWeather,
  setForecastWeather,
}) {
  useEffect(() => {
    getCurrentWeather().then((weather) => {
      setCurrentWeather(weather);
    });
    getForecastWeather().then((forecast) => {
      setForecastWeather(forecast);
    });
  }, [setCurrentWeather, setForecastWeather]);
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col>
            <DayWeather
              currentWeather={currentWeather}
              selectedCity={selectedCity}
            />
          </Col>
          <Col xs={12} lg={6}>
            <Map selectedCity={selectedCity} />
          </Col>
          <Col>
            <InfoWeather currentWeather={currentWeather} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ForecastWeather forecastWeather={forecastWeather} />
          </Col>
        </Row>
        <Row>
          <Col>
            <TemperaturaChart forecastWeather={forecastWeather} />
          </Col>
          <Col>
            <TemperaturaChart forecastWeather={forecastWeather} />
          </Col>
        </Row>
      </Container>
      <SideBar
        showSideBar={showSideBar}
        handleClose={handleClose}
        setCurrentWeather={setCurrentWeather}
        setForecastWeather={setForecastWeather}
      />
    </>
  );
}

export default Body;
