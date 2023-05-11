import React from 'react'
import styles from '../../../../styles/LearnMore.module.scss';
import Footer from '../../../../components/footer';
import Router from 'next/router';
import ArrowButtons from '../../../../components/ArrowButtons';


export default function index() {
    return (
        <div>
            <ArrowButtons right urlRight={'/learn-more/patients/John/Medical-Info'} />

            <div className={`${styles.content} content`} >
                <h1>

                    MEET <span className='blue'>JOHN*</span>


                </h1>

                <div className={`${styles.gap1Content} ${styles.gap1ContentMOD}`}>


                    <div className={`${styles.profiles} ${styles.singleCard}`}>
                        <div>
                            <img src='/images/learn-more/John/John.png' alt='' />

                        </div>
                        <div>


                            <span style={{ paddingTop: '80px' }}>
                                John is 72 years old and used to work in a bank, he lives alone in the city.
                            </span><span style={{ paddingTop: '0px', fontWeight: 'inherit' }}>
                                Before his revascularisation procedure for a MI two months ago, John regularly travelled. He discovered a flare for baking since retiring and occasionally cycles.
                                <br /><br />
                                John worries about the impact that his lifestyle has on his health, whilst comorbidities put him at high cardiovascular risk. He’s working with his healthcare professional to implement ways he can reduce his risk.
                            </span>
                        </div>

                    </div>

                </div>

                <Footer imgSrc='reference-2.0.png' />
            </div>


        </div >
    )
}
