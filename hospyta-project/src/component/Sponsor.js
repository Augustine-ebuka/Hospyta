import React from 'react'
import styles from '../styles/sponsor.module.css'
import sponsor1 from  '../assets/sponsor1.png'
import sponsor2 from  '../assets/sponsor2.png'
import sponsor3 from  '../assets/sponsor3.png'
import sponsor4 from  '../assets/sponsor4.png'

export default function Sponsor() {
  return (
      <div className={styles.sponsorcontainer}>
          <div className={styles.sponsorcard}>
              <img src={sponsor1} className={styles.sponsoricon} alt='sponsor' />
              <img src={sponsor2} className={styles.sponsoricon} alt='sponsor' />
              <img src={sponsor3} className={styles.sponsoricon} alt='sponsor' />
              <img src={sponsor4} className={styles.sponsoricon} alt='sponsor' />
          </div>
    </div>
  )
}
