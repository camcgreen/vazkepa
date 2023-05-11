import { useEffect, useState } from 'react';
import styles from '../../styles/LearnMore.module.scss';
import Footer from '../../components/footer';
import Router from 'next/router';
import Sidebar from '../../components/sidebar';

export default function Home() {
    useEffect(() => {




        // on mount
    }, []);
    return (
        // <div className={styles.wrapper}>
        // <Sidebar />

        <div>

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
                        link: '/a-new-paradigm/primary-secondary-endpoints',
                    },
                    {
                        title: 'SECONDARY ENDPOINTS',
                        link: '/a-new-paradigm/secondary-endpoints',
                    },
                    {
                        title: 'SAFETY',
                        link: '/a-new-paradigm/safety',
                    },
                ]}
            />


            <div className={`${styles.content} content`} >
                <h1>
                    WHICH PATIENT WOULD YOU LIKE TO<br />
                    <span className='blue'> LEARN MORE </span>
                    ABOUT?

                </h1>

                <div className={styles.gap1Content}>


                    <div className={styles.profiles}>
                        <div>
                            <img src='/images/learn-more/David/David.png' alt='' />
                            <button onClick={() => {
                                Router.push('/learn-more/patients/David')
                            }}>MEET DAVID*</button>
                            <span>an ACS patient</span>
                        </div>
                        <div>
                            <img src='/images/learn-more/Karin/Karin.png' alt='' />
                            <button onClick={() => {
                                Router.push('/learn-more/patients/Karin')
                            }}>MEET KARIN*</button>
                            <span>a recent MI patient</span>
                        </div>
                        <div>
                            <img src='/images/learn-more/John/John.png' alt='' />
                            <button onClick={() => {
                                Router.push('/learn-more/patients/John')
                            }}>MEET JOHN*</button>
                            <span>a prior PCI patient</span>
                        </div>
                    </div>

                </div>

                <Footer imgSrc='reference-5.0.1.png' />
            </div>


        </div>

    );
}
