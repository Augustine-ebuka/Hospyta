import React from 'react'
import styles from '../styles/partners.module.css';
import partners from '../assets/partners.png';

export default function Partners() {
  return (
    <div className={styles.partnerscontainer}>
      <div className={styles.partnerscardcontainer}>
        <img src={partners} className={styles.partnersimage} alt='partners'/>
      </div>
</div>
  )
}
