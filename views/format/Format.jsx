import React from 'react'
import styles from './Format.module.css'
import Card from '../../components/card/Card'

export default function Format() {
  return (
    <div className={styles.container} id="format">
        <div className={styles.grid}>
        <Card/>
        <Card/>
        <Card/>
        </div>
        
    </div>
  )
}
