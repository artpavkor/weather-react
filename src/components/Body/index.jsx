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

function Body({ showSideBar, handleClose, selectedCity }) {
  const [currentWeather, setCurrentWeather] = useState('');
  const [forecastWeather, setForecastWeather] = useState(null);

  // console.log(currentWeather, 'CurrentWeather');

  // ForecastWeather NEXT-----------------------
  // console.log(forecastWeather, 'ForecastWeather');

  useEffect(() => {
    getCurrentWeather().then((weather) => {
      setCurrentWeather(weather);
    });
    getForecastWeather().then((forecast) => {
      setForecastWeather(forecast);
    });
  }, []);
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col>
            <DayWeather text={'DayWeather'} />
          </Col>
          <Col xs={6}>
            {' '}
            <Map selectedCity={selectedCity} />
          </Col>
          <Col>
            <DayWeather text={'Info?'} />
          </Col>
        </Row>
        <Row>
          <Col>
            <DayWeather text={'5 day forecast'} />
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
