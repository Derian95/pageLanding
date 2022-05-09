import React from 'react'
import styles from './User.module.css'
import CardUser from '../../components/cardUser/CardUser'
import userOne from '../../assets/user1.jpg'
import userTwo from '../../assets/user2.jpg'
import userThree from '../../assets/user3.jpg'

export default function User() {
  return (
    <div className={styles.container} id="client">
        <section>
        <CardUser image={userOne} title={"nais"}/>
        <CardUser image={userTwo} title={"nais"}/>
        <CardUser image={userThree} title={"nais"}/>
        </section>
        
 
    </div>
  )
}
