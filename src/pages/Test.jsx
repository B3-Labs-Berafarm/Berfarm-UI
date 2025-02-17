import React from 'react'

export default function Test() {
    return (
        <div className="container">
            <div className="grid grid-cols-4 mob-p:grid-cols-4 mob-l:grid-cols-6 tab-s:grid-cols-8 tab-l:grid-cols-12 gap-16 tab-s:gap-24 scr-m:gap-16 scr-l:gap-32">
                <div className="bg-gray-200">Column 1</div>
                <div className="bg-gray-200">Column 2</div>
                <div className="bg-gray-200">Column 3</div>
                <div className="bg-gray-200">Column 4</div>
                <div className="bg-gray-200">Column 5</div>
                <div className="bg-gray-200">Column 6</div>
                {/* More columns as needed */}
                <div className="bg-gray-200">Column 7</div>
                <div className="bg-gray-200">Column 8</div>
                <div className="bg-gray-200">Column 9</div>
                <div className="bg-gray-200">Column 10</div>
                <div className="bg-gray-200">Column 11</div>
                <div className="bg-gray-200">Column 12</div>
            </div>
        </div>)
}
