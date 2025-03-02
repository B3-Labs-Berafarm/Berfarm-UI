import React from 'react'

export default function Pagination({
    limit,
    current,
    total
}) {
    return (
        <div className='flex justify-center items-center gap-g4 font-body text-med'>
            <div>showing <span className='text-acc'>{limit} items</span> per page </div>
            <div className='flex justify-evenly items-center gap-g1'>
                <div className='text-med'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-chevron-left"><circle cx="12" cy="12" r="10" /><path d="m14 16-4-4 4-4" /></svg>
                </div>
                page <span className='text-acc'>{current}</span> of {total}
                <div className='text-med'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-chevron-right"><circle cx="12" cy="12" r="10" /><path d="m10 8 4 4-4 4" /></svg>
                </div>
            </div>
        </div>
    )
}
