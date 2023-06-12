import './App.scss';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Body from './components/Body';
import { useState } from 'react';
import { getCurrentWeather, getForecastWeather } from './services/apiService';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [currentWeather, setCurrentWeather] = useState('');
  const [forecastWeather, setForecastWeather] = useState(null);



  const handleOnSearchChange = async (searchData) => {
    // Array add city
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

  const handleClose = () => setShowSideBar(false);
  const handleShow = () => setShowSideBar(true);
  return (
    <>
      <Header handleShow={handleShow} onSearchChange={handleOnSearchChange} />
      <Container className='App'>
        <Body
          showSideBar={showSideBar}
          handleClose={handleClose}
          forecastWeather={forecastWeather}
          setForecastWeather={setForecastWeather}
          selectedCity={selectedCity}
          setCurrentWeather={setCurrentWeather}
          currentWeather={currentWeather} />
      </Container>
    </>
  );
}

export default App;
