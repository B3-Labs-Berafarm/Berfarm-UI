import React from 'react'
import { Info } from 'lucide-react'; // Import the Info icon from Lucide

export default function DataTextImg({ label, value, infoText = '', labelClassName = '', valueClassName = '', dataTextClassName = '' }) {
    return (
        <div className={dataTextClassName}>
            <div className={labelClassName}>
                <img src='/assets/dollar.png' width={24} height={24} alt='vault image' />
                {label}


            </div>
            <div className={valueClassName}>
                {value}
            </div>
        </div >
    )
}
