import React from 'react'
import {Marker, Popup} from 'react-leaflet'
import Icono from '../assets/Icon'
import {venues} from '../assets/locations.json'

const Marcador = () => {
  const arrayMarkers = venues.map((location) => {
    return (
      <Marker
        key={location.id}
        position={location.latlng}
        icon={Icono}>
        <Popup>
          {location.nombre}
          <br/>
          {location.description}
          <br/>
          {location.url}
        </Popup>
      </Marker>
    )
  })
  return arrayMarkers
}

export default Marcador;