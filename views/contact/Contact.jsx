import React, { useRef, useState, useEffect } from 'react'
import styles from './Contact.module.css'
import Button from '../../components/Button';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';

export default function Contact() {


  //const mark =new Marker().setLnLat(-70.1300736,-15.4894336).addTo(Map)

  return (
    <div className={styles.container} id="contact">

      <div className={styles.map2}>
        <Map
          initialViewState={{
            longitude: -70.2441147981315,
            latitude: -18.00753050829576,
            zoom: 14
          }}
          mapboxAccessToken='pk.eyJ1IjoiaW5zZXJ0NTAwMCIsImEiOiJjbDJ1czczMTYwNTF3M2JwZWtzcW4zeG52In0.ijPWds4_uOhS-zPaDuzWcg'
          mapStyle="mapbox://styles/insert5000/cl2v649ai001s15nw2ir2kav6"


        >
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />
          <Marker
            longitude={-70.2441147981315}
            latitude={-18.00753050829576}
          >
          </Marker>

        </Map>
      </div>
      <div className={styles.form}>
        <p><strong>Have a questions?</strong>Leave a request or call</p>
        <input type="text" placeholder='email'/>
        <textarea placeholder='Message'></textarea>
          <Button
          name={'SEND'}
          /> 
      </div>
    </div>
  )

}

