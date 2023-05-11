import React from 'react'
import styles from '../../../../styles/LearnMore.module.scss';
import Footer from '../../../../components/footer';
import ArrowButtons from '../../../../components/ArrowButtons';
import ButtonCard from '../../../../components/buttonCard';
import { useRouter } from 'next/router';



export default function VazkepaReduced() {

    const router = useRouter();


    const navItems = [
        {
            title: 'CV RISK MANAGEMENT:\n IS THERE A GAP?',
            link: '/wheres-the-gap',
        },
        {
            title: 'A NEW PARADIGM IN\n CV RISK MANAGEMENT',
            link: '/a-new-paradigm',
        },
        {
            title: 'REDUCE CV RISK\n WITH VAZKEPA',
            link: '/reduce-cv-risk',
        },
        {
            title: 'PATIENTS WHO\n CAN BENEFIT',
            link: '/patients-who-can-benefit',
        },
    ];



    React.useEffect(() => {
        const navLinks = document.querySelectorAll('.navLi');
        navLinks[0].style.left = '375px';
        navLinks[0].style.top = '27.5%';
        navLinks[1].style.left = '410px';
        navLinks[1].style.top = '42.5%';
        navLinks[2].style.left = '415px';
        navLinks[2].style.top = '57.5%';
        navLinks[3].style.left = '390px';
        navLinks[3].style.top = '72.5%';
    }, []);







    return (
        <div>
            <ArrowButtons left />
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
                        <img src="\images\learn-more\David\David_Reduced_Graphic.svg" alt="" />
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
                        <img src="\images\learn-more\David\David_Reduced_Arrow.jpg" alt="" />
                    </div>
                </div>
                <div className={styles.bottomReducedRisk}>
                    <button>
                        Total events
                        <img src="\images\Pop_up_button.png" alt="" />
                    </button>
                    <button>
                        Safety in ACS subgroup
                        <img src="\images\Pop_up_button.png" alt="" />
                    </button>
                </div>
                <p style={{ position: 'relative', top: '3vh', left: '2.5vw', fontSize: '0.8rem' }}>
                    * REDUCE-IT was not powered for subgroup analyses.<br />† Time-to-event analysis. The incidence (N%) of primary events was 17.2% in the icosapent ethyl arm vs 22% in the placebo arm, over a median of 4.9 years.1
                </p>
            </div>

            {navItems.map((item, i) => (
                <li
                    className='navLi'
                    onClick={() => router.push(item.link)}
                // style={{
                //     transform:
                //         router.pathname === item.link
                //             ? 'translateX(0)'
                //             : 'translateX(0)',
                // }}
                >
                    <img
                        src={
                            router.pathname === item.link
                                ? '/images/hotspot-filled.svg'
                                : '/images/hotspot.svg'
                        }
                        alt=''
                    />
                    <a
                        className='navLiLink'
                        style={{
                            backgroundColor:
                                router.pathname === item.link
                                    ? 'white'
                                    : 'rgba(0, 0, 0, 0)',
                            color:
                                router.pathname === item.link
                                    ? '#009ADE'
                                    : 'white',
                            padding:
                                router.pathname === item.link
                                    ? '16px 10px'
                                    : '0',
                            maxWidth:
                                i === 0
                                    ? 270
                                    : i === 1
                                        ? 250
                                        : i === 2
                                            ? 240
                                            : 200,
                        }}
                    >
                        {item.title}
                    </a>
                </li>
            ))}


            <Footer imgSrc='reference-2.0.png' />
        </div>


    )
}
