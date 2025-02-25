import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Typed from 'typed.js';

export default function Home() {
    // Create reference to store the DOM element containing the animation
    const [hoveredArea, setHoveredArea] = useState(null);
    const [aspectRatio, setAspectRatio] = useState(0);
    const [imageUrl, setImageUrl] = useState("/assets/abc/0 Main UI - Fallback.webp");
    const updateImageUrl = () => {
        const _aspectRatio = window.innerWidth / window.innerHeight
        setAspectRatio((prev) => ({ aspectRatio: _aspectRatio }));
        console.log({ innerWidth: window.innerWidth, innerHeight: window.innerHeight, aspectRatio: _aspectRatio })
        if (_aspectRatio >= 1.6) {
            setImageUrl("/assets/abc/0 Main UI - Fallback.webp");
        } else {
            setImageUrl("/assets/abc/0 Main UI - Fallback Portrait.webp");
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

    useEffect(() => {
        const options = {
            strings: [
                "<p>Hello and welcome to Berafarm!</p> <p>We’re your one-stop farm for smart DeFi farming on the Berachain.</p><br /> <p>Follow our socials for updates. We will be launching soon!</p>"
            ],
            typeSpeed: 50, // Speed of typing
            backSpeed: 30, // Speed of backspacing
            backDelay: 1000, // Delay before backspacing
            loop: true, // Loop the typing effect
            showCursor: false, // Ensure cursor is shown
            cursorChar: '|', // Change cursor character if needed
        };

        const typed = new Typed(".typed-text", options);

        return () => {
            typed.destroy(); // Clean up Typed.js on component unmount
        };
    }, []);

    return (
        <>
            {/* Base banner image */}
            <div className="relative w-full h-[100vh] bg-image-gradient">
                <img
                    src={imageUrl}
                    alt="Village Banner"
                    className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-image-gradient"></div>

                <Navbar />
                <div className="absolute left-0 bottom-0 mx-auto px-24 tab-s:px-44 tab-l:px-64 scr-s:px-76 scr-m:px-108 scr-l:px-160 my-24 mob-l:my-48">
                    <div className='flex justify-center items-center gap-32'>
                        <div className='h-full'>
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className='rounded-full transform scale-x-[-1] w-80 h-80 tab-s:w-[180px] tab-s:h-[180px] scr-s:w-[240px] scr-s:h-[240px] scr-m:w-[280px] scr-m:h-[280px] scr-l:w-[320px] scr-l:h-[320px]'
                            >
                                <source src="/public/assets/video/panda.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className='bg-level1 flex flex-col justify-start items-center rounded-[32px] scr-s:rounded-[72px] w-[240px] h-[112px] mob-l:w-[320px] mob-l:h-[112px] tab-s:w-[240px] tab-s:h-[172px]  tab-l:w-[400px] tab-l:h-[132px] scr-s:w-[480px] scr-s:h-[208px] scr-m:w-[560px] scr-m:h-[232px] scr-l:w-[1008px] scr-l:h-[400px] px-24 scr-s:px-48 py-16 scr-s:py-32'>
                            <p className="typed-text text-hi text-left w-full body-t tab-s:body-s scr-s:body-m scr-m:body-l" style={{ fontFamily: '"Shantell Sans", serif' }}></p>
                        </div>
                    </div>
                </div>
            </div ></>

    )
}
