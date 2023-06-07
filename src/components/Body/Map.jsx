import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

function Map() {
  const position = [49.98081, 36.25272];
  const customIcon = new Icon({
    // iconUrl:
    //   'https://cdn.icon-icons.com/icons2/1154/PNG/512/1486564413-marker_81517.png',
    iconUrl: require('../../img/marker.png'),
    iconSize: [38, 39], // size of the icon
  });

  return (
    <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://maps.geoapify.com/v1/tile/maptiler-3d/{z}/{x}/{y}.png?apiKey=9c94c3e8da904685b81d6b3b9aeaf159"
      />
      <Marker position={position} icon={customIcon}>
        <Popup closeOnClick={true}>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
