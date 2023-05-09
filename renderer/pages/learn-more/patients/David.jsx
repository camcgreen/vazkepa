import React from 'react'
import styles from '../../../styles/LearnMore.module.scss';
import Footer from '../../../components/footer';
import Router from 'next/router';

export default function David() {
    return (
        <div>
            <div className={`${styles.content} content`} >
                <h1>
                    WHICH PATIENT WOULD YOU LIKE TO<br />
                    <span className='blue'> LEARN MORE </span>
                    ABOUT?

                </h1>

                <div className={styles.gap1Content}>


                    <div className={`${styles.profiles} ${styles.singleCard}`}>
                        <div>
                            <img src='/images/learn-more/David.png' alt='' />

                        </div>
                        <div>


                            <span style={{ paddingTop: '80px' }}>
                                David is a 63 year old retired landscape gardener who lives at home with his wife, Marianna.
                                He enjoys growing fruit and vegetables in his allotment, going on long hikes and spending time with his three grandchildren. At weekends he plays the ukulele in a band.
                                Since having a MI six months ago, he worries about the risk of another, and the possibility of missing out on a future with those he loves.
                            </span>
                        </div>

                    </div>

                </div>

                <Footer imgSrc='reference-2.0.png' />
            </div>


        </div>
    )
}
