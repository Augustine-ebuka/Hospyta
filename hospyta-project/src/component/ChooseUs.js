import React from 'react'
import styles from '../styles/chooseUs.module.css'
import choosusedata from './chooseUsdata.json';

export default function ChooseUs() {

    const chooseInfo = choosusedata.info;
  return (
      <div className={styles.choosuswrapper}>
        <h4 className='text-center text-2xl font-bold pt-16 pb-16'>WHY CHOOSE US</h4>
      <div className={styles.chooseus}>
              {chooseInfo.map((data, index) => {
                  return (
                        <div className={styles.choosecard} key={index}>
                          <div className=''>
                              {console.log(data.icon)}
                                <img src={data.icon} alt='chooseus'></img>
                            </div>
                            <div className=''>
                              <h4 className='text-center text-2xl mb-4 font-semibold'>{data.header}</h4>
                              <p className='text-center text-sm mb-2 text-gray-400 leading-5'>{ data.content}</p>
                            </div>
                        </div>
                      )
                  })}
              
          </div>  
    </div>
  )
}
