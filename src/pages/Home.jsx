import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Typed from 'typed.js';

const IconWithBackground = ({ children, link }) => {
    return (
        <div className="flex justify-center items-center bg-action-primary-default hover:bg-action-primary-hover rounded-full shadow-level1 backdrop-blur-[1.5px]- cursor-pointer h-[36px] w-[36px] tab-s:h-40 tab-s:w-40">
            <a href={link} target='blank'>
                {children}
            </a>
        </div>
    );
};


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
                "<p>Henlo Beras and furthermore Ooga Booga!</p><p>Welcome to Berafarm, a magical farm where beras earn superior yields!</p><p>Beta launching soon! Keep your paws ready and eyes on our socials for the announcement.</p>"
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
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-image-gradient"></div>

                <Navbar />
                <div className="absolute left-0 bottom-0 mx-auto px-24 tab-s:px-44 tab-l:px-64 scr-s:px-76 scr-m:px-76 scr-l:px-76 my-24 mob-l:my-48">
                    <div className='flex justify-center tab-s:items-end gap-default tab-s:gap-32 flex-col-reverse tab-s:flex-row'>
                        <div className='h-full'>
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className='rounded-full object-cover transform w-80 h-80 tab-s:w-[160px] tab-s:h-[160px] tab-l:w-[216px] tab-l:h-[216px] scr-s:w-[264px] scr-s:h-[264px] scr-m:w-[288px] scr-m:h-[288px] scr-l:w-[376px] scr-l:h-[376px]'
                                loading="lazy"
                            >
                                <source src="/assets/panda/Talking Bera RF40 HD.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className='bg-level1 flex flex-col justify-start items-center rounded-[32px] scr-s:rounded-[48px] w-[300px] h-[240px] mob-l:w-[352px] mob-l:h-[232px] tab-s:w-[320px] tab-s:h-[316px]  tab-l:w-[450px] tab-l:h-[220px] scr-s:w-[648px] scr-s:h-[200px] scr-m:w-[600px] scr-m:h-[312px] scr-l:w-[784px] scr-l:h-[280px] px-24 scr-s:px-48 py-24 scr-s:py-32 scr-l:p-40'>
                            <p className="typed-text text-hi text-left w-full body-dg font-body"></p>
                        </div>
                    </div>
                </div>
                <div className="absolute right-[24px] bottom-[36px] tab-s:right-[76px] tab-s:bottom-[60px]">
                    <div className='flex items-center gap-g1'>
                        <IconWithBackground link="https://x.com/realBeraFarm">
                            <img src='./assets/x.png' className="w-24 h-24" />
                        </IconWithBackground>
                        <IconWithBackground link="https://t.me/+VKpnp8CAsPFhOGFk">
                            <img src='./assets/telegram.png' className="w-[20px] h-[18px]" />
                        </IconWithBackground>
                        <IconWithBackground link="https://discord.gg/4MaTYru9">
                            <img src='./assets/discord.png' className="w-24 h-24" />
                        </IconWithBackground>
                    </div>
                </div>
            </div ></>

    )
}
