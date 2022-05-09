import React from 'react'
import styles from './Home.module.css'
import Button from '../../components/Button'
import img from '../../assets/gym.png'

export default function Home() {
    return (
        <div className={styles.container} id="home">
            <div className={styles.info}>
                <div className={styles.box1}>
                    <h1>RATATUILLE FITNNES CLUB</h1>
                    <p>Take your body to its full capacity and show you that you are the best.</p>
                    <Button
                        name={'Learn More'}
                    />
                </div>

            </div>
            <div className={styles.gymImg}>
                <img src={img} alt="gym" />
            </div >
            <div className={styles.info}>
            <div className={styles.box2}>
                <h3>CONFORTABLE SOLUTION</h3>
                <p>Because not being the best?. Show others that you can do it</p>
                </div>
            </div>
        </div>
    )
}
