import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    useEffect(() => {
        // on mount
    }, []);
    return (
        <div className={styles.wrapper}>
            <h1>Vazkepa - Home</h1>
            <nav>
                <ul>
                    <li>
                        <Link href='/wheres-the-gap'>WHERE IS THE GAP?</Link>
                    </li>
                    <li>
                        <Link href='/what-is-vazkepa'>WHAT IS VAZKEPA?</Link>
                    </li>
                    <li>
                        <Link href='/reduce-it'>REDUCE-IT</Link>
                    </li>
                    <li>
                        <Link href='/who-could-benefit'>
                            WHO COULD BENEFIT?
                        </Link>
                    </li>
                    <li>
                        <Link href='/learn-more'>
                            LEARN MORE ABOUT
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
