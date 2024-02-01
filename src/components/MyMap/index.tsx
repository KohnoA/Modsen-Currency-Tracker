import { PureComponent } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import 'leaflet/dist/leaflet.css';
import styles from './styles.module.scss';

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
    desc: string;
    coords: [number, number];
  }[];
};

const DEFAULT_CENTER_COORD: [number, number] = [53.895384, 27.558456];
const DEFAULT_ZOOM = 11.5;
const MAP_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const MAP_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

export class MyMap extends PureComponent<MyMapProps> {
  render() {
    const { className, center, markers, zoom } = this.props;

    return (
      <MapContainer
        className={`map ${styles.map} ${className ?? ''}`}
        center={center ?? DEFAULT_CENTER_COORD}
        zoom={zoom ?? DEFAULT_ZOOM}
        scrollWheelZoom={false}
      >
        <TileLayer attribution={MAP_ATTRIBUTION} url={MAP_URL} />
        {markers?.map(({ desc, coords }) => (
          <Marker key={coords.toString()} position={coords}>
            <Popup>{desc}</Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }
}
