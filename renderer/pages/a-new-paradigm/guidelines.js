import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Gap.module.css';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';

export default function Guidelines() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupIndex, setPopupIndex] = useState(0);
    useEffect(() => {
        // on mount
    }, []);
    const router = useRouter();
    return (
        <>
            <Sidebar
                navItems={[
                    {
                        title: 'WHAT IS VAZKEPA?',
                        link: '/a-new-paradigm',
                    },
                    {
                        title: 'HOW DOES VAZKEPA WORK?',
                        link: '/a-new-paradigm/how-does-vazkepa-work',
                    },
                    {
                        title: 'GUIDELINES',
                        link: '/a-new-paradigm/guidelines',
                    },
                ]}
            />
            <div className='content'>
                <h1>
                    <span className='blue'>VAZKEPA</span> IN EUROPEAN GUIDELINES
                    <sup>1,2</sup>
                </h1>
                <h2>
                    Recommendations for drug treatments of high-risk patients
                    with hypertriglyceridaemia to reduce CV risk<sup>1,2</sup>
                </h2>
                <img
                    className='prev'
                    src='/images/prev.svg'
                    alt=''
                    onClick={() =>
                        router.push('/a-new-paradigm/how-does-vazkepa-work')
                    }
                />
                <p className={styles.howNote}>
                    *VAZKEPA is indicated for TG ≥1.7 mmol/L [≥150 mg/dL]
                    <sup>3</sup>
                </p>
                <Footer
                    imgSrc='reference-3.2.png'
                    popupImgSrc={['/images/how-does-vazkepa-work-popup-1.png']}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    popupIndex={popupIndex}
                />
            </div>
        </>
    );
}
