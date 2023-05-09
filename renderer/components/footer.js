import { useEffect, useState } from 'react';
import Prescribing from './prescribing';
import References from './references';
import styles from '../styles/Footer.module.css';

const Footer = ({ imgSrc }) => {
    const [showPrescribingPopup, setShowPrescribingPopup] = useState(false);
    const [showReferencesPopup, setShowReferencesPopup] = useState(false);
    useEffect(() => {
        const popup = document.getElementById('prescribingPopup');
        if (showPrescribingPopup) {
            popup.style.opacity = 1;
            popup.style.pointerEvents = 'all';
        } else {
            popup.style.opacity = 0;
            popup.style.pointerEvents = 'none';
        }
    }, [showPrescribingPopup]);
    useEffect(() => {
        const popup = document.getElementById('referencesPopup');
        if (showReferencesPopup) {
            popup.style.opacity = 1;
            popup.style.pointerEvents = 'all';
        } else {
            popup.style.opacity = 0;
            popup.style.pointerEvents = 'none';
        }
    }, [showReferencesPopup]);
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.left}>
                    <p>VAZKEPA ist in Deutschland nicht erhältlich</p>
                </div>
                <div className={styles.right}>
                    <div
                        className={styles.button}
                        onClick={() =>
                            setShowReferencesPopup(!showReferencesPopup)
                        }
                    >
                        <img src='/images/references.svg' alt='' />
                        <p>REFERENCES</p>
                    </div>
                    <div className={styles.line} />
                    <div
                        className={styles.button}
                        onClick={() =>
                            setShowPrescribingPopup(!showPrescribingPopup)
                        }
                    >
                        <img src='/images/prescribing.svg' alt='' />
                        <p>PRESCRIBING INFORMATION</p>
                    </div>
                </div>
            </footer>
            <Prescribing setShowPrescribingPopup={setShowPrescribingPopup} />
            <References
                setShowReferencesPopup={setShowReferencesPopup}
                imgSrc={imgSrc}
            />
        </>
    );
};

export default Footer;
