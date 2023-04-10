import React from 'react'
import styles from '../styles/waitlist.module.css'
import hand from '../assets/hand.png'
import Button from './Button';
import { Link } from 'react-router-dom';

export default function Waitlist() {
  return (
    <>
    <div className={styles.container}>
          <div className={styles.left}>
              {/* <div className={styles.gradientBall}></div> */}
              <div className={styles.body}>
                  <div className={styles.header}>
                  Get professional medical help in the palm of your hands
                  </div>
                  <div className={styles.content}>
                  Join our waitlist to receive instant access to our app once available    
                  </div>
                <div className={styles.btncover}>
                    <Link to='#'>
                      <Button>Join our waitlist </Button>
                    </Link>
                  </div>
              </div>
          </div>
          <div className={styles.right}>
              <div className='' style={{}}>
                      <img src={ hand} className={styles.image} alt='woman'></img>
              </div>
          </div>
          </div>
          </>
  )
}
