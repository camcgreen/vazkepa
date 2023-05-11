import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Gap.module.css';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';

export default function Safety() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupIndex, setPopupIndex] = useState(0);
    const router = useRouter();
    return (
        <>
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
                        link: '/reduce-cv-risk/primary-secondary-endpoints',
                    },
                    {
                        title: 'SECONDARY ENDPOINTS',
                        link: '/reduce-cv-risk/secondary-endpoints',
                    },
                    {
                        title: 'SAFETY',
                        link: '/reduce-cv-risk/safety',
                    },
                ]}
            />
            <div className='content'>
                <h1>
                    <span className='blue'>VAZKEPA </span> WAS GENERALLY WELL
                    TOLERATED OVER 4.9 YEARS<sup>1</sup>
                </h1>
                <h2>
                    In the REDUCE-IT study, the overall rates of adverse
                    reactions, and the rates of serious adverse reactions
                    leading to discontinuation, were comparable between the
                    VAZKEPA and placebo groups<sup>1</sup>
                </h2>
                <img
                    className={styles.safety1}
                    src='/images/safety-1.png'
                    alt=''
                />
                <img
                    className={styles.safety2}
                    src='/images/safety-2.png'
                    alt=''
                />
                <img
                    className={styles.safety3}
                    src='/images/safety-3.png'
                    alt=''
                />
                <img
                    className='prev'
                    src='/images/prev.svg'
                    alt=''
                    onClick={() =>
                        router.push('/reduce-cv-risk/secondary-endpoints')
                    }
                />
                <Footer
                    imgSrc='reference-4.4.png'
                    popupImgSrc={['/images/study-design-popup-1.png']}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    popupIndex={popupIndex}
                />
            </div>
        </>
    );
}
