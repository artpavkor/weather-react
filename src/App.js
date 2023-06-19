import './App.scss';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Body from './components/Body';
import { useState } from 'react';
import { getCurrentWeather, getForecastWeather } from './services/apiService';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [currentWeather, setCurrentWeather] = useState('');
  const [forecastWeather, setForecastWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(null);


  const handleOnSearchChange = async (searchData) => {
    const correctedSearchData = () => {
      const [lan, lon] = searchData.value.split(' ')
      const selectedCityArray = [parseFloat(lan), parseFloat(lon), searchData.label]
      return selectedCityArray;
    }
    setSelectedCity(correctedSearchData())
    const params = {
      lat: correctedSearchData()[0],
      lon: correctedSearchData()[1],
    };
    const currentWeather = await getCurrentWeather(params);
    setCurrentWeather(currentWeather);
    const forecastWeather = await getForecastWeather(params);
    setForecastWeather(forecastWeather);
  }

  const handleCloseSideBar = () => setShowSideBar(false);
  const handleShowSideBar = () => setShowSideBar(true);
  const handleShowErrorModal = () => setShowErrorModal(true);
  const handleCloseErrorModal = () => setShowErrorModal(false);

  return (
    <>
      {!isLoading ? '' :
        <Header handleShow={handleShowSideBar} onSearchChange={handleOnSearchChange} />
      }
      <Container className='App'>
        <Body
          showSideBar={showSideBar}
          handleShowSideBar={handleShowSideBar}
          handleCloseSideBar={handleCloseSideBar}
          forecastWeather={forecastWeather}
          setForecastWeather={setForecastWeather}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          setCurrentWeather={setCurrentWeather}
          currentWeather={currentWeather}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          showErrorModal={showErrorModal}
          setShowErrorModal={setShowErrorModal}
          handleShowErrorModal={handleShowErrorModal}
          handleCloseErrorModal={handleCloseErrorModal}
        />

      </Container>
    </>
  );
}

export default App;
