import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SearchForm from './SearchForm';
import ExportForm from './ExportForm';
import { useState } from 'react';

function SideBar({
  showSideBar,
  handleClose,
  setCurrentWeather,
  setForecastWeather,
}) {
  const [selectedData, setSelectedData] = useState(null);

  return (
    <>
      <Offcanvas show={showSideBar} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search Weather</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ExportForm />
          <SearchForm
            setCurrentWeather={setCurrentWeather}
            setForecastWeather={setForecastWeather}
            closeSideBar={handleClose}
            selectedData={selectedData}
            setSelectedData={setSelectedData}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
