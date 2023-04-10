import React from 'react'
import styles from '../styles/testimonial.module.css';
import doctor from '../assets/doctor-art.png';
import customer from '../assets/customer-art.png';
import happy from '../assets/happy-art.png';

export default function Testimonial() {
  return (
     <div className={styles.testimonialcontainer}>
          <div className={styles.testimonialcardcontainer}>
              
              <div className={styles.testimonialitems}>
                  <img src={doctor} className='border-dotted' alt='' />
              </div>
              <div className={styles.testimonialitems}>
                  <h1 className='font-semibold text-transparent text-center text-7xl bg-clip-text bg-gradient-to-r from-red-600 to-blue-600'>94+</h1>
                  <h3 className='text-1xl text-slate-900 text-center'>Certified Doctors</h3>
                  <p className='text-sm text-slate-400 text-center'> skilled and caring </p>
              </div>
              
              <div  className={styles.testimonialitems}>
                  <img src={customer} alt='' />
              </div>
              <div  className={styles.testimonialitems}>
              <h1 className='font-semibold   text-transparent text-center text-7xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>97.5%</h1>
                  <h3 className='text-1xl text-slate-900 text-center'>Postive Feedback</h3>
                  <p className='text-sm text-slate-400 text-center'> From our patients</p>
              </div>

              <div  className={styles.testimonialitems}>
                  <img src={happy} alt='' />
              </div>

              <div  className={styles.testimonialitems}>
              <h1 className='font-semibold text-transparent text-center text-7xl bg-clip-text bg-gradient-to-r from-yellow-600 to-blue-600'>2800+</h1>
                  <h3 className='text-1xl text-slate-900 text-center'>Online Consultations</h3>
                  <p className='text-sm text-slate-400 text-center'> Delivered across the world </p>
              </div>
          </div>
    </div>
  )
}
