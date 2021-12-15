import * as React from 'react'
import { useState } from 'react'
import ReactMapGL from 'react-map-gl'

function MapBox() {
  const [viewport, setViewport] = useState({
    latitude: 39.909622,
    longitude: 116.43129,
    zoom: 8,
    bearing: 0,
    pitch: 0,
  })

  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
      mapboxApiAccessToken="pk.eyJ1IjoiYWthend6IiwiYSI6ImNreDdvbGpodjM0NTYydXFvZ2JzMnQycDUifQ.OX_1hbGyke9K5ZZobjXRHQ"
    />
  )
}

export default MapBox
