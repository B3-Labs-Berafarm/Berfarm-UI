import React from 'react'

export default function NoDataFound({ className, text = "No Data Found" }) {
    return (
        <div className={`text-center body-l font-body font-weight-800 text-hi border border-light p-g10 rounded-16 shadow-level2 ${className}`}>{text}</div>
    )
}
