import './App.scss';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Body from './components/Body';
import { useState } from 'react';
import { getCurrentWeather } from './services/apiService';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const [currentWeather, setCurrentWeather] = useState('');


  const handleOnSearchChange = async (searchData) => {
    const correctedSearchData = () => {
      const [lan, lon] = searchData.value.split(' ')
      const selectedCityArray = [parseFloat(lan), parseFloat(lon)]
      return selectedCityArray;
    }
    setSelectedCity(correctedSearchData())
    const params = {
      lat: correctedSearchData()[0],
      lon: correctedSearchData()[1],
    };
    console.log(params);
    const currentWeather = await getCurrentWeather(params);
    setCurrentWeather(currentWeather);
  }

  const handleClose = () => setShowSideBar(false);
  const handleShow = () => setShowSideBar(true);
  return (
    <>
      <Header handleShow={handleShow} onSearchChange={handleOnSearchChange} />
      <Container className='App'>
        <Body showSideBar={showSideBar} handleClose={handleClose} selectedCity={selectedCity} setCurrentWeather={setCurrentWeather} currentWeather={currentWeather} />
      </Container>
    </>
  );
}

export default App;
