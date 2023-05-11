import React from 'react'
import styles from '../../../../styles/LearnMore.module.scss';
import Footer from '../../../../components/footer';
import Router from 'next/router';
import ArrowButtons from '../../../../components/ArrowButtons';
import ButtonCard from '../../../../components/buttonCard';



export default function VazkepaReduced() {
    return (
        <div>
            <ArrowButtons left />
            <div className={`${styles.content} content`} >
                <h1>

                    VAZKEPA REDUCED <span className='blue'>DAVID*</span>


                </h1>

                <div className={`${styles.gap1Content} ${styles.gap1ContentMOD}`} style={{
                    top: '-10vh', flexDirection: 'column', left: '-8vw'
                    , width: '61vw'
                }}>


                    <div className={`${styles.profiles} ${styles.singleCard} ${styles.topCardContainer}`} style={{ alignItems: 'flex-start', height: '80vh' }}>
                        <div className={styles.topCard}>


                            <div>
                                <span>
                                    Suffered aMI one year ago
                                </span>
                                <img src='/images/Warning.png' />
                            </div>
                            <div>
                                <span>
                                    Treated with statins
                                </span>
                                <img src='/images/Pill.png' />
                            </div>
                            <div>
                                <span>
                                    Increased TGs values (1.9 mmol/L)
                                </span>
                                <img src='/images/DownArrow.png' />
                            </div>
                        </div>
                        <div className={styles.text}>


                            <span style={{ paddingTop: '80px', fontWeight: 'inherit' }}>
                                Since her MI just over a year ago, Karin has been on standard medical therapy, including statins.
                            </span>
                            <span style={{ paddingTop: '0px', fontWeight: 'inherit' }}>
                                For patients like Karin with prior MI, even with current guideline-recommended therapies, risk for CV events remains in patients.<sup style={{ fontSize: '15px' }}>1</sup>
                            </span>

                            <span style={{ paddingTop: '0px' }}>
                                Patients like Karin may need more help to reduce the risk of CV in the future
                            </span>
                        </div>

                    </div>

                    <div className={styles.infoCards}>

                        <ButtonCard
                            buttonRefId={1}
                            frontText='ABOUT'
                            backText={(
                                <div styles={{ color: 'black !important', zIndex: '3' }}>
                                    60 years old<br /><br />
                                    History of high blood pressure but well controlled<br /><br />
                                    BMI around 28.5<br /><br />
                                    Six months ago David suffered a myocardial infarction
                                </div>)}
                        />
                        <ButtonCard
                            buttonRefId={2}
                            frontText={(<span>CURRENT<br /> MEDICATION</span>)}
                            backText={(
                                <div>
                                    Irbesartan 150 mg<br /><br />
                                    Metoprolol 100 mg<br /><br />
                                    Spironolactone 50 mg<br /><br />
                                    Acetylsalicylic acid 75 mg<br /><br />
                                    Atorvastatin 40 mg
                                </div>)}
                        />

                        <ButtonCard
                            buttonRefId={3}
                            frontText='CURRENT STATUS'
                            backText={(
                                <div styles={{ color: 'black !important', zIndex: '3' }}>
                                    Blood pressure =130/85 mmHg<br /><br />
                                    LDL-C = 1.45 mmol/L<br /><br />
                                    HDL-C = 1.15 mmol/L<br /><br />
                                    TGs = 2.0 mmol/L
                                </div>)}

                        />


                    </div>
                </div>


                <Footer imgSrc='reference-2.0.png' />
            </div>


        </div>
    )
}
