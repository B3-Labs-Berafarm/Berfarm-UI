import React from 'react'
import Input from './base/Input'

export default function Deposit({ inputBlockClassName = '', inputClassName, icon, placeholder = '', label = '', }) {
    return (
        <>
            <Input
                label='Amount'
                labelClassName="font-body font-weight-500 text-med pl-20"
                inputBlockClassName="!w-full !max-w-full"
                placeholder="0.00"
                inputClassName={"bg-srf-l2 font-headings text-hi border-action-neutral border-2 !rounded-[4px] h-[56px] !lbl-l text-low"}
                icon={<span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-hi font-body cursor-pointer">Max</span>} />

            <div className='flex justify-between items-center pt-g1 px-g2h'>
                <div className='body-s font-body text-med'>Wallet Balance</div>
                <div className='body-s font-body font-weight-700 text-hi'>64,420.00 CURR UNIT</div>
            </div>
            <div className='flex justify-center items-center py-[28px] text-mean-err font-body body-m'>
                error Message
            </div>
            <div className='flex justify-center items-center'>
                <button className='flex justify-between items-center space-x-g0h px-l bg-action-primary-default ht-l shadow-level2 border border-light rounded-rnd-m text-inv-hi font-body'>
                    <span className='font-weight-500'>Approve deposit</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="currentColor">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22ZM12.5 21C17.4706 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3C7.52944 3 3.5 7.02944 3.5 12C3.5 16.9706 7.52944 21 12.5 21Z" fill="currentColor" fill-opacity="0.9" />
                        <path d="M8.83988 13.178C8.97588 13.07 9.03788 13.02 9.02588 13.028C9.41788 12.704 9.72588 12.438 9.94988 12.23C10.1779 12.022 10.3699 11.804 10.5259 11.576C10.6819 11.348 10.7599 11.126 10.7599 10.91C10.7599 10.746 10.7219 10.618 10.6459 10.526C10.5699 10.434 10.4559 10.388 10.3039 10.388C10.1519 10.388 10.0319 10.446 9.94388 10.562C9.85988 10.674 9.81788 10.834 9.81788 11.042H8.82788C8.83588 10.702 8.90788 10.418 9.04388 10.19C9.18388 9.96199 9.36588 9.79399 9.58988 9.68599C9.81788 9.57799 10.0699 9.52399 10.3459 9.52399C10.8219 9.52399 11.1799 9.64599 11.4199 9.88999C11.6639 10.134 11.7859 10.452 11.7859 10.844C11.7859 11.272 11.6399 11.67 11.3479 12.038C11.0559 12.402 10.6839 12.758 10.2319 13.106H11.8519V13.94H8.83988V13.178Z" fill="currentColor" fill-opacity="0.9" />
                        <path d="M12.6276 13.22V12.392L14.5236 9.67999H15.6696V12.332H16.1616V13.22H15.6696V14H14.6436V13.22H12.6276ZM14.7156 10.808L13.7076 12.332H14.7156V10.808Z" fill="currentColor" fill-opacity="0.9" />
                    </svg>
                </button>
            </div>

        </>

    )
}
