import React from 'react';
import styles from '../styles/about.module.css';
import logowhite from '../assets/logowhite.png';



export default function About() {
  return (
      <>
          <div className={styles.aboutcontainer}>
                  <div className={styles.aboutcard}>          
                  <img src={logowhite} className={styles.aboutlogo}  alt='logo'/>
                  <p className={styles.aboutcontent}>
                    HOSPYTA healthcare aims to connect all the participants
                    in the healthcare industry, in a way that promotes greater ease and 
                     convenience, while leveraging the digital and innovative changes
                     of the healthcare industry.
                  </p>
              </div>
        </div>
      </>
  )
}
