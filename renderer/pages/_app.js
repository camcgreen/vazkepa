import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import IdleTimerComponent from '../components/IdleTimer';
import Router from 'next/router';


export default function App({ Component, pageProps }) {

    React.useEffect(() => {

        //PRESS M TO BE REDIRECTED TO MAIN PAGE
        document.addEventListener("keydown", keyDownTextField, false);

        function keyDownTextField(e) {
            var keyCode = e.keyCode;
            if (keyCode == 77) {
                Router.push('/')
            }
        }

    }, [])

    return (
        <>
            <Head>
                <title>BOILERPLATE</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <IdleTimerComponent />


            <Component {...pageProps} />



        </>
    );
}
