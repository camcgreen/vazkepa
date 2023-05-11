import React from 'react'
import styles from '../../../../styles/LearnMore.module.scss';
import Footer from '../../../../components/footer';
import Router from 'next/router';
import ArrowButtons from '../../../../components/ArrowButtons';

export default function index() {
    return (
        <div>

            <ArrowButtons right urlRight={'/learn-more/patients/David/Medical-Info'} />

            <div className={`${styles.content} content`} >
                <h1>

                    MEET <span className='blue'>DAVID*</span>


                </h1>

                <div className={`${styles.gap1Content} ${styles.gap1ContentMOD}`}>


                    <div className={`${styles.profiles} ${styles.singleCard}`}>
                        <div>
                            <img src='/images/learn-more/David/David.png' alt='' />

                        </div>
                        <div>


                            <span style={{ paddingTop: '80px', fontSize: '2rem' }}>
                                David is a 63 year old<br />retired landscape gardener<br />who lives at home with his <br />wife, Marianna.
                                {/*                             </span><span style={{ paddingTop: '0px', fontWeight: 'inherit' }}>
                                He enjoys growing fruit and vegetables in his allotment, going on long hikes and spending time with his three grandchildren. At weekends he plays the ukulele in a band.
                                <br /><br />Since having a MI six months ago, he worries about the risk of another, and the possibility of missing out on a future with those he loves.
                             */}
                            </span>
                        </div>

                    </div>

                </div>

                <Footer imgSrc='reference-2.0.png' />
            </div>


        </div>
    )
}
