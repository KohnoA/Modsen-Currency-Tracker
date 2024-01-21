import { PureComponent } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import styles from './MyMap.module.scss';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

type MyMapProps = {
  center?: [number, number];
  className?: string;
  zoom?: number;
  markers?: {
    popupDesc: string;
    coord: [number, number];
  }[];
};

const DEFAULT_CENTER_COORD: [number, number] = [53.895384, 27.558456];
const DEFAULT_ZOOM = 11.5;

export default class MyMap extends PureComponent<MyMapProps> {
  render() {
    const { className, center, markers, zoom } = this.props;

    return (
      <MapContainer
        className={`${styles.map} ${className ?? ''}`}
        center={center ?? DEFAULT_CENTER_COORD}
        zoom={zoom ?? DEFAULT_ZOOM}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers?.map(({ popupDesc, coord }) => (
          <Marker key={coord.toString()} position={coord}>
            <Popup>{popupDesc}</Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }
}
