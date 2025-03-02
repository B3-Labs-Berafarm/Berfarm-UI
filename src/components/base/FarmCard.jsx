import React from 'react'
import Badge from './Badge'
import BaseYield from './BaseYield'
import RewardYield from './RewardYield'

export default function FarmCard({ key, vault_name, units, reward_multiplier, base_apr }) {
    return (
        <div key={key} className='w-full bg-lvl2 border border-light px-s py-s tab-s:px-m tab-s:py-m scr-m:px-l scr-m:py-l rounded-rnd-l space-y-g3 shadow-level2'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center gap-g2'>
                    <img src='/assets/dollar.png' width={48} height={48} alt='vault image' />
                    <span className='font-titles title-l font-weight-800 text-hi'>{vault_name}</span>
                    <Badge className="body-s font-body bg-mean-inv-suc px-16 rounded-full h-[32px] flex justify-between items-center" label="Active" />
                </div>
                <div className='font-titles title-l font-weight-800 text-hi'>{units}</div>
            </div>
            <div className='flex flex-col space-y-g1'>
                <BaseYield {...{ base_apr }} />
                <RewardYield {...{ reward_multiplier }} />
            </div>
        </div>)
}
