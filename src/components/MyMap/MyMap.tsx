import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './MyMap.module.scss';

type MyMapProps = {
  center?: [number, number];
  className?: string;
};

const DEFAULT_CENTER_COORD: [number, number] = [53.895384, 27.558456];

export default function MyMap({ center, className }: MyMapProps) {
  return (
    <MapContainer
      className={`${styles.map} ${className ?? ''}`}
      center={center ?? DEFAULT_CENTER_COORD}
      zoom={11.5}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
