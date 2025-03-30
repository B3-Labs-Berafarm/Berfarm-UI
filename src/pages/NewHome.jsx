import React, { useEffect, useState, useRef } from 'react'
import { motion } from "motion/react"
import './newHome.css'
import { useTheme } from '../contexts/ThemeContext';
import Footer from '../components/Footer';
import HomePageNavbar from '../components/HomeNavbar';
import { Link } from 'react-router-dom';
export default function NewHome() {
    const [imageUrl, setImageUrl] = useState("/assets/bg/wood.png")
    const { isDarkMode } = useTheme();
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);
    useEffect(() => {
        const url = !isDarkMode ? '/assets/bg/plaster.png' : "/assets/bg/wood.png";
        setImageUrl(url)
    }, [isDarkMode]);
    useEffect(() => {
        // Set container width to 80% of the screen width
        const handleResize = () => {
            setContainerWidth(window.innerWidth * 1);
        };

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize); // Update on resize

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const [bgImageUrl, setBgImageUrl] = useState("/assets/abc/0 Main UI - Fallback.webp");
    const updateImageUrl = () => {
        const _aspectRatio = window.innerWidth / window.innerHeight
        // setAspectRatio((prev) => ({ aspectRatio: _aspectRatio }));
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
        const scrollContainer = containerRef.current;
        const scrollAmount = scrollContainer.scrollWidth - containerWidth; // Scroll distance

        const scroll = () => {
            if (scrollContainer.scrollLeft >= scrollAmount) {
                scrollContainer.scrollLeft = 0; // Reset to the beginning
            } else {
                scrollContainer.scrollLeft += 1; // Scroll speed
            }
        };

        const interval = setInterval(scroll, 10); // Scroll every 10ms

        return () => clearInterval(interval);
    }, [containerWidth]);

    return (
        <div key="my-farms" className='flex flex-col bg-srf-base'>
            <div className='cover-img1 flex justify-end items-center'>
                <HomePageNavbar dapp={true} />
                <div className='container flex justify-start items-start my-[60px] scr-l:my-[120px] flex-col'>
                    <div className='text-acc font-body lbl-s font-weight-500 uppercase'>Built on Berachain</div>
                    <div className='text-acc d2 font-weight-800 font-headings mob-l:-mb-2 hidden mob-l:block'>Effortless yield</div>
                    <div className='text-acc d2 font-weight-800 font-headings mob-l:-mt-2 hidden mob-l:block'>farming for lazy beras</div>
                    <div className='text-acc d2 font-weight-800 font-headings block mob-l:hidden tracking-[-1.35px]'>Effortless yield farming for lazy beras</div>
                    <div className='text-hi body-l font-weight-400 font-body tab-l:max-w-[50%]'>BeraFarm transforms complex DeFi strategies into simplified, high-performing yield farms.</div>
                    <Link to={'https://www.berafarm.com/'} target='blank'>
                        <button className='bg-action-primary-default hover:bg-action-primary-hover border-[3px] border-low text-hi px-l h-[48px] shadow-level2 rounded-rnd-l mt-g4 backdrop:blur-[1.5px] font-body font-weight-500 cursor-pointer'>Start Farming</button>
                    </Link>
                </div>
            </div>
            {/* Use inline style for dynamic background image instead of class string interpolation */}
            <div className=" relative pb-[160px] bg-[lightgray] bg-repeat bg-[length:380px_250px] bg-[position:0%_0%]"
                style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className='pt-[160px] text-center'>
                    <motion.div initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.25,
                            ease: "easeInOut",
                            type: "tween",
                        }} className='text-acc font-body lbl-s font-weight-500 uppercase tracking-[3px]'>Multi-strategy Farms</motion.div>
                    <motion.div initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.25,
                            ease: "easeInOut",
                            type: "tween",
                        }} className='text-acc font-headings font-weight-800 d2 tracking-[-2.565px]'>Stack yields the BeraFarm way</motion.div>
                    <motion.div initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.25,
                            ease: "easeInOut",
                            type: "tween",
                        }} className='container px-[16px] tab-s:px-[24px] tab-l:px-[48px] scr-m:px-90 scr-l:px-[240px] grid grid-cols-1 tab-s:grid-cols-2 pt-[48px] gap-g3'>
                        <div className='flex flex-col justify-start items-start px-40 py-24 bg-[#FFC47B] rounded-rnd-m text-inv-hi'>
                            <CardInfo
                                svg={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M44 26L4 26L4 22L44 22L44 26Z" fill="currentColor" fillOpacity="0.87" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M44 20L4 20L4 16L44 16L44 20Z" fill="currentColor" fillOpacity="0.87" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M44 14L4 14L4 10L44 10L44 14Z" fill="currentColor" fillOpacity="0.87" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M44 32L4 32L4 28L44 28L44 32Z" fill="currentColor" fillOpacity="0.87" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M44 38L4 38L4 34L44 34L44 38Z" fill="currentColor" fillOpacity="0.87" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M44 44L4 44L4 40L44 40L44 44Z" fill="currentColor" fillOpacity="0.87" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M44 8L4 8L4 4L44 4L44 8Z" fill="currentColor" fillOpacity="0.87" />
                                    </svg>
                                }
                                heading={'Yield farms'}
                                description={'Perfect for beras who like to keep it simple!'}
                            />
                            <InfoText
                                svg={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 8C10.1046 8 11 7.10457 11 6C11 4.89543 10.1046 4 9 4C7.89543 4 7 4.89543 7 6C7 7.10457 7.89543 8 9 8ZM9 10C11.2091 10 13 8.20914 13 6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6C5 8.20914 6.79086 10 9 10Z" fill="currentColor" fill-opacity="0.84" />
                                        <path d="M4.02252 5.52219C2.8145 6.21055 2 7.51015 2 9C2 11.2091 3.79086 13 6 13C7.48985 13 8.78946 12.1855 9.47781 10.9775C9.32055 10.9924 9.16116 11 9 11C8.34298 11 7.71556 10.8733 7.14084 10.6429C6.81727 10.868 6.42404 11 6 11C4.89543 11 4 10.1046 4 9C4 8.57596 4.13198 8.18274 4.35709 7.85917C4.12674 7.28445 4 6.65702 4 6C4 5.83884 4.00761 5.67945 4.02252 5.52219Z" fill="currentColor" fill-opacity="0.84" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 19.5V14.5C11 13.8469 11.4174 13.2913 12 13.0854V12C12 10.3431 13.3431 9 15 9H17C18.6569 9 20 10.3431 20 12V13.0854C20.5826 13.2913 21 13.8469 21 14.5V19.5C21 20.3284 20.3284 21 19.5 21H12.5C11.6716 21 11 20.3284 11 19.5ZM13 15V19H19V15H13ZM15 11C14.4477 11 14 11.4477 14 12V13H18V12C18 11.4477 17.5523 11 17 11H15Z" fill="currentColor" fill-opacity="0.84" />
                                    </svg>
                                }
                                heading={'Enhanced base token returns'}
                                description={'Earn amplified yields in the same tokens you deposit, grow what you sow'}
                            />
                            <InfoText
                                svg={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.5959 4.01008L11.1465 3.56066C10.9512 3.3654 10.9512 3.04882 11.1465 2.85355L11.8536 2.14645C12.0488 1.95118 12.3654 1.95118 12.5607 2.14645L15.0607 4.64645C15.2559 4.84171 15.2559 5.15829 15.0607 5.35355L12.5607 7.85355C12.3654 8.04882 12.0488 8.04882 11.8536 7.85355L11.1465 7.14645C10.9512 6.95118 10.9512 6.6346 11.1465 6.43934L11.5706 6.01517C8.45732 6.23531 6 8.83071 6 12C6 13.4775 6.53296 14.8289 7.41881 15.8749C7.59727 16.0856 7.59907 16.401 7.40381 16.5962L6.6967 17.3033C6.50144 17.4986 6.18356 17.4996 6.00081 17.2926C4.75643 15.8829 4 14.029 4 12C4 7.71729 7.36537 4.22056 11.5959 4.01008Z" fill="currentColor" fill-opacity="0.84" />
                                        <path d="M12.4041 19.99L12.8535 20.4394C13.0488 20.6347 13.0488 20.9513 12.8535 21.1465L12.1464 21.8536C11.9512 22.0489 11.6346 22.0489 11.4393 21.8536L8.93933 19.3536C8.74406 19.1584 8.74406 18.8418 8.93933 18.6465L11.4393 16.1465C11.6346 15.9513 11.9512 15.9513 12.1464 16.1465L12.8535 16.8536C13.0488 17.0489 13.0488 17.3655 12.8535 17.5608L12.4294 17.9849C15.5427 17.7648 18 15.1694 18 12C18 10.5226 17.467 9.17115 16.5812 8.12517C16.4027 7.91444 16.4009 7.59912 16.5962 7.40385L17.3033 6.69675C17.4986 6.50148 17.8164 6.50049 17.9992 6.70751C19.2436 8.1172 20 9.97109 20 12C20 16.2828 16.6346 19.7795 12.4041 19.99Z" fill="currentColor" fill-opacity="0.84" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 12C17 13.6569 15.6569 15 14 15C12.3431 15 11 13.6569 11 12C11 10.3432 12.3431 9.00005 14 9.00005C15.6569 9.00005 17 10.3432 17 12ZM14 13C14.5523 13 15 12.5523 15 12C15 11.4478 14.5523 11 14 11C13.4477 11 13 11.4478 13 12C13 12.5523 13.4477 13 14 13Z" fill="currentColor" fill-opacity="0.84" />
                                        <path d="M11.1256 9.21836C10.778 9.07757 10.3981 9.00005 10 9.00005C8.34315 9.00005 7 10.3432 7 12C7 13.6569 8.34315 15 10 15C10.3981 15 10.778 14.9225 11.1256 14.7817C10.6496 14.29 10.2987 13.6765 10.1241 12.9924C10.0834 12.9975 10.042 13 10 13C9.44772 13 9 12.5523 9 12C9 11.4478 9.44772 11 10 11C10.042 11 10.0834 11.0026 10.1241 11.0077C10.2987 10.3236 10.6496 9.7101 11.1256 9.21836Z" fill="currentColor" fill-opacity="0.84" />
                                    </svg>
                                }
                                heading={'Adaptive growth strategy'}
                                description={'The APR adjusts automatically based on the relative size of this tranche for optimal returns'}
                            />
                            <InfoText
                                svg={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 9C10.9926 9 12 7.99264 12 6.75C12 5.50736 10.9926 4.5 9.75 4.5C8.50736 4.5 7.5 5.50736 7.5 6.75C7.5 7.99264 8.50736 9 9.75 9ZM9.75 10.5C11.8211 10.5 13.5 8.82107 13.5 6.75C13.5 4.67893 11.8211 3 9.75 3C7.67893 3 6 4.67893 6 6.75C6 8.82107 7.67893 10.5 9.75 10.5Z" fill="currentColor" fill-opacity="0.84" />
                                        <path d="M10.1975 11.228C10.0503 11.2426 9.90101 11.25 9.75 11.25C9.33713 11.25 8.93725 11.1944 8.55744 11.0903C8.14742 11.6423 7.49048 12 6.75 12C5.50736 12 4.5 10.9927 4.5 9.75001C4.5 9.00954 4.8577 8.35261 5.40973 7.94258C5.3056 7.56276 5.25 7.16288 5.25 6.75C5.25 6.59899 5.25744 6.44972 5.27197 6.30253C3.93582 6.87613 3 8.20379 3 9.75001C3 11.8211 4.67893 13.5 6.75 13.5C8.29623 13.5 9.62389 12.5642 10.1975 11.228Z" fill="currentColor" fill-opacity="0.84" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 10.5C13.7574 10.5 12.75 11.5074 12.75 12.75V13.5H12.375C12.1679 13.5 12 13.6679 12 13.875V19.125C12 19.3321 12.1679 19.5 12.375 19.5H19.125C19.3321 19.5 19.5 19.3321 19.5 19.125V13.875C19.5 13.6679 19.3321 13.5 19.125 13.5H18.75V12.75C18.75 11.5074 17.7426 10.5 16.5 10.5H15ZM18 15H13.5V18H18V15ZM14.25 13.5H17.25V12.75C17.25 12.3358 16.9142 12 16.5 12H15C14.5858 12 14.25 12.3358 14.25 12.75V13.5Z" fill="currentColor" fill-opacity="0.84" />
                                    </svg>
                                }
                                heading={'Strengthen Your Holdings'}
                                description={'Ideal for users looking to grow their core asset positions'}
                            />
                        </div>
                        <div className='flex flex-col justify-start items-start px-40 py-24 bg-[#F9E478] rounded-rnd-m text-inv-hi'>
                            <CardInfo
                                svg={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 40V28H26V40H22Z" fill="currentColor" fill-opacity="0.84" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28 40V12H32V40H28Z" fill="currentColor" fill-opacity="0.84" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34 40V16H38V40H34Z" fill="currentColor" fill-opacity="0.84" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 40V24H20V40H16Z" fill="currentColor" fill-opacity="0.84" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 40V20H14V40H10Z" fill="currentColor" fill-opacity="0.84" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 40V32H8V40H4Z" fill="currentColor" fill-opacity="0.84" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40 40V8H44V40H40Z" fill="currentColor" fill-opacity="0.84" />
                                    </svg>
                                }
                                heading={'Reward Farms'}
                                description={'For adventurous beras who love surprise treats'}
                            />
                            <InfoText
                                svg={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 8C10.1046 8 11 7.10457 11 6C11 4.89543 10.1046 4 9 4C7.89543 4 7 4.89543 7 6C7 7.10457 7.89543 8 9 8ZM9 10C11.2091 10 13 8.20914 13 6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6C5 8.20914 6.79086 10 9 10Z" fill="currentColor" fill-opacity="0.84" />
                                        <path d="M4.02253 5.52222C2.81452 6.21057 2 7.51018 2 9.00003C2 11.2092 3.79086 13 6 13C7.48985 13 8.78945 12.1855 9.47781 10.9775C9.32055 10.9924 9.16116 11 9 11C8.34298 11 7.71555 10.8733 7.14083 10.643C6.81726 10.8681 6.42404 11 6 11C4.89543 11 4 10.1046 4 9.00003C4 8.57598 4.13197 8.18276 4.35707 7.85919C4.12673 7.28448 4 6.65705 4 6.00003C4 5.83886 4.00763 5.67948 4.02253 5.52222Z" fill="currentColor" fill-opacity="0.84" />
                                        <path d="M19.0619 10.6829L19.3839 11.4343C19.4927 11.6881 19.7867 11.8057 20.0405 11.6969L20.9596 11.303C21.2134 11.1942 21.331 10.9003 21.2222 10.6465L20.0296 7.8637C19.7354 7.17727 18.9089 6.90027 18.2605 7.2708L15.438 8.88365C15.1983 9.02065 15.115 9.32608 15.252 9.56584L15.7481 10.4341C15.8851 10.6738 16.1905 10.7571 16.4303 10.6201L17.091 10.2426L15.7046 13.9396L14.7708 12.6945C13.8787 11.5051 12.0468 11.6702 11.3819 13L9.82913 16.1056L8.94509 14.9269C7.9771 13.6362 5.9579 13.9639 5.44773 15.4944L4.20938 19.2095C4.12206 19.4715 4.26364 19.7546 4.52561 19.8419L5.47429 20.1582C5.73627 20.2455 6.01943 20.1039 6.10675 19.8419L7.34509 16.1269L8.22913 17.3056C9.12119 18.495 10.9531 18.3299 11.618 17L13.1708 13.8945L14.1046 15.1396C15.0525 16.4034 17.0226 16.1211 17.5773 14.6419L19.0619 10.6829Z" fill="currentColor" fill-opacity="0.84" />
                                    </svg>
                                }
                                heading={'Ecosystem Token Diversification'}
                                description={'Earn diverse rewards across multiple Berachain tokens, including liquid $f-BGT'}
                            />
                            <InfoText
                                svg={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M13 10.5858L13.9393 9.64645C14.1346 9.45118 14.4512 9.45118 14.6464 9.64645L15.3536 10.3536C15.5488 10.5488 15.5488 10.8654 15.3536 11.0607L12.3536 14.0607C12.1583 14.2559 11.8417 14.2559 11.6464 14.0607L8.64645 11.0607C8.45118 10.8654 8.45118 10.5488 8.64645 10.3536L9.35355 9.64645C9.54882 9.45118 9.8654 9.45118 10.0607 9.64645L11 10.5858V8H5.5C4.67157 8 4 7.32843 4 6.5V4.5C4 4.22386 4.22386 4 4.5 4H5.5C5.77614 4 6 4.22386 6 4.5V6H11V3.5C11 3.22386 11.2239 3 11.5 3H12.5C12.7761 3 13 3.22386 13 3.5V6H18V4.5C18 4.22386 18.2239 4 18.5 4H19.5C19.7761 4 20 4.22386 20 4.5V6.5C20 7.32843 19.3284 8 18.5 8H13V10.5858Z" fill="currentColor" fill-opacity="0.84" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 18C17 19.6569 15.6569 21 14 21C12.3431 21 11 19.6569 11 18C11 16.3431 12.3431 15 14 15C15.6569 15 17 16.3431 17 18ZM14 19C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17C13.4477 17 13 17.4477 13 18C13 18.5523 13.4477 19 14 19Z" fill="currentColor" fill-opacity="0.84" />
                                        <path d="M11.1256 15.2183C10.778 15.0775 10.3981 15 10 15C8.34315 15 7 16.3431 7 18C7 19.6569 8.34315 21 10 21C10.3981 21 10.778 20.9225 11.1256 20.7817C10.6496 20.2899 10.2987 19.6764 10.1241 18.9924C10.0834 18.9974 10.042 19 10 19C9.44772 19 9 18.5523 9 18C9 17.4477 9.44772 17 10 17C10.042 17 10.0834 17.0026 10.1241 17.0076C10.2987 16.3236 10.6496 15.7101 11.1256 15.2183Z" fill="currentColor" fill-opacity="0.84" />
                                    </svg>
                                }
                                heading={'Amplified Reward Multipliers'}
                                description={'Access exponentially higher returns through tranche-based multipliers that supercharge standard APRs'}
                            />
                            <InfoText
                                svg={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 13L2 13L2 11L22 11L22 13Z" fill="currentColor" fill-opacity="0.84" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 10L2 10L2 8L22 8L22 10Z" fill="currentColor" fill-opacity="0.84" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 7L2 7L2 5L22 5L22 7Z" fill="currentColor" fill-opacity="0.84" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 16L2 16L2 14L22 14L22 16Z" fill="currentColor" fill-opacity="0.84" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 19L2 19L2 17L22 17L22 19Z" fill="currentColor" fill-opacity="0.84" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 22L2 22L2 20L22 20L22 22Z" fill="currentColor" fill-opacity="0.84" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 4L2 4L2 2L22 2L22 4Z" fill="currentColor" fill-opacity="0.84" />
                                    </svg>
                                }
                                heading={'Governance Power Unlocked'}
                                description={'Participate in governance via liquid $f-BGT while maintaining complete flexibility.'}
                            />
                        </div>
                    </motion.div>
                </div>
                {/*  */}
                <div className='pt-[160px] text-center'>
                    <motion.div initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.25,
                            ease: "easeInOut",
                            type: "tween",
                        }} className='text-acc font-headings font-weight-800 d2 tracking-[-2.565px] -mb-16'>Maximise Yield Across</motion.div>
                    <motion.div initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.25,
                            ease: "easeInOut",
                            type: "tween",
                        }} className='text-acc font-headings font-weight-800 d2 tracking-[-2.565px] -mt-16'>Multiple Assets</motion.div>
                    <div className='pt-[48px] flex gap-g4 w-full'>
                        <div className="scroll-container  gap-g2" ref={containerRef} style={{ width: containerWidth }}>
                            {CARD_DETAILS.map((item, index) => (
                                <><div key={index} className='relative flex flex-col bg-srf-l2 px-g4 py-g3 w-[280px] flex-shrink-0  border border-med shadow-level2 backdrop:blur-[3px] rounded-[16px]'>
                                    <div className='flex justify-start items-center gap-g1 pb-g2'>
                                        <img src='/assets/Bera.ico' width={32} height={32} alt='vault image' className='rounded-full' />
                                        <p className='text-hi font-titles font-weight-800 tracking-[-0.63px]'>Assest</p>
                                    </div>
                                    {item.vault.map((info) => (
                                        <div className='flex justify-between items-center pt-g0h'>
                                            <div className='text-med font-body body-m font-weight-400 tracking-[-0.15px]'>{info.label}</div>
                                            <div className='text-acc font-body body-m font-weight-700 tracking-[-0.15px]'>{info.value}</div>
                                        </div>
                                    ))}
                                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                                        <div className="bg-action-primary-default text-inv-hi lbl-l font-body font-weight-500 py-4 px-6 absolute -rotate-15 w-[190%] text-center"
                                            style={{ top: '35%', left: '-45%', transform: 'rotate(-15deg)' }}>
                                            Launching Soon!
                                        </div>
                                    </div>
                                </div>

                                </>
                            ))}
                        </div>

                    </div>
                </div>
                <div className='pt-[160px] text-center'>
                    <motion.div initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.25,
                            ease: "easeInOut",
                            type: "tween",
                        }} className='text-acc font-headings font-weight-800 d2 tracking-[-2.565px]'>The Berafarm Advantage</motion.div>
                    <div className='container px-[16px] tab-s:px-[24px] tab-l:px-[48px] scr-m:px-90 scr-l:px-[240px] grid grid-cols-1 tab-s:grid-cols-2 pt-[48px] gap-g3'>

                        {BERAFARM_ADVANTAGES.map(({ imageUrl, heading, description }, index) => (
                            <motion.div initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.25,
                                    ease: "easeInOut",
                                    type: "tween",
                                }} key={index} className='flex flex-col justify-center w-full gap-g2'>
                                <div className="flex justify-center items-center w-full mx-auto">
                                    <img src={imageUrl} className="w-[100%] scr-s:w-[80%] max-h-[320px]" />
                                </div>
                                <div className='bg-srf-base border border-med rounded-8 p-16 text-center'>
                                    <div className='text-hi font-titles title-s font-weight-800 tracking-[-0.54px]'>{heading}</div>
                                    <div className='text-hi font-body body-s font-weight-400 tracking-[0.06px]'>{description}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

const InfoText = ({ svg, heading, description }) => {
    return (
        <div className='flex justify-start items-start pt-g3 gap-g1'>
            <div>
                {svg}
            </div>
            <div className='text-left'>
                <div className='font-titles title-s font-weight-800 tracking-[-0.54px]'>{heading}</div>
                <div className='font-body body-xs font-weight-400 tracking-[0.105px]'>{description}</div>
            </div>
        </div>
    )
}
const CardInfo = ({ svg, heading, description }) => {
    return (
        <>
            <div>
                {svg}
            </div>
            <div className='title-l text-inv-hi font-titles font-weight-800 py-g1 tracking-[-0.72px]'>
                {heading}
            </div>
            <div className='font-body tracking-[-0.15px] body-m'>
                {description}
            </div>
        </>
    )
}

const BERAFARM_ADVANTAGES = [
    {
        imageUrl: '/assets/panda/1.jpeg',
        heading: 'Simplified Yield Optimization',
        description: 'BeraFarm consolidates multiple high-performing strategies into unified farms with single-click entry/exit, eliminating the complexity of managing separate positions.'
    },
    {
        imageUrl: '/assets/panda/2.jpeg',
        heading: 'Active Asset Management',
        description: 'The platform continuously monitors, re-balances, and reinvests yields to maximize returns without requiring constant management from users.'
    },
    {
        imageUrl: '/assets/panda/3.jpeg',
        heading: 'Diversification',
        description: 'Spread your assets across a variety of DeFi strategies to reduce risk and optimise returns.'
    },
    {
        imageUrl: '/assets/panda/4.jpeg',
        heading: 'Unlocking $BGT\'s Full Potential',
        description: 'BeraFarm converts restricted $BGT into liquid $f-BGT, maintaining governance utility while enabling broader DeFi applications.'
    },
]

const CARD_DETAILS = [
    {
        imageUrl: '/assets/Bera.ico',
        title: 'Asset',
        vault: [
            { label: 'Fixed Yield', value: '69.50%' },
            { label: 'Rewards Yield', value: '30.50%' },
            { label: 'Fixed Yield', value: '23M' }
        ]
    },
    {
        imageUrl: '/assets/Bera.ico',
        title: 'Asset',
        vault: [
            { label: 'Fixed Yield', value: '69.50%' },
            { label: 'Rewards Yield', value: '30.50%' },
            { label: 'Fixed Yield', value: '23M' }
        ]
    },
    {
        imageUrl: '/assets/Bera.ico',
        title: 'Asset',
        vault: [
            { label: 'Fixed Yield', value: '69.50%' },
            { label: 'Rewards Yield', value: '30.50%' },
            { label: 'Fixed Yield', value: '23M' }
        ]
    },
    {
        imageUrl: '/assets/Bera.ico',
        title: 'Asset',
        vault: [
            { label: 'Fixed Yield', value: '69.50%' },
            { label: 'Rewards Yield', value: '30.50%' },
            { label: 'Fixed Yield', value: '23M' }
        ]
    },
    {
        imageUrl: '/assets/Bera.ico',
        title: 'Asset',
        vault: [
            { label: 'Fixed Yield', value: '69.50%' },
            { label: 'Rewards Yield', value: '30.50%' },
            { label: 'Fixed Yield', value: '23M' }
        ]
    },
    {
        imageUrl: '/assets/Bera.ico',
        title: 'Asset',
        vault: [
            { label: 'Fixed Yield', value: '69.50%' },
            { label: 'Rewards Yield', value: '30.50%' },
            { label: 'Fixed Yield', value: '23M' }
        ]
    },
    {
        imageUrl: '/assets/Bera.ico',
        title: 'Asset',
        vault: [
            { label: 'Fixed Yield', value: '69.50%' },
            { label: 'Rewards Yield', value: '30.50%' },
            { label: 'Fixed Yield', value: '23M' }
        ]
    },
    {
        imageUrl: '/assets/Bera.ico',
        title: 'Asset',
        vault: [
            { label: 'Fixed Yield', value: '69.50%' },
            { label: 'Rewards Yield', value: '30.50%' },
            { label: 'Fixed Yield', value: '23M' }
        ]
    }
]