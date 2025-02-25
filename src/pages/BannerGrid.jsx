import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const BannerGrid = () => {
    const [hoveredArea, setHoveredArea] = useState(null);
    const [imageUrl, setImageUrl] = useState("/assets/abc/0 Main UI - Fallback.webp");
    const updateImageUrl = () => {
        if (window.innerWidth >= 1024) {
            setImageUrl("/assets/abc/0 Main UI - Fallback.webp");
        } else if (window.innerWidth >= 768) {
            setImageUrl("/assets/abc/1 Main UI - Base Portrait.webp");
        } else {
            setImageUrl("/assets/abc/1 Main UI - Base Portrait.webp");
        }
    };

    useEffect(() => {
        // Update the image URL when the component is mounted or resized
        updateImageUrl();

        // Add event listener to handle resizing
        window.addEventListener("resize", updateImageUrl);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener("resize", updateImageUrl);
        };
    }, []); // Empty dependency array to run this effect only once on mount


    // Define clickable areas with their grid positions
    const areas = [
        {
            id: 'town-hall',
            name: 'Town Hall',
            gridArea: 'col-start-4 -col-end-6 row-start-5 row-end-10 scr-m:col-start-8 scr-m:-col-end-11 scr-m:row-start-1 scr-m:row-end-7',
            // gridArea: 'col-start-10 col-end-2 row-start-1 row-end-4',
            lightImage: '/assets/abc/2 Lights- Town Hall86.webp', // Town Hall light overlay
            className: "border-1 border-red-400"
        },
        {
            id: 'barn',
            name: 'Barn',
            gridArea: 'scr-m:col-start-4 scr-m:col-end-13 scr-m:row-start-4 scr-m:row-end-10',
            lightImage: '/assets/abc/2 Lights - Apiary66.webp', // Barn light overlay
            className: "border-1 border-green-400"
        },
        {
            id: 'apiary',
            name: 'Apiary',
            gridArea: 'scr-m:-col-start-12 scr-m:-col-end-5 scr-m:row-start-1 scr-m:row-end-6',
            lightImage: '/assets/abc/2 Lights - School45.webp', // Apiary light overlay
            className: "border-1 border-pink-400"
        },
        {
            id: 'school',
            name: 'School',
            gridArea: 'scr-m:col-start-13 scr-m:-col-end-7 scr-m:row-start-6 scr-m:row-end-11',
            lightImage: '/assets/abc/2 Lights - Barn65.webp', // School light overlay
            className: "border-1 border-yellow-400"
        }
    ];

    return (
        <><div className="relative w-full">
            {/* Base banner image */}
            <div className="relative w-full h-[100vh] aspect-[3/1] ">
                <img
                    src={imageUrl}
                    alt="Village Banner"
                    className="w-full h-full object-cover" />

                {/* Grid overlay for hover areas */}
                <div className="absolute inset-0 grid grid-cols-16 grid-rows-16  scr-m:grid-cols-30 scr-m:grid-rows-10  border-x-4 border-black">
                    {areas.map((area) => (
                        <div
                            key={area.id}
                            className={`${area.gridArea} relative cursor-pointer ${area.className} border border-black`}
                            onMouseEnter={() => setHoveredArea(area.id)}
                            onMouseLeave={() => setHoveredArea(null)}
                        >
                            {/* Light effect overlay */}
                            <div
                                className={`absolute inset-0 transition-opacity duration-300 ${hoveredArea === area.id ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <img
                                    src={area.lightImage}
                                    alt={`${area.name} highlight`}
                                    className="w-full h-full object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div><Navbar /></>
    );
};

export default BannerGrid;