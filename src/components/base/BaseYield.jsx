import React from 'react'

export default function BaseYield({ base_apr, tableView = false }) {
    return (
        <div className={`flex justify-between items-center p-g2 bg-act-accent1-default rounded-16 ${tableView ? 'min-h-[80px]' : ''} `} >
            <div className='flex gap-g2 text-hi'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g id="Icons Unique">
                        <g id="Shape">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11 20V14H13V20H11Z" fillOpacity="0.87" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M14 20V6H16V20H14Z" fillOpacity="0.87" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M17 20V8H19V20H17Z" fillOpacity="0.87" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 20V12H10V20H8Z" fillOpacity="0.87" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M5 20V10H7V20H5Z" fillOpacity="0.87" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 20V16H4V20H2Z" fillOpacity="0.87" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M20 20V4H22V20H20Z" fillOpacity="0.87" />
                        </g>
                    </g>
                </svg>
                <p className={`${tableView ? 'body-s' : 'body-l'} font-body text-hi`}>Base Yield Tranche</p>
            </div>
            <div className={`${tableView ? 'body-s' : 'body-l'} font-body text-hi`}>APR <span className='font-weight-800'>{base_apr}</span></div>
        </div >
    )
}
