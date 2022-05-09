import React from 'react'
import styles from './About.module.css'
import Button from '../../components/Button'
import { AiFillCalendar, AiFillCreditCard, AiFillRead, AiFillGift } from "react-icons/ai";

export default function About() {
  return (
    <div className={styles.container} id='about'>
      <div className={styles.box1}>
        <section>
          <h1 className={styles.header}>ABOUT</h1>
          <p className={styles.pd}>We are a gym with more than 30 years in the field, we have more than 1000 branches throughout the country.</p>
          <Button
            name={'More information'} />
        </section>
      </div>

      <div className={styles.box2}></div>
      <div className={styles.box3}>
        <AiFillCalendar size={25} color={'white'}/>
        <h3>lorem</h3>
        <p className={styles.text}>Lorem consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>
      <div className={styles.box4}>
        <AiFillGift size={25} color={'white'} />
        <h3>lorem</h3>
        <p className={styles.text}>Lorem  consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>
      <div className={styles.box5}>
        <AiFillCreditCard size={25} color={'white'}/>
        <h3>lorem</h3>
        <p className={styles.text}>Lorem consectetur adipiscing elit, sed do eiusmod tempor.</p>
      </div>
      <div className={styles.box6}>
        <AiFillRead size={25} color={'white'}/>
        <h3>lorem</h3>
        <p className={styles.text}>Lorem adipiscing elit, sed do eiusmod tempor.</p>

      </div>
    </div>
  )
}
