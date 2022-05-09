import React from 'react'
import styles from './Club.module.css'
import { Zoom, Fade } from 'react-slideshow-image';
import image1 from '../../assets/gym2.jpg';
import image2 from '../../assets/gym3.jpg';
import image3 from '../../assets/gym4.jpg';
import image4 from '../../assets/gym6.jpg';
import "react-slideshow-image/dist/styles.css";
const images = [image1, image2, image3, image4];

const zoomOutProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}; 
const Slideshow = () => {
    return (
      <div className={styles.container} id="club">
        <Fade {...zoomOutProperties}>
          {images.map((each, index) => (
            <img key={index} style={{ width: "100%", height:'700px' }} src={each} />
          ))}
        </Fade>
      </div>
    );
  };

export default function Club() {
  return (
      <div className={styles.containerCenter}>
        <Slideshow />

      </div>
  )
}
