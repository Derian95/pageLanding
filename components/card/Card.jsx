  import React from 'react'
import styles from './Card.module.css'
import { AiFillCalendar} from "react-icons/ai";
import img from '../../assets/gym3.jpg'

export default function Card() {
  return (
    <div className={styles.container}>
        <img src={img} alt="gym" />
        <div className={styles.top}>
            <h2>Lorem Ipsum</h2>
            <h5>Lorem ipsum lorem ipsum </h5>
            <p>Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
        <div className={styles.bot}>
            <p>455 455 488</p>
            <AiFillCalendar color='#F26E50'/>
        </div>
    </div>
  )
}
