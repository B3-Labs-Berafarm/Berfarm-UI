import React from 'react'

export default function Badge({ className, label }) {
    return (
        <span className={className}>{label}</span>
    )
}
