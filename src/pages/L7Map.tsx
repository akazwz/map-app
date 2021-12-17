import React from 'react'
import { AMapScene, Control, Marker } from '@antv/l7-react'

export default function L7Map() {
  return (
    <>
      <AMapScene
        map={{
          center: [116.40973, 39.918919],
          pitch: 0,
          style: 'dark',
          zoom: 1,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Marker lnglat={[116.40973, 39.918919]} />
        <Control type="zoom" />
        <Control type="scale" />
        <Control type="logo" />
      </AMapScene>
    </>
  )
};
