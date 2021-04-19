import L from 'leaflet'
import cosito from './icon.svg'

const Icono = L.icon({
    iconUrl: cosito,
    iconSize: [60, 50],
    iconAnchor: [50, 50],
    popupAnchor: [-3, -76]

})

export default Icono