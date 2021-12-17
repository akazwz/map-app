import React, { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

const Leaflet = () => {
  const [center] = useState({lat: 50, lng: 40});
  return (
    <MapContainer center={center} zoom={12} style={{height: '70vh'}}>
      <TileLayer
        noWrap={true}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}
export default Leaflet
