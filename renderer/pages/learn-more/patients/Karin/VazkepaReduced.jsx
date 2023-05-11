import React from 'react'
import styles from '../../../../styles/LearnMore.module.scss';
import Footer from '../../../../components/footer';
import ArrowButtons from '../../../../components/ArrowButtons';
import ButtonCard from '../../../../components/buttonCard';
import { useRouter } from 'next/router';
import Sidebar from '../../../../components/sidebar'

export default function VazkepaReduced() {

    const router = useRouter();
    const [showPopup, setShowPopup] = React.useState(false)
    const [popupIndex, setPopupIndex] = React.useState(0);



    return (
        <div>

            <Sidebar
                navItems={[
                    {
                        title: 'STUDY DESIGN',
                        link: '/reduce-cv-risk',
                    },
                    {
                        title: 'PRIMARY ENDPOINT',
                        link: '/reduce-cv-risk/primary-endpoint',
                    },
                    {
                        title: 'PRIMARY & KEY\n SECONDARY ENDPOINTS',
                        link: '/a-new-paradigm/primary-secondary-endpoints',
                    },
                    {
                        title: 'SECONDARY ENDPOINTS',
                        link: '/a-new-paradigm/secondary-endpoints',
                    },
                    {
                        title: 'SAFETY',
                        link: '/a-new-paradigm/safety',
                    },
                ]}
            />


            <div className={`${styles.content} content`} >
                <h1>

                    <span className='blue'>VAZKEPA</span> REDUCED THE RISK OF MAJOR CV EVENTS IN PATIENTS WITH <span style={{ fontWeight: '500' }}>PRIOR CABG<sup style={{ fontSize: '15px', position: 'relative', top: '-10px' }}>1</sup></span>

                </h1>
                <h2 style={{ fontWeight: 500 }}>Post hoc analysis of REDUCE-IT in patients with prior CABG<sup style={{ fontSize: '15px', position: 'relative', top: '-5px' }}>1</sup></h2>



                <div className={`${styles.mainComponentVazkRedu}`} >
                    <div className={styles.graph}>
                        <h2>Primary endpoint<sup style={{ fontSize: '15px', position: 'relative', top: '-1px' }}>1*,†</sup></h2>
                        <p>5-point MACE: a composite of CV death, nonfatal MI, nonfatal stroke, coronary revascularisation, or unstable angina requiring hospitalisation
                        </p>
                        <img src="\images\learn-more\Karin\Karin_Reduced_Graphic.svg" alt="" />
                        <span>
                            <table>
                                <tbody>
                                    <th>
                                        <tr><th style={{ fontWeight: '550' }}>No. at Risk:</th><th>{ }</th><th>{ }</th><th>{ }</th><th>{ }</th><th>{ }</th><th>{ }</th></tr>
                                        <tr><th>Placebo</th><th>940</th><th>900</th><th>724</th><th>624</th><th>624</th><th>363</th></tr>
                                        <tr><th>VAZKEPA</th><th>897</th><th>865</th><th>820</th><th>687</th><th>697</th><th>342</th></tr>
                                    </th>
                                </tbody>
                            </table>
                        </span>

                    </div>
                    <div className={styles.arrow}>
                        <img src="\images\learn-more\Karin\Karin_Reduced_Arrow.jpg" alt="" />
                    </div>
                </div>
                <div className={styles.bottomReducedRisk}>
                    <button
                        onClick={() => {
                            setShowPopup(true);
                            setPopupIndex(0);
                        }}
                    >
                        Total events
                        <img src="\images\Pop_up_button.png" alt="" />
                    </button>
                    <button onClick={() => {
                        setShowPopup(true);
                        setPopupIndex(1);
                    }}>
                        Safety in ACS subgroup
                        <img src="\images\Pop_up_button.png" alt="" />
                    </button>
                </div>
                <p style={{ position: 'relative', top: '3vh', left: '2.5vw', fontSize: '0.8rem' }}>
                    * REDUCE-IT was not powered for subgroup analyses.<br />† Time-to-event analysis. The incidence (N%) of primary events was 17.2% in the icosapent ethyl arm vs 22% in the placebo arm, over a median of 4.9 years.1
                </p>
            </div>




            <Footer imgSrc='reference-2.0.png'
                popupImgSrc={['/images/reference-5.1.png', '/images/reference-5.1.png']}
                showPopup={showPopup}
                setShowPopup={setShowPopup}
                popupIndex={popupIndex}
            />
            <ArrowButtons left />

        </div>


    )
}
