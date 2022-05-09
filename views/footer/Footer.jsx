import React from 'react'
import styles from './Footer.module.css'
export default function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.number}>895-585-56</div>
        <div className={styles.email}>info@gmail.com</div>
        <div className={styles.server}>
            <a href="https://www.facebook.com"> <img src="../../assets/icons/facebbok.png" alt="facebook" className={styles.icons}/></a>
            <a href="https://discord.com"> <img src="../../assets/icons/discord.png" alt="discord" className={styles.icons}/></a>
            <a href="https://twitter.com"><img src="../../assets/icons/tw.png" alt="twitter" className={styles.icons}/></a>
            <a href="https://www.youtube.com"> <img src="../../assets/icons/yt.png" alt="youtube" className={styles.icons}/></a>
        </div>
    </div> 
  )
}
