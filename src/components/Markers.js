import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import Icono from '../assets/Icon'
import {venues} from '../assets/locations.json'

const Marcador = () => {
    let i = -1 //Si no hacía esta chanchada no me entraba en el json
    const arrayMarkers = venues.map(() => {
        i++
        console.log(venues.[i].description)
        return(
        <Marker
            key={i}
            position={venues.[i].latlng}
            icon={Icono}
        >
            <Popup>
                {venues.[i].nombre}
                <br/>
                {venues.[i].description}
                <br/>
                {venues.[i].url}
            </Popup>
        </Marker>
        )
    })
    return arrayMarkers
    }

export default Marcador;