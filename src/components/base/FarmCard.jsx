import React from 'react'
import Badge from './Badge'

export default function FarmCard() {
    return (
        <div className='w-full bg-lvl2 border border-light px-l py-l rounded-rnd-l'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center gap-g2'>
                    <img src='/assets/dollar.png' width={48} height={48} alt='vault image' />
                    <span className='font-titles title-l font-weight-800 text-hi'>USDT Vaults</span>
                    <Badge className="body-s font-body bg" label="Active" />
                </div>
            </div>
        </div>)
}
