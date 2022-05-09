import React from 'react'
import styles from './Footer.module.css'
import facebook from '../../assets/facebbok.png'
import discord from '../../assets/discord.png'
import twitter from '../../assets/tw.png'
import youtube from '../../assets/yt.png'

export default function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.number}>895-585-56</div>
        <div className={styles.email}>info@gmail.com</div>
        <div className={styles.server}>
            <a href="https://www.facebook.com"> <img src={facebook} alt="facebook" className={styles.icons}/></a>
            <a href="https://discord.com"> <img src={discord} alt="discord" className={styles.icons}/></a>
            <a href="https://twitter.com"><img src={twitter}alt="twitter" className={styles.icons}/></a>
            <a href="https://www.youtube.com"> <img src={youtube} alt="youtube" className={styles.icons}/></a>
        </div>
    </div> 
  )
}
