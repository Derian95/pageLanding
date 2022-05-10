import React, { useState } from 'react'
import styles from './Nav.module.css'
import { Link } from 'react-scroll'
import icono from '../../assets/ham.png'
export default function Nav() {
  const [menu, setMenu] = useState(false);
  //console.log(menu)
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
console.log(`${styles.list + styles.active}`)
  return (
    <nav className={styles.container}>

      <ul 
      className={click ? styles.active : styles.list}
      >
        <li> <Link onClick={handleClick} className={styles.link} to="home" spy={true} smooth={true} offset={-50} duration={500} >Home</Link> </li>
        <li><Link onClick={handleClick} className={styles.link} to="about" spy={true} smooth={true} offset={-50} duration={500}>About</Link></li>
        <li><Link onClick={handleClick} className={styles.link} to="format" spy={true} smooth={true} offset={-50} duration={500}>Format</Link></li>
        <li><Link onClick={handleClick} className={styles.link} to="club" spy={true} smooth={true} offset={-50} duration={500}>Clubs</Link></li>
        <li><Link onClick={handleClick} className={styles.link} to="client" spy={true} smooth={true} offset={-50} duration={500}>Clients</Link></li>
        <li><Link onClick={handleClick} className={styles.link} to="contact" spy={true} smooth={true} offset={-50} duration={500}>Contac</Link></li>
      </ul>
      <div className={styles.navIcon} onClick={handleClick}>

        <img className="nav-icon"  src={icono} alt="ss" />
      </div>


    </nav>
  )
}
