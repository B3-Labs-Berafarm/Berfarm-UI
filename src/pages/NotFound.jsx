import React from 'react'

export default function NotFound() {
    return (
        <div className='h-screen w-screen flex justify-center items-center flex-col bg-srf-base gap-g2'>
            <div className='text-hi title-l font-body font-weight-800 text-center px-16'>Looks like we lost this page. Probably out to lunch... but you’re welcome to stick around.</div>
            <button className='text-hi font-body font-weight-600 rounded-full min-w-[120px] bg-action-primary-default hover:bg-action-primary-hover p-g1'
                onClick={() => window.location.href = '/'}
            >
                Go to Home
            </button>
        </div>
    )
}
