import './App.scss';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Body from './components/Body';
import { useState } from 'react';

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  console.log(showSideBar);
  const handleClose = () => setShowSideBar(false);
  const handleShow = () => setShowSideBar(true);
  return (
    <>
      <Header handleShow={handleShow} />
      <Container className='App'>
        <Body showSideBar={showSideBar} handleClose={handleClose} />
      </Container>
    </>
  );
}

export default App;
