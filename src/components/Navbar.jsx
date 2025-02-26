
import React, { useState, useEffect } from 'react';

import { Menu, X } from 'lucide-react';

function NavbarLargerScreen() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Check if scrolled from top
            if (currentScrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Check scroll direction after half the viewport height
            if (currentScrollY > window.innerHeight / 2) {
                // Hide navbar when scrolling down, show when scrolling up
                setIsVisible(currentScrollY < lastScrollY);
            } else {
                // Always show navbar in the first half of the viewport
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`hidden tab-s:block fixed top-0 left-0 w-full z-10 transition-all duration-300 transform
                ${isScrolled ? 'bg-srf-base shadow-lg' : 'bg-transparent'}
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className="mx-auto px-24 tab-s:px-44 tab-l:px-64 scr-s:px-76 scr-m:px-108 scr-l:px-160 py-[40px]">
                <div className="flex justify-between items-center text-brand-main">
                    <a href="/">
                        <svg width="312" height="60" viewBox="0 0 312 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.9664 48.5233C35.1031 55.0045 27.4673 58.8295 21.5285 59.8389C20.574 59.9983 19.5135 59.9983 18.2939 59.9983C15.2184 59.9983 11.6657 59.5733 9.38556 58.7233C5.88586 57.4483 3.34062 56.1733 3.34062 56.1733C4.08298 47.6732 4.02996 33.6482 3.87088 25.5732C3.76483 22.5981 3.34062 17.3919 3.12852 15.1075C2.38616 15.0012 1.16657 15.0012 0 15.1075C0 12.2387 0.159078 5.65119 1.37867 0.498038C9.33253 -0.351966 18.7181 -0.511348 26.3538 3.31367C29.0581 4.58867 31.5503 6.18243 33.8835 8.25432C36.0045 10.1137 38.0195 13.3543 38.4437 16.3294C39.133 19.7294 37.8604 23.1294 36.1636 25.8388C35.3152 27.22 34.4667 28.6544 33.3532 29.8232C32.2397 31.0982 31.9215 31.3638 30.808 32.4794C34.0425 34.0732 35.6333 35.4544 37.7013 37.8982C38.4437 38.9076 39.08 41.1388 39.2391 43.1576C39.2391 45.1232 38.7088 46.8764 38.0725 48.5233H37.9664ZM22.695 41.5107C21.4224 40.9795 18.7711 40.1295 16.5971 40.767L16.438 46.8232C16.7561 46.9295 17.4455 47.0889 17.6046 47.0889C18.3469 47.2482 19.0363 47.3545 19.8316 47.3545C20.627 47.3545 21.2633 47.1951 21.9527 46.9295C22.9071 46.6639 23.6495 46.2389 24.3388 45.8139C26.3538 44.3795 24.3388 42.1482 22.7481 41.5638L22.695 41.5107ZM16.491 14.5762C16.491 16.8075 16.6501 22.0669 16.6501 22.6513C16.6501 23.3419 16.6501 26.0513 16.7561 27.4857C17.9227 27.3794 19.6195 26.9013 20.68 26.2107C22.642 24.9356 26.725 21.2169 24.3919 18.4544C23.4374 17.2856 21.4224 15.745 20.3089 15.2137C18.506 14.47 16.491 14.5231 16.491 14.5231V14.5762Z" />
                            <path d="M54.4051 58.614C51.9659 58.8796 50.0039 59.039 45.4968 59.5702V43.8452C45.4968 40.7108 45.3907 37.3639 45.3377 34.2295C45.3377 31.9451 45.3377 28.9701 45.4437 26.7389L41.891 27.4295C41.6259 24.3482 41.5729 21.7451 41.5729 19.6732C41.5729 15.1044 41.9971 12.9794 41.9971 12.9794C44.8074 12.2357 52.4431 10.8544 54.8293 10.4294C57.2154 10.0044 60.2379 9.31379 63.2073 8.88879C64.2148 8.72941 69.8885 7.93252 70.843 7.87939C71.3732 9.84503 72.4338 15.6357 72.3807 21.5857C71.0021 21.7451 59.4955 23.7107 58.7001 23.9764V29.8201C63.3664 29.0764 65.8056 28.6514 69.6234 27.8545C70.0476 29.3951 70.896 34.1233 71.1611 38.5858C68.9341 39.0108 65.1162 39.967 63.3664 40.3921C62.1998 40.6577 59.7076 41.0827 58.2759 41.667C58.2759 43.2077 58.382 43.8983 58.2759 45.2264C60.3969 45.1202 62.4119 44.6421 64.4799 44.2171L72.2747 42.6233C72.858 44.2171 74.1306 49.7421 74.5548 56.1171C66.3888 57.6577 61.7226 57.7109 54.4581 58.6671L54.4051 58.614Z" />
                            <path d="M114.166 51.234C111.197 55.8028 108.334 57.2903 104.304 59.9997C102.289 58.1934 101.069 56.8653 99.5314 55.0059C97.5695 52.6153 96.1378 50.5965 94.1228 47.1965C93.5925 46.2402 93.1683 45.1777 92.6911 44.1152C92.1078 44.2746 91.8427 44.3808 91.3125 44.6465C91.0473 47.5152 91.3124 48.7371 91.4185 51.8715C91.5245 53.6778 91.7366 56.2278 91.9488 57.1309C87.7067 58.1403 82.2451 58.5122 80.071 58.5653C79.8059 56.9715 79.4877 50.7559 79.4877 49.2152C79.4877 41.6715 79.2226 34.1808 79.4877 26.2651C79.5938 25.7339 79.6468 22.5995 79.7529 22.1213C78.7984 22.2276 77.897 22.2276 76.5183 22.2276C76.6774 16.4369 76.9425 11.1775 77.3667 8.94629C78.6393 8.78691 80.071 8.68066 81.5027 8.68066C85.5857 8.68066 90.0929 9.21192 92.6381 9.3713C96.615 9.69005 99.4254 10.6463 102.501 11.8151C107.061 13.7807 108.705 14.9494 111.25 17.2338C113.212 19.1995 114.06 20.5276 114.326 23.1839C114.909 29.2933 108.281 35.2433 103.614 38.2183C104.039 39.0683 104.463 40.0246 104.993 40.8746C106.69 43.3183 108.652 45.6558 110.826 47.834L114.219 51.234H114.166ZM91.4185 22.3339C91.3124 23.9276 91.5246 29.5589 91.5776 31.1526C92.5851 30.887 94.1228 30.4089 95.5015 29.7183C96.8801 28.8683 98.3118 27.912 99.4254 26.8495C102.978 23.3432 93.6456 21.9089 91.4715 22.3339H91.4185Z" />
                            <path d="M124.188 15.5406L124.931 11.45C124.931 11.45 137.975 9.21872 143.861 9.32497C143.861 9.32497 144.603 11.6094 144.815 12.725C145.133 14.425 145.505 16.125 145.77 17.2938C146.3 19.8438 146.777 21.8625 147.36 24.5188C148.951 32.0626 149.163 33.1251 150.065 36.6845C150.648 39.3408 151.603 42.5283 152.292 45.1845C152.716 46.9908 154.519 51.6658 154.943 53.2596C150.118 55.969 143.755 57.6159 141.634 58.094C140.891 55.8096 140.255 52.7283 139.407 50.6033C136.702 51.1877 133.998 51.5596 131.241 52.1971C130.498 52.3565 130.074 52.3565 129.279 52.6221C128.695 54.8534 127.847 57.4034 127.476 58.8377C122.385 58.519 115.863 57.4034 113.901 56.8721C120.105 40.722 124.188 15.4344 124.188 15.4344V15.5406ZM137.392 41.9439C136.437 37.6939 135.43 30.1501 134.528 26.1126C133.839 28.5032 133.15 34.9314 132.725 37.0032C132.407 38.5439 131.983 41.5189 131.559 43.2189L137.392 41.9439Z" />
                            <path d="M188.137 38.1082C183.471 39.8082 178.38 39.9145 173.767 41.1895C173.767 45.1208 173.926 48.9458 173.873 52.9301C173.767 54.3645 173.979 55.7989 173.979 57.2864C169.843 57.9771 165.071 58.1364 161.147 58.1364C160.988 55.427 160.988 52.5051 160.988 49.7958C160.829 45.9707 161.677 29.2363 161.518 26.2613C161.412 23.9769 161.624 21.5863 161.783 19.355C160.776 19.6207 159.768 19.9394 158.708 20.205C158.177 17.8144 156.905 10.855 156.481 6.71126C160.882 5.43626 165.23 4.32061 169.737 3.31124C171.593 2.88623 173.449 2.62062 175.358 2.30187C179.282 1.61124 183.418 1.02686 187.395 0.76123C187.978 2.99249 189.091 8.94251 189.516 14.0425C185.38 14.7332 181.562 15.3175 177.532 15.6363C176.577 15.7425 175.729 15.9019 174.88 16.0613C174.774 16.805 174.615 17.4957 174.615 18.3457C174.35 20.7894 174.191 23.4457 174.032 25.9957C173.926 26.7394 173.926 27.5363 173.926 28.2801C174.934 28.1207 175.782 27.9613 176.736 27.6957C178.963 27.1644 181.138 26.6863 183.259 26.3144C184.107 26.1551 185.91 25.9957 186.811 25.8894C187.235 28.4394 187.978 32.6895 188.084 38.1082H188.137Z" />
                            <path d="M195.874 15.5406L196.616 11.45C196.616 11.45 209.661 9.21872 215.546 9.32497C215.546 9.32497 216.289 11.6094 216.501 12.725C216.819 14.425 217.19 16.125 217.455 17.2938C217.986 19.8438 218.463 21.8625 219.046 24.5188C220.637 32.0626 220.849 33.1251 221.75 36.6845C222.334 39.3408 223.288 42.5283 223.978 45.1845C224.402 46.9908 226.205 51.6658 226.629 53.2596C221.803 55.969 215.44 57.6159 213.319 58.094C212.577 55.8096 211.941 52.7283 211.092 50.6033C208.388 51.1877 205.684 51.5596 202.926 52.1971C202.184 52.3565 201.76 52.3565 200.964 52.6221C200.381 54.8534 199.533 57.4034 199.162 58.8377C194.071 58.519 187.549 57.4034 185.587 56.8721C191.791 40.722 195.874 15.4344 195.874 15.4344V15.5406ZM209.077 41.9439C208.123 37.6939 207.115 30.1501 206.214 26.1126C205.525 28.5032 204.835 34.9314 204.411 37.0032C204.093 38.5439 203.669 41.5189 203.245 43.2189L209.077 41.9439Z" />
                            <path d="M263.111 51.234C260.142 55.8028 257.278 57.2903 253.248 59.9997C251.233 58.1934 250.014 56.8653 248.476 55.0059C246.514 52.6153 245.082 50.5965 243.067 47.1965C242.537 46.2402 242.113 45.1777 241.636 44.1152C241.052 44.2746 240.787 44.3808 240.257 44.6465C239.992 47.5152 240.257 48.7371 240.363 51.8715C240.469 53.6778 240.681 56.2278 240.893 57.1309C236.651 58.1403 231.19 58.5122 229.015 58.5653C228.75 56.9715 228.432 50.7559 228.432 49.2152C228.432 41.6715 228.167 34.1808 228.432 26.2651C228.538 25.7339 228.591 22.5995 228.697 22.1213C227.743 22.2276 226.841 22.2276 225.463 22.2276C225.622 16.4369 225.887 11.1775 226.311 8.94629C227.584 8.78691 229.016 8.68066 230.447 8.68066C234.53 8.68066 239.037 9.21192 241.583 9.3713C245.559 9.69005 248.37 10.6463 251.445 11.8151C256.006 13.7807 257.649 14.9494 260.195 17.2338C262.156 19.1995 263.005 20.5276 263.27 23.1839C263.853 29.2933 257.225 35.2433 252.559 38.2183C252.983 39.0683 253.407 40.0246 253.938 40.8746C255.634 43.3183 257.596 45.6558 259.77 47.834L263.164 51.234H263.111ZM240.363 22.3339C240.257 23.9276 240.469 29.5589 240.522 31.1526C241.53 30.887 243.067 30.4089 244.446 29.7183C245.825 28.8683 247.256 27.912 248.37 26.8495C251.923 23.3432 242.59 21.9089 240.416 22.3339H240.363Z" />
                            <path d="M312 54.2092C307.227 56.4935 301.501 57.0248 299.38 57.3435C298.425 49.7998 297.418 42.3091 296.092 34.6591C294.978 40.8747 295.084 45.3904 294.978 52.9341C291.001 53.5185 284.691 54.2092 282.411 54.3154C281.881 51.4998 280.874 46.2404 280.714 45.2841C280.396 42.9997 279.601 39.4935 278.593 35.6153C278.434 43.1591 277.427 50.9154 277.639 58.831C272.655 58.7248 266.185 58.1404 264.33 57.8748C264.436 55.1654 265.284 44.6997 265.602 42.4154C266.291 40.131 267.14 15.3746 267.564 13.3559C274.351 10.9121 280.29 11.5496 283.26 11.2309C284.267 15.9059 285.646 22.8122 286.918 27.0622C287.184 25.8934 287.926 22.3872 288.297 21.2184C289.146 17.9247 289.835 13.9934 290.418 10.3278C292.645 10.0621 296.675 9.58398 300.758 9.58398C302.614 9.58398 304.47 9.74337 306.167 10.009C306.485 11.5496 307.174 18.2434 307.28 19.8903C307.439 22.8653 307.545 25.7341 308.023 28.8153C308.553 32.3747 309.189 36.0403 309.72 39.706C310.038 41.6716 311.522 52.9873 312 54.3154V54.2092Z" />
                        </svg>
                    </a>
                    <div className="space-x-6">
                        <button className='bg-[#AAAE8F] px-[32px] rounded-[24px] h-[48px] m-w-[253px] text-hi font-body font-500 text-ft5 scr-l:text-ft6 cursor-not-allowed'>Connect wallet</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}





function NavbarMobile() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsScrolled(currentScrollY > 0);
            setIsVisible(currentScrollY < lastScrollY || currentScrollY < window.innerHeight / 2);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav
            className={`tab-s:hidden fixed w-full z-10 transition-all duration-300 transform
                ${isScrolled ? 'bg-srf-base shadow-lg' : 'bg-transparent'}
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}
                top-0`}
        >
            <div className="mx-auto px-6 py-4 flex justify-between items-center text-brand-main">
                <a href="/">
                    <svg width="84" height="16" viewBox="0 0 312 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.9664 48.5233C35.1031 55.0045 27.4673 58.8295 21.5285 59.8389C20.574 59.9983 19.5135 59.9983 18.2939 59.9983C15.2184 59.9983 11.6657 59.5733 9.38556 58.7233C5.88586 57.4483 3.34062 56.1733 3.34062 56.1733C4.08298 47.6732 4.02996 33.6482 3.87088 25.5732C3.76483 22.5981 3.34062 17.3919 3.12852 15.1075C2.38616 15.0012 1.16657 15.0012 0 15.1075C0 12.2387 0.159078 5.65119 1.37867 0.498038C9.33253 -0.351966 18.7181 -0.511348 26.3538 3.31367C29.0581 4.58867 31.5503 6.18243 33.8835 8.25432C36.0045 10.1137 38.0195 13.3543 38.4437 16.3294C39.133 19.7294 37.8604 23.1294 36.1636 25.8388C35.3152 27.22 34.4667 28.6544 33.3532 29.8232C32.2397 31.0982 31.9215 31.3638 30.808 32.4794C34.0425 34.0732 35.6333 35.4544 37.7013 37.8982C38.4437 38.9076 39.08 41.1388 39.2391 43.1576C39.2391 45.1232 38.7088 46.8764 38.0725 48.5233H37.9664ZM22.695 41.5107C21.4224 40.9795 18.7711 40.1295 16.5971 40.767L16.438 46.8232C16.7561 46.9295 17.4455 47.0889 17.6046 47.0889C18.3469 47.2482 19.0363 47.3545 19.8316 47.3545C20.627 47.3545 21.2633 47.1951 21.9527 46.9295C22.9071 46.6639 23.6495 46.2389 24.3388 45.8139C26.3538 44.3795 24.3388 42.1482 22.7481 41.5638L22.695 41.5107ZM16.491 14.5762C16.491 16.8075 16.6501 22.0669 16.6501 22.6513C16.6501 23.3419 16.6501 26.0513 16.7561 27.4857C17.9227 27.3794 19.6195 26.9013 20.68 26.2107C22.642 24.9356 26.725 21.2169 24.3919 18.4544C23.4374 17.2856 21.4224 15.745 20.3089 15.2137C18.506 14.47 16.491 14.5231 16.491 14.5231V14.5762Z" />
                        <path d="M54.4051 58.614C51.9659 58.8796 50.0039 59.039 45.4968 59.5702V43.8452C45.4968 40.7108 45.3907 37.3639 45.3377 34.2295C45.3377 31.9451 45.3377 28.9701 45.4437 26.7389L41.891 27.4295C41.6259 24.3482 41.5729 21.7451 41.5729 19.6732C41.5729 15.1044 41.9971 12.9794 41.9971 12.9794C44.8074 12.2357 52.4431 10.8544 54.8293 10.4294C57.2154 10.0044 60.2379 9.31379 63.2073 8.88879C64.2148 8.72941 69.8885 7.93252 70.843 7.87939C71.3732 9.84503 72.4338 15.6357 72.3807 21.5857C71.0021 21.7451 59.4955 23.7107 58.7001 23.9764V29.8201C63.3664 29.0764 65.8056 28.6514 69.6234 27.8545C70.0476 29.3951 70.896 34.1233 71.1611 38.5858C68.9341 39.0108 65.1162 39.967 63.3664 40.3921C62.1998 40.6577 59.7076 41.0827 58.2759 41.667C58.2759 43.2077 58.382 43.8983 58.2759 45.2264C60.3969 45.1202 62.4119 44.6421 64.4799 44.2171L72.2747 42.6233C72.858 44.2171 74.1306 49.7421 74.5548 56.1171C66.3888 57.6577 61.7226 57.7109 54.4581 58.6671L54.4051 58.614Z" />
                        <path d="M114.166 51.234C111.197 55.8028 108.334 57.2903 104.304 59.9997C102.289 58.1934 101.069 56.8653 99.5314 55.0059C97.5695 52.6153 96.1378 50.5965 94.1228 47.1965C93.5925 46.2402 93.1683 45.1777 92.6911 44.1152C92.1078 44.2746 91.8427 44.3808 91.3125 44.6465C91.0473 47.5152 91.3124 48.7371 91.4185 51.8715C91.5245 53.6778 91.7366 56.2278 91.9488 57.1309C87.7067 58.1403 82.2451 58.5122 80.071 58.5653C79.8059 56.9715 79.4877 50.7559 79.4877 49.2152C79.4877 41.6715 79.2226 34.1808 79.4877 26.2651C79.5938 25.7339 79.6468 22.5995 79.7529 22.1213C78.7984 22.2276 77.897 22.2276 76.5183 22.2276C76.6774 16.4369 76.9425 11.1775 77.3667 8.94629C78.6393 8.78691 80.071 8.68066 81.5027 8.68066C85.5857 8.68066 90.0929 9.21192 92.6381 9.3713C96.615 9.69005 99.4254 10.6463 102.501 11.8151C107.061 13.7807 108.705 14.9494 111.25 17.2338C113.212 19.1995 114.06 20.5276 114.326 23.1839C114.909 29.2933 108.281 35.2433 103.614 38.2183C104.039 39.0683 104.463 40.0246 104.993 40.8746C106.69 43.3183 108.652 45.6558 110.826 47.834L114.219 51.234H114.166ZM91.4185 22.3339C91.3124 23.9276 91.5246 29.5589 91.5776 31.1526C92.5851 30.887 94.1228 30.4089 95.5015 29.7183C96.8801 28.8683 98.3118 27.912 99.4254 26.8495C102.978 23.3432 93.6456 21.9089 91.4715 22.3339H91.4185Z" />
                        <path d="M124.188 15.5406L124.931 11.45C124.931 11.45 137.975 9.21872 143.861 9.32497C143.861 9.32497 144.603 11.6094 144.815 12.725C145.133 14.425 145.505 16.125 145.77 17.2938C146.3 19.8438 146.777 21.8625 147.36 24.5188C148.951 32.0626 149.163 33.1251 150.065 36.6845C150.648 39.3408 151.603 42.5283 152.292 45.1845C152.716 46.9908 154.519 51.6658 154.943 53.2596C150.118 55.969 143.755 57.6159 141.634 58.094C140.891 55.8096 140.255 52.7283 139.407 50.6033C136.702 51.1877 133.998 51.5596 131.241 52.1971C130.498 52.3565 130.074 52.3565 129.279 52.6221C128.695 54.8534 127.847 57.4034 127.476 58.8377C122.385 58.519 115.863 57.4034 113.901 56.8721C120.105 40.722 124.188 15.4344 124.188 15.4344V15.5406ZM137.392 41.9439C136.437 37.6939 135.43 30.1501 134.528 26.1126C133.839 28.5032 133.15 34.9314 132.725 37.0032C132.407 38.5439 131.983 41.5189 131.559 43.2189L137.392 41.9439Z" />
                        <path d="M188.137 38.1082C183.471 39.8082 178.38 39.9145 173.767 41.1895C173.767 45.1208 173.926 48.9458 173.873 52.9301C173.767 54.3645 173.979 55.7989 173.979 57.2864C169.843 57.9771 165.071 58.1364 161.147 58.1364C160.988 55.427 160.988 52.5051 160.988 49.7958C160.829 45.9707 161.677 29.2363 161.518 26.2613C161.412 23.9769 161.624 21.5863 161.783 19.355C160.776 19.6207 159.768 19.9394 158.708 20.205C158.177 17.8144 156.905 10.855 156.481 6.71126C160.882 5.43626 165.23 4.32061 169.737 3.31124C171.593 2.88623 173.449 2.62062 175.358 2.30187C179.282 1.61124 183.418 1.02686 187.395 0.76123C187.978 2.99249 189.091 8.94251 189.516 14.0425C185.38 14.7332 181.562 15.3175 177.532 15.6363C176.577 15.7425 175.729 15.9019 174.88 16.0613C174.774 16.805 174.615 17.4957 174.615 18.3457C174.35 20.7894 174.191 23.4457 174.032 25.9957C173.926 26.7394 173.926 27.5363 173.926 28.2801C174.934 28.1207 175.782 27.9613 176.736 27.6957C178.963 27.1644 181.138 26.6863 183.259 26.3144C184.107 26.1551 185.91 25.9957 186.811 25.8894C187.235 28.4394 187.978 32.6895 188.084 38.1082H188.137Z" />
                        <path d="M195.874 15.5406L196.616 11.45C196.616 11.45 209.661 9.21872 215.546 9.32497C215.546 9.32497 216.289 11.6094 216.501 12.725C216.819 14.425 217.19 16.125 217.455 17.2938C217.986 19.8438 218.463 21.8625 219.046 24.5188C220.637 32.0626 220.849 33.1251 221.75 36.6845C222.334 39.3408 223.288 42.5283 223.978 45.1845C224.402 46.9908 226.205 51.6658 226.629 53.2596C221.803 55.969 215.44 57.6159 213.319 58.094C212.577 55.8096 211.941 52.7283 211.092 50.6033C208.388 51.1877 205.684 51.5596 202.926 52.1971C202.184 52.3565 201.76 52.3565 200.964 52.6221C200.381 54.8534 199.533 57.4034 199.162 58.8377C194.071 58.519 187.549 57.4034 185.587 56.8721C191.791 40.722 195.874 15.4344 195.874 15.4344V15.5406ZM209.077 41.9439C208.123 37.6939 207.115 30.1501 206.214 26.1126C205.525 28.5032 204.835 34.9314 204.411 37.0032C204.093 38.5439 203.669 41.5189 203.245 43.2189L209.077 41.9439Z" />
                        <path d="M263.111 51.234C260.142 55.8028 257.278 57.2903 253.248 59.9997C251.233 58.1934 250.014 56.8653 248.476 55.0059C246.514 52.6153 245.082 50.5965 243.067 47.1965C242.537 46.2402 242.113 45.1777 241.636 44.1152C241.052 44.2746 240.787 44.3808 240.257 44.6465C239.992 47.5152 240.257 48.7371 240.363 51.8715C240.469 53.6778 240.681 56.2278 240.893 57.1309C236.651 58.1403 231.19 58.5122 229.015 58.5653C228.75 56.9715 228.432 50.7559 228.432 49.2152C228.432 41.6715 228.167 34.1808 228.432 26.2651C228.538 25.7339 228.591 22.5995 228.697 22.1213C227.743 22.2276 226.841 22.2276 225.463 22.2276C225.622 16.4369 225.887 11.1775 226.311 8.94629C227.584 8.78691 229.016 8.68066 230.447 8.68066C234.53 8.68066 239.037 9.21192 241.583 9.3713C245.559 9.69005 248.37 10.6463 251.445 11.8151C256.006 13.7807 257.649 14.9494 260.195 17.2338C262.156 19.1995 263.005 20.5276 263.27 23.1839C263.853 29.2933 257.225 35.2433 252.559 38.2183C252.983 39.0683 253.407 40.0246 253.938 40.8746C255.634 43.3183 257.596 45.6558 259.77 47.834L263.164 51.234H263.111ZM240.363 22.3339C240.257 23.9276 240.469 29.5589 240.522 31.1526C241.53 30.887 243.067 30.4089 244.446 29.7183C245.825 28.8683 247.256 27.912 248.37 26.8495C251.923 23.3432 242.59 21.9089 240.416 22.3339H240.363Z" />
                        <path d="M312 54.2092C307.227 56.4935 301.501 57.0248 299.38 57.3435C298.425 49.7998 297.418 42.3091 296.092 34.6591C294.978 40.8747 295.084 45.3904 294.978 52.9341C291.001 53.5185 284.691 54.2092 282.411 54.3154C281.881 51.4998 280.874 46.2404 280.714 45.2841C280.396 42.9997 279.601 39.4935 278.593 35.6153C278.434 43.1591 277.427 50.9154 277.639 58.831C272.655 58.7248 266.185 58.1404 264.33 57.8748C264.436 55.1654 265.284 44.6997 265.602 42.4154C266.291 40.131 267.14 15.3746 267.564 13.3559C274.351 10.9121 280.29 11.5496 283.26 11.2309C284.267 15.9059 285.646 22.8122 286.918 27.0622C287.184 25.8934 287.926 22.3872 288.297 21.2184C289.146 17.9247 289.835 13.9934 290.418 10.3278C292.645 10.0621 296.675 9.58398 300.758 9.58398C302.614 9.58398 304.47 9.74337 306.167 10.009C306.485 11.5496 307.174 18.2434 307.28 19.8903C307.439 22.8653 307.545 25.7341 308.023 28.8153C308.553 32.3747 309.189 36.0403 309.72 39.706C310.038 41.6716 311.522 52.9873 312 54.3154V54.2092Z" />
                    </svg>
                </a>

                {/* Mobile Menu Icon */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="sm:hidden text-hi opacity-[0.72] focus:outline-none cursor-not-allowed"
                    disabled={true}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Nav Links */}
                {/* <div className="hidden sm:flex space-x-6">
                    <a href="#" className="text-brand-main">Home</a>
                    <a href="#" className="text-brand-main">About</a>
                    <a href="#" className="text-brand-main">Contact</a>
                </div> */}
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="tab-s:hidden absolute left-0 right-0 bg-srf-base shadow-lg text-center py-4">
                    <a href="#" className="block py-2">Home</a>
                    <a href="#" className="block py-2">About</a>
                    <a href="#" className="block py-2">Contact</a>
                </div>
            )}
        </nav>
    );
}

function Navbar() {
    return (
        <>
            <NavbarLargerScreen />
            <NavbarMobile />
        </>
    )
}

export default Navbar;
