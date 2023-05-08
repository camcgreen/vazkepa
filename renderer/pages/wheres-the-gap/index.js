import { useEffect, useState } from 'react';
import styles from '../../styles/Gap.module.css';
import Footer from '../../components/footer';

export default function Home() {
    useEffect(() => {
        // on mount
    }, []);
    return (
        // <div className={styles.wrapper}>
        // <Sidebar />
        <div className='content'>
            <h1>
                <span className='blue'>REGARDLESS OF STATIN THERAPY</span>,
                RESIDUAL RISK REMAINS IN HIGH CV RISK PATIENTS
                <span className='superscript'>
                    <sup>1-3</sup>
                </span>
            </h1>
            <div className={styles.gap1Content}>
                <ul>
                    <li>
                        The standard of care for high-risk CV patients has
                        traditionally focused on LDL-C risk-reduction with
                        statins<sup>1</sup>
                    </li>
                    <li>
                        Multiple primary and secondary prevention trails have
                        consistently shown a reduction of 25% to 35% in the risk
                        of CV events with Statin Therapy<sup>1</sup>
                    </li>
                    <li>
                        Even patients achieving target LDL-C levels can still
                        experience CV events – this is known as residual risk.
                        <sup>1</sup>
                    </li>
                    <li>
                        Strategies for residual CV risk management are necessary
                        <sup>1-3</sup>
                    </li>
                </ul>
                <img src='/images/wheres-the-gap-1.png' alt='' />
            </div>
            <img className='next' src='/images/next.svg' alt='' />
            <ul className='footnotes'>
                <li className='footnote'>
                    *Confidence intervals: Primary endpoint (5-point MACE) - HR
                    (95% CI): 0.75 (0.68-0.83); key secondary endpoint (3-point
                    MACE) - HR (95% CI): 0.74 (0.65-0.83).
                </li>
                <li className='footnote'>
                    5-point MACE was defined as nonfatal MI, nonfatal stroke, CV
                    death, coronary revascularisation, or unstable angina
                    requiring hospitalisation.
                </li>
                <li className='footnote'>
                    3-point MACE was defined as nonfatal MI, nonfatal stroke, or
                    CV death.
                </li>
            </ul>
            <Footer imgSrc='reference-2.0.png' />
        </div>
    );
}
