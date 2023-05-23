import * as XLSX from 'xlsx/xlsx.mjs';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Export.module.css';

const Export = () => {
    const router = useRouter();
    const [views1_0, setViews1_0] = useState(0);
    const [views2_0, setViews2_0] = useState(0);
    const [views2_1, setViews2_1] = useState(0);
    const [views2_2, setViews2_2] = useState(0);
    const [views3_0, setViews3_0] = useState(0);
    const [views3_1, setViews3_1] = useState(0);
    const [views3_2, setViews3_2] = useState(0);
    const [views4_0, setViews4_0] = useState(0);
    const [views4_1, setViews4_1] = useState(0);
    const [views4_2, setViews4_2] = useState(0);
    const [views4_3, setViews4_3] = useState(0);
    const [views4_4, setViews4_4] = useState(0);
    const [views4_5, setViews4_5] = useState(0);
    const [views5_0, setViews5_0] = useState(0);
    const [views5_1_1, setViews5_1_1] = useState(0);
    const [views5_1_2, setViews5_1_2] = useState(0);
    const [views5_1_3, setViews5_1_3] = useState(0);
    const [views5_2_1, setViews5_2_1] = useState(0);
    const [views5_2_2, setViews5_2_2] = useState(0);
    const [views5_2_3, setViews5_2_3] = useState(0);
    const [views5_3_1, setViews5_3_1] = useState(0);
    const [views5_3_2, setViews5_3_2] = useState(0);
    const [views5_3_3, setViews5_3_3] = useState(0);

    const sendToExport = () => {
        const table = makeTable();
        exportExcel(table, 'views');
    };

    const makeTable = () => {
        let table = [];
        table.push(
            {
                page: '1_0',
                views: views1_0,
            },
            {
                page: '2_0',
                views: views2_0,
            },
            {
                page: '2_1',
                views: views2_1,
            },
            {
                page: '2_2',
                views: views2_2,
            },
            {
                page: '3_0',
                views: views3_0,
            },
            {
                page: '3_1',
                views: views3_1,
            },
            {
                page: '3_2',
                views: views3_2,
            },
            {
                page: '4_0',
                views: views4_0,
            },
            {
                page: '4_1',
                views: views4_1,
            },
            {
                page: '4_2',
                views: views4_2,
            },
            {
                page: '4_3',
                views: views4_3,
            },
            {
                page: '4_4',
                views: views4_4,
            },
            {
                page: '4_5',
                views: views4_5,
            },
            {
                page: '5_0',
                views: views5_0,
            },
            {
                page: '5_1_1',
                views: views5_1_1,
            },
            {
                page: '5_1_2',
                views: views5_1_2,
            },
            {
                page: '5_1_3',
                views: views5_1_3,
            },
            {
                page: '5_2_1',
                views: views5_2_1,
            },
            {
                page: '5_2_2',
                views: views5_2_2,
            },
            {
                page: '5_2_3',
                views: views5_2_3,
            },
            {
                page: '5_1_1',
                views: views5_1_1,
            },
            {
                page: '5_3_2',
                views: views5_3_2,
            },
            {
                page: '5_3_3',
                views: views5_3_3,
            }
        );

        return table;
    };

    const exportExcel = (data, name) => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, name + '.xlsx');
    };

    useEffect(() => {
        const storedViews1_0 = localStorage.getItem('storedViews1_0') || 0;
        const storedViews2_0 = localStorage.getItem('storedViews2_0') || 0;
        const storedViews2_1 = localStorage.getItem('storedViews2_1') || 0;
        const storedViews2_2 = localStorage.getItem('storedViews2_2') || 0;
        const storedViews3_0 = localStorage.getItem('storedViews3_0') || 0;
        const storedViews3_1 = localStorage.getItem('storedViews3_1') || 0;
        const storedViews3_2 = localStorage.getItem('storedViews3_2') || 0;
        const storedViews4_0 = localStorage.getItem('storedViews4_0') || 0;
        const storedViews4_1 = localStorage.getItem('storedViews4_1') || 0;
        const storedViews4_2 = localStorage.getItem('storedViews4_2') || 0;
        const storedViews4_3 = localStorage.getItem('storedViews4_3') || 0;
        const storedViews4_4 = localStorage.getItem('storedViews4_4') || 0;
        const storedViews4_5 = localStorage.getItem('storedViews4_5') || 0;
        const storedViews5_0 = localStorage.getItem('storedViews5_0') || 0;
        const storedViews5_1_1 = localStorage.getItem('storedViews5_1_1') || 0;
        const storedViews5_1_2 = localStorage.getItem('storedViews5_1_2') || 0;
        const storedViews5_1_3 = localStorage.getItem('storedViews5_1_3') || 0;
        const storedViews5_2_1 = localStorage.getItem('storedViews5_2_1') || 0;
        const storedViews5_2_2 = localStorage.getItem('storedViews5_2_2') || 0;
        const storedViews5_2_3 = localStorage.getItem('storedViews5_2_3') || 0;
        const storedViews5_3_1 = localStorage.getItem('storedViews5_3_1') || 0;
        const storedViews5_3_2 = localStorage.getItem('storedViews5_3_2') || 0;
        const storedViews5_3_3 = localStorage.getItem('storedViews5_3_3') || 0;
        setViews1_0(storedViews1_0);
        setViews2_0(storedViews2_0);
        setViews2_1(storedViews2_1);
        setViews2_2(storedViews2_2);
        setViews3_0(storedViews3_0);
        setViews3_1(storedViews3_1);
        setViews3_2(storedViews3_2);
        setViews4_0(storedViews4_0);
        setViews4_1(storedViews4_1);
        setViews4_2(storedViews4_2);
        setViews4_3(storedViews4_3);
        setViews4_4(storedViews4_4);
        setViews4_5(storedViews4_5);
        setViews5_0(storedViews5_0);
        setViews5_1_1(storedViews5_1_1);
        setViews5_1_2(storedViews5_1_2);
        setViews5_1_3(storedViews5_1_3);
        setViews5_2_1(storedViews5_2_1);
        setViews5_2_2(storedViews5_2_2);
        setViews5_2_3(storedViews5_2_3);
        setViews5_3_1(storedViews5_3_1);
        setViews5_3_2(storedViews5_3_2);
        setViews5_3_3(storedViews5_3_3);
    }, []);
    return (
        <div className={styles.export}>
            <h1>Export</h1>
            <div className={styles.exportContainer}>
                <button onClick={() => sendToExport()}>
                    Export page view counts
                </button>
                <button onClick={() => router.push('/')}>Back to home</button>
            </div>
        </div>
    );
};

export default Export;
