import React from 'react';
import styles from '../styles/nav.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import Button from './Button';

export default function Nav() {

    const [windowWidth, setWindowWidth] = useState(true);

    useEffect(() => {
        const handleResize = (e) => { 
            if (window.innerWidth <= 750) {
                setWindowWidth(false)  
            } else {
                setWindowWidth(true)
            }
        }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);


    // You may want to use an effect to update the state when the window is resized
    // useEffect(() => {
    //     window.addEventListener("resize", displayBtnDesktop);
    //     return () => window.removeEventListener("resize", displayBtnDesktop);
    // }, []);

    return (
        <div className="h-20 bg-grey-500 shadow-2xl z-30  w-full flex flex-row justify-between items-center">
            <div className="image ml-6">
                <img src={logo} className={styles.logo} alt="logo"></img>
            </div>
            <Link to="/g">
                <div
                    className={
                        windowWidth ? styles.activeBtn : styles.nonActiveBtn
                    }
                >
                    <div className='mr-10'>
                        <Button>Join our waitlist</Button>
                    </div>
                </div>
            </Link>
        </div>
    );
}
