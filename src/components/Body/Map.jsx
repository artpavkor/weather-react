import { useEffect } from 'react';
import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import L from 'leaflet';

function Map({ selectedCity }) {
  const defaultPosition = [49.98081, 36.25272];
  const position = selectedCity ? selectedCity : defaultPosition;
  const customIcon = new Icon({
    // iconUrl:
    //   'https://cdn.icon-icons.com/icons2/1154/PNG/512/1486564413-marker_81517.png',
    iconUrl: require('../../img/marker-two.png'),
    iconSize: [37, 39], // size of the icon
  });

  function ResetCenterView(props) {
    const { selectedCity } = props;
    const map = useMap();
    useEffect(() => {
      if (selectedCity) {
        map.setView(L.latLng(selectedCity[0], selectedCity[1]), map.getZoom(), {
          animate: true,
        });
      }
    }, [selectedCity, map]);

    return null;
  }

  return (
    <div style={{ marginBottom: '23px' }}>
      <MapContainer center={position} zoom={8} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://maps.geoapify.com/v1/tile/maptiler-3d/{z}/{x}/{y}.png?apiKey=9c94c3e8da904685b81d6b3b9aeaf159"
        />
        <Marker position={position} icon={customIcon}>
          <Popup closeOnClick={true}>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <ResetCenterView selectedCity={selectedCity} />
      </MapContainer>
    </div>
  );
}

export default Map;
