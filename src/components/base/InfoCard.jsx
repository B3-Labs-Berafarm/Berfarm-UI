import React from 'react'

export default function InfoCard({ label = '', value = '-', key }) {
    return (
        <div key={key} className='w-[288px] h-[144px] bg-lvl2 rounded-16 px-g3 py-g4 border border-light'>
            <label className='font-titles font-weight-800 text-hi title-s'>{label}</label>
            <div className='font-headings font-weight-800 text-hi h1'>{value}</div>
        </div>
    )
}
