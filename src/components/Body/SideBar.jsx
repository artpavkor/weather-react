import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SearchForm from './SearchForm';
import ExportForm from './ExportForm';

function SideBar({
  showSideBar,
  handleCloseSideBar,
  setCurrentWeather,
  setForecastWeather,
  setSelectedCity,
}) {
  return (
    <>
      <Offcanvas show={showSideBar} onHide={handleCloseSideBar}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Расширенный поиск</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ExportForm />
          <SearchForm
            setCurrentWeather={setCurrentWeather}
            setForecastWeather={setForecastWeather}
            closeSideBar={handleCloseSideBar}
            setSelectedCity={setSelectedCity}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
