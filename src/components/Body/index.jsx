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
import ErrorModal from './ErrorModal';

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
  showErrorModal,
  setShowErrorModal,
  handleCloseErrorModal,
  handleShowErrorModal,
}) {
  useEffect(() => {
    getCurrentWeather().then((weather) => {
      setCurrentWeather(weather);
    });
    getForecastWeather().then((forecast) => {
      setForecastWeather(forecast);
    });
  }, [setCurrentWeather, setForecastWeather]);

  setTimeout(() => {
    setIsLoading(currentWeather?.cod);
  }, 1000);

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
          <ErrorModal
            showErrorModal={showErrorModal}
            setShowErrorModal={setShowErrorModal}
            handleShowErrorModal={handleShowErrorModal}
            handleCloseErrorModal={handleCloseErrorModal}
          />
        </div>
      )}
    </>
  );
}

export default Body;
