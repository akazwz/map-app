import { MapContainer,TileLayer } from 'react-leaflet'

export default function HomePage() {
  return (
    <div
      style={{
        display: 'flex',
        alignContent: 'center'
      }}
    >
      <div
        style={{
          textAlign: 'center',
          width: '100%',
        }}
      >
      </div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}
