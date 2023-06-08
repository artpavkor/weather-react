import './App.scss';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Body from './components/Body';
import { useState } from 'react';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData, 'Search');
  }

  const handleClose = () => setShowSideBar(false);
  const handleShow = () => setShowSideBar(true);
  return (
    <>
      <Header handleShow={handleShow} onSearchChange={handleOnSearchChange} />
      <Container className='App'>
        <Body showSideBar={showSideBar} handleClose={handleClose} />
      </Container>
    </>
  );
}

export default App;
