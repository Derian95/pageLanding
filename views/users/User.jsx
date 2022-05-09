import React from 'react'
import styles from './User.module.css'
import CardUser from '../../components/cardUser/CardUser'

export default function User() {
  return (
    <div className={styles.container} id="client">
        <section>
        <CardUser image={'../../assets/user1.jpg'} title={"nais"}/>
        <CardUser image={'../../assets/user2.jpg'} title={"nais"}/>
        <CardUser image={'../../assets/user3.jpg'} title={"nais"}/>
        </section>
        

    </div>
  )
}
