import { useState, useRef, useEffect, createContext } from "react"
import { useIdleTimer } from 'react-idle-timer'
import styles from '../styles/ScreenSaver.module.css'
import Router from "next/router"

// const timeout = 6000;
const timeout = 30000;
// const timeout = 120000;
const timeoutPushDelay = 5000;
const pushToPage = '/'


const IdleTimerContext = createContext([])

let returnTimeout = false;

const IdleTimerComponent = () => {
    const [isIdle, setIsIdle] = useState(false)
    const vid = useRef(false)

    const getIsIdle = () => isIdle


    const handleOnActive = () => {
        console.log("active")
        setIsIdle(false)

        const currentSessionStartedTimestamp = Date.now();
        let currentSessionStartedTime = new Date(
            currentSessionStartedTimestamp
        );

        currentSessionStartedTime = new Date(
            currentSessionStartedTime.toLocaleString('en-US', {
                timeZone: 'Europe/Amsterdam',
            })
        );

        // Add an hour to currentSessionStartedTime
        currentSessionStartedTime.setHours(
            currentSessionStartedTime.getHours() + 1
        );

        let currentSessionStarted = currentSessionStartedTime
            .toISOString()
            .replace(/T/, ' ') // replace T with a space
            .replace(/\..+/, ''); // remove millisecond part

        localStorage.setItem(
            'currentSessionStarted',
            currentSessionStarted
        );

        // const currentSessionStartedTimestamp = Date.now();
        // let currentSessionStartedTime = new Date(currentSessionStartedTimestamp);
        // currentSessionStartedTime = new Date(currentSessionStartedTime.toLocaleString('en-US', { timeZone: 'Europe/London' }));
        // let currentSessionStarted = currentSessionStartedTime.toISOString().replace(/T/, ' ').replace(/\..+/, ''); // replace T with a space and remove millisecond part
        // let currentSessionStartedTime = new Date(
        //     currentSessionStartedTimestamp.toLocaleString('en-US', {
        //         timeZone: 'Europe/Amsterdam',
        //     })
        // );
        // // Add an hour to currentSessionStartedTime
        // currentSessionStartedTime.setHours(
        //     currentSessionStartedTime.getHours() + 1
        // );
        // let currentSessionStarted = currentSessionStartedTime.toISOString().replace(/T/, ' ').replace(/\..+/, ''); // replace T with a space and remove millisecond part
        // localStorage.setItem('currentSessionStarted', currentSessionStarted);
        let numberOfInteractions = localStorage.getItem('numberOfInteractions');
        if (numberOfInteractions !== null) {
            numberOfInteractions = parseInt(numberOfInteractions) + 1;
        } else {
            numberOfInteractions = 1;
        }
        localStorage.setItem('numberOfInteractions', numberOfInteractions.toString())
        clearTimeout(returnTimeout);

        //setIsIdleGlobal[1](false)

    }




    useEffect(() => {


        console.log(isIdle, "isIdle from compoenent");
        //reset();


        console.log(isIdle)
        vid.current.currentTime = 0;
        isIdle ? vid.current.play() : vid.current.pause()
        let element = document.getElementsByClassName(`${styles.main}`);

        for (let i = 0; i < element.length; i++) {
            element[i].style.opacity =
                isIdle ?
                    '1'
                    : '0';

            element[i].style.zIndex =
                isIdle ?
                    '1000'
                    : '-1000';
        }

        if (isIdle == true) {

            document.getElementsByTagName('video')[0].onended = function () {
                this.load();
                this.play();
            };





        } else {
        }


    }, [isIdle])


    const handleOnIdle = () => {

        // console.log("is idle from component")
        setIsIdle(true)

        returnTimeout = setTimeout(() => {
            Router.push(pushToPage)
            returnTimeout = false
        }, timeoutPushDelay);



    }





    const {
        reset,
        pause,
        resume,
        getRemainingTime,
        getLastActiveTime,
        getElapsedTime
    } = useIdleTimer({
        timeout,
        onActive: handleOnActive,
        onIdle: handleOnIdle
    })

    //setIdleTimerReset(reset)



    useEffect(() => {



        document.getElementsByTagName('video')[0].onended = function () {
            this.load();
            this.play();
        };
    }, [])



    return (
        <div id='screenSaver' className={styles.main}>

            <video id='videoEl' ref={vid} className={styles.video} loop={true} autoPlay muted  >
                <source src="/video/screenSaver.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>

    )
}

export default IdleTimerComponent;

export { IdleTimerContext }