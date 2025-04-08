import React from 'react'
import Badge from './Badge'
import BaseYield from './BaseYield'
import RewardYield from './RewardYield'
import { titleize } from 'underscore.string'
import { getTvlForVaultFromTvlList } from '../../utils/tvl'

export default function FarmCard({ keyValue, vaultName, vaultStatus, units, reward_multiplier, base_apr, _id: vaultId, tvls, trancheVaultAddress }) {

    return (
        <div key={keyValue} className='w-full bg-lvl2 border border-light px-s py-s tab-s:px-m tab-s:py-m scr-m:px-l scr-m:py-l rounded-rnd-l space-y-g3 shadow-level2'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center gap-g2'>
                    <img src='/assets/Bera.ico' width={48} height={48} alt='vault image' className='rounded-full' />
                    <span className='font-titles title-l font-weight-800 text-hi'>{vaultName || '-'}</span>
                    <Badge className="body-s font-body bg-mean-inv-suc px-16 rounded-full h-[32px] flex justify-between items-center" label={titleize(vaultStatus)} />
                </div>
                <div className='font-titles title-l font-weight-800 text-hi'>{getTvlForVaultFromTvlList(tvls, trancheVaultAddress) || '-'}</div>
            </div>
            <div className='flex flex-col space-y-g1'>
                <BaseYield {...{ base_apr, vaultId,trancheVaultAddress }} />
                <RewardYield {...{ reward_multiplier, vaultId,trancheVaultAddress }} />
            </div>
        </div>)
}
