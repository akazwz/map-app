import React, { useRef, useState } from 'react'
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
import { ContextMenu } from '@uiw/react-amap-context-menu';

const MyMap = () => {
  const mapRef = useRef(null)
  const [clickLngLat, setClickLnglat] = useState<AMap.LngLat>(new AMap.LngLat(0, 0))
  const [markers, setMarkers] = useState<AMap.LngLat[]>([new AMap.LngLat(116.405285, 39.904989)])

  const handleMapOnClick = (evt: AMap.MapsEvent) => {
    const { lnglat } = evt
    const ll = new AMap.LngLat(lnglat.getLng!(), lnglat.getLat!())
    setClickLnglat(ll)
    setMarkers([...markers, ll])
  }

  const handleMapOnRightClick = (evt: AMap.MapsEvent) => {
    const { lnglat } = evt
    const ll = new AMap.LngLat(lnglat.getLng!(), lnglat.getLat!())
    setClickLnglat(ll)
  }

  const Markers = () => {
    return markers.map((marker, index) => {
      return <Marker
        key={index}
        visiable={true}
        position={marker}
        onRightClick={() => {
          alert('right click')
        }}
      />
    })
  }


  return (
    <>
      <div style={{ width: '100%', height: '70vh' }}>
        <Map
          ref={mapRef}
          onClick={handleMapOnClick}
          onRightClick={handleMapOnRightClick}
        >
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
          {/*// @ts-ignore*/}
          <ContextMenu>
            {/*// @ts-ignore*/}
            <ContextMenu.Item text="添加标记" onClick={()=>{
              setMarkers([...markers, clickLngLat])
            }}/>
          </ContextMenu>
        </Map>
      </div>
      <div style={{ width: '100%', height: '25vh' }}>
        {clickLngLat.getLng!()}, {clickLngLat.getLat!()}
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
