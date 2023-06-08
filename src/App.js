import './App.scss';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Body from './components/Body';
import { useState } from 'react';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const correctedSearchData = (data) => {
      const [lan, lon] = data.value.split(' ')
      const selectedCityArray = [parseFloat(lan), parseFloat(lon)]
      console.log(selectedCityArray);
      return selectedCityArray;
    }
    setSelectedCity(correctedSearchData(searchData))

    // setSelectedCity(correctedSearchData(searchData))
    // console.log(searchData, 'Search');
  }

  const handleClose = () => setShowSideBar(false);
  const handleShow = () => setShowSideBar(true);
  return (
    <>
      <Header handleShow={handleShow} onSearchChange={handleOnSearchChange} />
      <Container className='App'>
        <Body showSideBar={showSideBar} handleClose={handleClose} selectedCity={selectedCity} />
      </Container>
    </>
  );
}

export default App;
