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
import HumidityChart from './HumidityChart';
import Loading from './Loading';

function Body({
  showSideBar,
  handleShowSideBar,
  handleCloseSideBar,
  selectedCity,
  setSelectedCity,
  currentWeather,
  setCurrentWeather,
  forecastWeather,
  setForecastWeather,
  isLoading,
  setIsLoading,
  setErrorMessage,
}) {
  useEffect(() => {
    getCurrentWeather()
      .then((weather) => {
        setCurrentWeather(weather);
      })
      .catch((errorMessage) => {
        setErrorMessage(errorMessage);
      });
    getForecastWeather()
      .then((forecast) => {
        setForecastWeather(forecast);
      })
      .catch((errorMessage) => {
        setErrorMessage(errorMessage);
      });
  }, [setCurrentWeather, setForecastWeather, setErrorMessage]);

  setTimeout(() => {
    setIsLoading(currentWeather?.cod);
  }, 800);

  return (
    <>
      {!isLoading ? (
        <Loading />
      ) : (
        <div>
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
                <TemperaturaChart forecastWeather={forecastWeather} />
              </Col>
              <Col>
                <HumidityChart forecastWeather={forecastWeather} />
              </Col>
            </Row>
            <Row>
              <Col>
                <ForecastWeather forecastWeather={forecastWeather} />
              </Col>
            </Row>
          </Container>
          <SideBar
            showSideBar={showSideBar}
            handleShowSideBar={handleShowSideBar}
            setCurrentWeather={setCurrentWeather}
            handleCloseSideBar={handleCloseSideBar}
            setForecastWeather={setForecastWeather}
            setSelectedCity={setSelectedCity}
          />
        </div>
      )}
    </>
  );
}

export default Body;
