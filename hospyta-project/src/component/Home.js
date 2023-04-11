import React from 'react';
import styles from'../styles/home.module.css';
import woman from '../assets/woman.png'
import Button from './Button';
import { Link } from 'react-router-dom';
import Youtube from './Youtube';
import Testimonial from './Testimonial';
import About from './About';
import ChooseUs from './ChooseUs';
import Sponsor from './Sponsor';
import Waitlist from './Waitlist';
import Partners from './Partners';
import Footer from './Footer';
import { FaArrowRight} from 'react-icons/fa';
import '../styles/home.module.css';
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <>
          <div className={styles.container}>
                <div className={styles.left}>
                  {/* <div className={styles.gradientBall}></div> */}
                    <div className={styles.body}>
                      <div className={styles.joinbtn}>
              <p className='inline'> join our Waitlist
              
              </p>
              <FaArrowRight className='float-right h-6 w-6 clear-left mr-2' />
                      </div>
                        <div className={styles.header}>
                            Accelerating healthcare Accessibility with <span className={styles.colorblue}> state 
                              of the art technologies </span> 
                        </div>
                        <div className={styles.content}>
                           HOSPYTA brings everything healthcare right to your doorstep. 
                               (Doctors. Medicines. Devices. Equipment. Services.)
                            
                        </div>
                      <div className={styles.btncover}>
                          <Link to='#'>
                            <Button> Download </Button>
                          </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className='' style={{}}>
                        <img src={woman} className={styles.image} alt='woman'></img>
                    </div>
                </div>
          </div>
          {/* youtubr section */}
          <Youtube></Youtube>

          {/* Testimonial section */}
          <Testimonial></Testimonial>

          {/* About section */}
          <About></About>

          {/* why choose section */}
          <ChooseUs></ChooseUs>

          {/* sponsors section */}
          <Sponsor></Sponsor>

          {/* wailist campeign section */}
          <Waitlist></Waitlist>

          {/* partners section */}
          <Partners></Partners>

     
          {/* footer section */}
      <Footer></Footer>

      {/*  scroll to the bottom*/}
      <ScrollToTop smooth='true'  style={{padding:4}} height='30' width='30' viewBox='0 0 256 256'/>
      </>
  )
}

