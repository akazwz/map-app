import React, { useState } from 'react'
import {
  APILoader,
  ControlBarControl,
  Geolocation,
  Map,
  MapTypeControl,
  Marker,
  ScaleControl,
  ToolBarControl,
  Weather,
} from '@uiw/react-amap'

const MyMap = () => {
  const [lnglat, setLnglat] = useState<[number, number]>([0, 0])
  const [markers, setMarkers] = useState<[[number, number]]>([[116.405285, 39.904989]])

  const handleMapOnClick = (evt: AMap.MapsEvent) => {
    const { lnglat } = evt
    setLnglat([lnglat.getLng!(), lnglat.getLat!()])
  }

  const Markers = () => {
    return markers.map((marker) => {
      alert(marker[0])
      return <Marker visiable={true} title="Beijing" position={new AMap.LngLat(marker[0], marker[1])} />
    })
  }

  return (
    <>
      <div style={{ width: '100%', height: '70vh' }}>
        <Map onClick={handleMapOnClick}>
          <ScaleControl offset={[16, 30]} position="LB" />
          <ToolBarControl offset={[16, 10]} position="RB" />
          <ControlBarControl offset={[16, 180]} position="RB" />
          <Geolocation
            type="position"
            enableHighAccuracy={true}
            maximumAge={100000}
            borderRadius="5px"
            position="RB"
            offset={[16, 80]}
            zoomToAccuracy={true}
            showCircle={true}
            getCityWhenFail={true}
            onComplete={(data) => {
              console.log(data)
            }}
          />
          <MapTypeControl
            visiable={true}
          />
          {Markers()}
        </Map>
      </div>
      <div style={{ width: '100%', height: '29vh' }}>
        {lnglat[0]}, {lnglat[1]}
      </div>
    </>
  )
}

const MyWeather = () => {
  return (
    <>
      <Weather city="重庆市" onComplete={(data) => {
        console.log(data)
      }} />
    </>
  )
}

export default function MyAMap() {
  return (
    <>
      <APILoader akay="f691abde6f9d0760ac8e805ccb6b53f2">
        <MyMap />
      </APILoader>
      <APILoader akay="a7a90e05a37d3f6bf76d4a9032fc9129">
        <MyWeather />
      </APILoader>
    </>
  )
}
