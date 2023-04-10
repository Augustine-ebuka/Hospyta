import React from 'react';
import styles from '../styles/youtube.module.css';
import youtube from '../assets/youtube.png'
import { Link } from 'react-router-dom';

export default function Youtube() {
  return (
      <>
          <div className={styles.youtubecontainer}>
              <div className={styles.youtubecard}>
                  <Link>
                    <img src={youtube} className={styles.image} alt='youtube card' /> 
                  </Link>
              </div>
        </div>
      </>
  )
}
