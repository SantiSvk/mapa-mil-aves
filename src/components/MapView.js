import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Marcador from './Markers'


const MapView = () => {
    const centro = {
        lat: -32.311116,
        lng: -64,
    }
    return (
        <MapContainer
            center={centro}
            zoom="7"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            <Marcador />
        </MapContainer>
    )

}

export default MapView