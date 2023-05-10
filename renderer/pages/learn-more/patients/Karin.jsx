import React from 'react'
import styles from '../../../styles/LearnMore.module.scss';
import Footer from '../../../components/footer';
import Router from 'next/router';



export default function Karin() {
    return (
        <div>
            <div className={`${styles.content} content`} >
                <h1>

                    MEET <span className='blue'>KARIN*</span>


                </h1>

                <div className={`${styles.gap1Content} ${styles.gap1ContentMOD}`}>


                    <div className={`${styles.profiles} ${styles.singleCard}`}>
                        <div style={{ position: 'relative', top: '2vh' }}>

                            <img src='/images/learn-more/Karin.png' alt='' />

                        </div>
                        <div>


                            <span style={{ width: '21vw', paddingTop: '80px' }}>
                                Karin is 67 years old and recently retired, who lives at home with her <br />5-year-old dachshund, Charlie.
                            </span><span style={{ width: '24vw', paddingTop: '0px', fontWeight: 'inherit' }}>
                                She enjoys socialising with friends and going for walks with Charlie. She’s equally happy to curl up with a good book at the weekend.
                                <br /><br />
                                She has a history of high blood pressure, but it’s well controlled. Since Karin suffering a myocardial infarction just over a year ago, she worries about the risk of another, and what would happen to Charlie if she wasn’t around.

                            </span>
                        </div>

                    </div>

                </div>

                <Footer imgSrc='reference-2.0.png' />
            </div>


        </div>
    )
}


/* 



Karin is 67 years old and recently retired, who lives at home with her 5-year-old dachshund, Charlie.





*/