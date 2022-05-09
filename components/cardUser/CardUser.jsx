import React from 'react'
import styles from './CardUser.module.css'

export default function CardUser({image, title}) {
  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
      <img className={styles.img} src={image} alt="img" />
        <div className={styles.button}> {">"} </div>
      </div>
       
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.text}>Lorem lorem lorem lorem lorem lorem</p>
    </div>
  )
}
