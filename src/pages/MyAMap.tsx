import {
  APILoader,
  Map,
  ScaleControl,
  ToolBarControl,
  ControlBarControl,
  Geolocation,
  MapTypeControl,
  Marker,
  Weather,
} from '@uiw/react-amap'

const MyMap = () => {
  return (
    <div style={{ width: '100%', height: '70vh' }}>
      <Map>
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
          onComplete={(data)=>{
            console.log(data)
          }}
        />
        <MapTypeControl
          visiable={true}
        />
        <Marker visiable={true} title="北京市" position={new AMap.LngLat(116.405285, 39.904989)} />
      </Map>
    </div>
  )
}

const MyWeather = () => {
  return (
    <>
      <Weather city="临沂市" onComplete={(data) => {
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
