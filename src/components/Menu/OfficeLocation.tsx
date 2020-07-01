import React from 'react';
import styled from 'styled-components';
import { renderToString } from 'react-dom/server';
import { Location } from '@styled-icons/evil/Location';
import { LatLngExpression, divIcon } from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { color } from '../../theme';
import 'leaflet/dist/leaflet.css';

const position: LatLngExpression = [37.9858567, -1.1302169];

interface Props {
  className?: string;
}

const Pin = styled(Location)`
  color: ${color.primary};
  position: relative;
  top: -100%;
  left: -100%;
`;

const iconHtml = renderToString(<Pin size="36" />);

const icon = divIcon({
  html: iconHtml,
  className: ''
});

export const OfficeLocation: React.FC<Props> = ({ className }) => (
  <Map
    className={className}
    touchZoom={false}
    zoomControl={false}
    center={position}
    zoom={14}
  >
    <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
    <Marker position={position} icon={icon} />
  </Map>
);
