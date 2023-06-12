import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DayWeather from './DayWeather';
import { useEffect, useState } from 'react';
import {
  getCurrentWeather,
  getForecastWeather,
} from '../../services/apiService';
import SideBar from './SideBar';
import Map from './Map';
import InfoWeather from './InfoWeather';
import ForecastWeather from './ForecastWeather';

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
  }, [setCurrentWeather]);
  console.log(currentWeather);
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
          <Col xs={6}>
            {' '}
            <Map selectedCity={selectedCity} />
          </Col>
          <Col>
            <InfoWeather
              currentWeather={currentWeather}
              selectedCity={selectedCity}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ForecastWeather forecastWeather={forecastWeather} />
          </Col>
        </Row>
        <Row>
          <Col>
            <DayWeather text={'Daylight hours'} />
          </Col>
          <Col>
            <DayWeather text={'popular queries'} />
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
