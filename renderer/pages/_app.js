import Head from 'next/head';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import IdleTimerComponent from '../components/IdleTimer';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>BOILERPLATE</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            {/* <IdleTimerComponent /> */}
            <img src='/images/v.png' alt='' className='v' />
            <Component {...pageProps} />
        </>
    );
}
