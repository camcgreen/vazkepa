import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import IdleTimerComponent from '../components/IdleTimer';
import Router from 'next/router';

export default function App({ Component, pageProps }) {
    const router = useRouter();
    let storedViews1_0;
    let storedViews2_0;
    let storedViews2_1;
    let storedViews2_2;
    let storedViews3_0;
    let storedViews3_1;
    let storedViews3_2;
    let storedViews4_0;
    let storedViews4_1;
    let storedViews4_2;
    let storedViews4_3;
    let storedViews4_4;
    let storedViews4_5;
    let storedViews5_0;
    let storedViews5_1_1;
    let storedViews5_1_2;
    let storedViews5_1_3;
    let storedViews5_2_1;
    let storedViews5_2_2;
    let storedViews5_2_3;
    let storedViews5_3_1;
    let storedViews5_3_2;
    let storedViews5_3_3;
    // const [views1_0, setViews1_0] = useState(0);
    // const [views2_0, setViews2_0] = useState(0);
    // const [views2_1, setViews2_1] = useState(0);
    // const [views2_2, setViews2_2] = useState(0);
    // const [views3_0, setViews3_0] = useState(0);
    // const [views3_1, setViews3_1] = useState(0);
    // const [views3_2, setViews3_2] = useState(0);
    // const [views4_0, setViews4_0] = useState(0);
    // const [views4_1, setViews4_1] = useState(0);
    // const [views4_2, setViews4_2] = useState(0);
    // const [views4_3, setViews4_3] = useState(0);
    // const [views4_4, setViews4_4] = useState(0);
    // const [views4_5, setViews4_5] = useState(0);
    // const [views5_0, setViews5_0] = useState(0);
    // const [views5_1_1, setViews5_1_1] = useState(0);
    // const [views5_1_2, setViews5_1_2] = useState(0);
    // const [views5_1_3, setViews5_1_3] = useState(0);
    // const [views5_2_1, setViews5_2_1] = useState(0);
    // const [views5_2_2, setViews5_2_2] = useState(0);
    // const [views5_2_3, setViews5_2_3] = useState(0);
    // const [views5_3_1, setViews5_3_1] = useState(0);
    // const [views5_3_2, setViews5_3_2] = useState(0);
    // const [views5_3_3, setViews5_3_3] = useState(0);

    useEffect(() => {
        storedViews1_0 = localStorage.getItem('storedViews1_0') || 0;
        storedViews2_0 = localStorage.getItem('storedViews2_0') || 0;
        storedViews2_1 = localStorage.getItem('storedViews2_1') || 0;
        storedViews2_2 = localStorage.getItem('storedViews2_2') || 0;
        storedViews3_0 = localStorage.getItem('storedViews3_0') || 0;
        storedViews3_1 = localStorage.getItem('storedViews3_1') || 0;
        storedViews3_2 = localStorage.getItem('storedViews3_2') || 0;
        storedViews4_0 = localStorage.getItem('storedViews4_0') || 0;
        storedViews4_1 = localStorage.getItem('storedViews4_1') || 0;
        storedViews4_2 = localStorage.getItem('storedViews4_2') || 0;
        storedViews4_3 = localStorage.getItem('storedViews4_3') || 0;
        storedViews4_4 = localStorage.getItem('storedViews4_4') || 0;
        storedViews4_5 = localStorage.getItem('storedViews4_5') || 0;
        storedViews5_0 = localStorage.getItem('storedViews5_0') || 0;
        storedViews5_1_1 = localStorage.getItem('storedViews5_1_1') || 0;
        storedViews5_1_2 = localStorage.getItem('storedViews5_1_2') || 0;
        storedViews5_1_3 = localStorage.getItem('storedViews5_1_3') || 0;
        storedViews5_2_1 = localStorage.getItem('storedViews5_2_1') || 0;
        storedViews5_2_2 = localStorage.getItem('storedViews5_2_2') || 0;
        storedViews5_2_3 = localStorage.getItem('storedViews5_2_3') || 0;
        storedViews5_3_1 = localStorage.getItem('storedViews5_3_1') || 0;
        storedViews5_3_2 = localStorage.getItem('storedViews5_3_2') || 0;
        storedViews5_3_3 = localStorage.getItem('storedViews5_3_3') || 0;
    }, []);

    useEffect(() => {
        switch (router.pathname) {
            case '/':
                const lcl1_0 = localStorage.getItem('storedViews1_0');
                localStorage.setItem('storedViews1_0', +lcl1_0 + 1);
                break;
            case '/wheres-the-gap':
                const lcl2_0 = localStorage.getItem('storedViews2_0');
                localStorage.setItem('storedViews2_0', +lcl2_0 + 1);
                break;
            case '/wheres-the-gap/drivers-of-residual-cv-risk':
                const lcl2_1 = localStorage.getItem('storedViews2_1');
                localStorage.setItem('storedViews2_1', +lcl2_1 + 1);
                break;
            case '/wheres-the-gap/elevated-tgs-as-a-risk-marker':
                const lcl2_2 = localStorage.getItem('storedViews2_2');
                localStorage.setItem('storedViews2_2', +lcl2_2 + 1);
                break;
            case '/a-new-paradigm':
                const lcl3_0 = localStorage.getItem('storedViews3_0');
                localStorage.setItem('storedViews3_0', +lcl3_0 + 1);
                break;
            case '/a-new-paradigm/how-does-vazkepa-work':
                const lcl3_1 = localStorage.getItem('storedViews3_1');
                localStorage.setItem('storedViews3_1', +lcl3_1 + 1);
                break;
            case '/a-new-paradigm/guidelines':
                const lcl3_2 = localStorage.getItem('storedViews3_2');
                localStorage.setItem('storedViews3_2', +lcl3_2 + 1);
                break;
            case '/reduce-cv-risk':
                const lcl4_0 = localStorage.getItem('storedViews4_0');
                localStorage.setItem('storedViews4_0', +lcl4_0 + 1);
                break;
            case '/reduce-cv-risk/primary-endpoint':
                const lcl4_1 = localStorage.getItem('storedViews4_1');
                localStorage.setItem('storedViews4_1', +lcl4_1 + 1);
                break;
            case '/reduce-cv-risk/primary-secondary-endpoints':
                const lcl4_2 = localStorage.getItem('storedViews4_2');
                localStorage.setItem('storedViews4_2', +lcl4_2 + 1);
                break;
            case '/reduce-cv-risk/secondary-endpoints':
                const lcl4_3 = localStorage.getItem('storedViews4_3');
                localStorage.setItem('storedViews4_3', +lcl4_3 + 1);
                break;
            case '/reduce-cv-risk/safety':
                const lcl4_4 = localStorage.getItem('storedViews4_4');
                localStorage.setItem('storedViews4_4', +lcl4_4 + 1);
                break;
            case '/reduce-cv-risk/contraindications':
                const lcl4_5 = localStorage.getItem('storedViews4_5');
                localStorage.setItem('storedViews4_5', +lcl4_5 + 1);
                break;
            case '/learn-more':
                const lcl5_0 = localStorage.getItem('storedViews5_0');
                localStorage.setItem('storedViews5_0', +lcl5_0 + 1);
                break;
            case '/learn-more/patients/David':
                const lcl5_1_1 = localStorage.getItem('storedViews5_1_1');
                localStorage.setItem('storedViews5_1_1', +lcl5_1_1 + 1);
                break;
            case '/learn-more/patients/David/Medical-Info':
                const lcl5_1_2 = localStorage.getItem('storedViews5_1_2');
                localStorage.setItem('storedViews5_1_2', +lcl5_1_2 + 1);
                break;
            case '/learn-more/patients/David/VazkepaReduced':
                const lcl5_1_3 = localStorage.getItem('storedViews5_1_3');
                localStorage.setItem('storedViews5_1_3', +lcl5_1_3 + 1);
                break;
            case '/learn-more/patients/Karin':
                const lcl5_2_1 = localStorage.getItem('storedViews5_2_1');
                localStorage.setItem('storedViews5_2_1', +lcl5_2_1 + 1);
                break;
            case '/learn-more/patients/Karin/Medical-Info':
                const lcl5_2_2 = localStorage.getItem('storedViews5_2_2');
                localStorage.setItem('storedViews5_2_2', +lcl5_2_2 + 1);
                break;
            case '/learn-more/patients/Karin/VazkepaReduced':
                const lcl5_2_3 = localStorage.getItem('storedViews5_2_3');
                localStorage.setItem('storedViews5_2_3', +lcl5_2_3 + 1);
                break;
            case '/learn-more/patients/John':
                const lcl5_3_1 = localStorage.getItem('storedViews5_3_1');
                localStorage.setItem('storedViews5_3_1', +lcl5_3_1 + 1);
                break;
            case '/learn-more/patients/John/Medical-Info':
                const lcl5_3_2 = localStorage.getItem('storedViews5_3_2');
                localStorage.setItem('storedViews5_3_2', +lcl5_3_2 + 1);
                break;
            case '/learn-more/patients/John/VazkepaReduced':
                const lcl5_3_3 = localStorage.getItem('storedViews5_3_3');
                localStorage.setItem('storedViews5_3_3', +lcl5_3_3 + 1);
                break;
        }
        console.log(router.pathname);
    }, [router.pathname]);

    return (
        <>
            <Head>
                <title>BOILERPLATE</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <IdleTimerComponent />
            {/* <img
                src='/images/v.png'
                alt=''
                className='v'
                style={{ display: router.pathname === '/' ? 'none' : 'block' }}
            /> */}
            <img
                src='/images/bg.png'
                alt=''
                className='bg'
                style={{
                    display: router.pathname === '/' ? 'none' : 'block',
                    // transform: 'scale(0.5)',
                }}
            />
            <Component {...pageProps} />
        </>
    );
}
