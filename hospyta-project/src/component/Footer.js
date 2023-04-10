import React from 'react'
import styles from '../styles/footer.module.css';
import Button from './Button';
import twitter from '../assets/twitter.png'; 
import fb from '../assets/fb.png'; 
import insta from '../assets/insta.png'; 
import linkedin from '../assets/linkedin.png'; 
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
      <div className={styles.footercontainer}>
          <div className={styles.footerwrapper}>
              <div className={styles.topfooter}>
                  <h2 className={styles.footerheader}>ALL your health care services in one place</h2>
                  <div className=' p-5'>
                      <Button>Join our wailist</Button>
                  </div>
              </div>
                <hr className='w-9/12 m-auto '></hr>
              <div className={styles.buttomfooter}>
                  <div className={styles.footercontent}>
                      <p className=' p-5 text-sm text-gray-500'>HOSPYTA healthcare aims to connect all the participants
                        in the healthcare industry, in a way that promotes greater ease and 
                        convenience, while leveraging the digital and innovative changes
                          of the healthcare industry.</p>
                      <div className='p-5 flex gap-3'>
                         <Link to='/'> <img src={twitter} alt='' /> </Link>
                         <Link to=''> <img src={fb} alt='' /> </Link>
                         <Link to=''> <img src={insta} alt='' /> </Link>
                         <Link to=''> <img src={linkedin} alt='' /> </Link>
                      </div>
                  </div>
                  <div className={styles.links}>
                      <div>
                          <p className='font-bold mb-4'>Company</p>
                          <ul>
                              <li>Terms & Condition</li>
                              <li>Privacy & Policy</li>
                          </ul>
                      </div>
                      <div>
                          <p className='font-bold mb-4'>Services</p>
                          <ul>
                              <li>Telemedicine</li>
                              <li>Ecommerce</li>
                              <li>Logistics</li>
                              <li>Community</li>
                          </ul>
                      </div>
                      <div>
                          <p className='font-bold mb-4'>Contact</p>
                          <ul>
                              <li>info@hospyta.com</li>
                              <li>+2347032420219</li>
                          </ul>
                      </div>
                     
                  </div>
              </div>
              <div className='bg-black h-20'>
                  <p className='text-center text-sm pt-7 text-gray-200'>© 2023 Hospyta. All rights reserved 
</p>
            </div>
          </div>
    </div>
  )
}
