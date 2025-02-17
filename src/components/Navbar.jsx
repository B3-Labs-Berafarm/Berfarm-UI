import React from 'react';

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-transparent z-10">
            <div className="mx-auto- px-24 tab-s:px-44 tab-l:px-64 scr-s:px-76 scr-m:px-108 scr-l:px-160 py-[40px]">
                <div className="flex justify-between items-center">
                    <a href="/">
                        <img src="src/assets/logo.png" className='w-[208px] h-[40px] scr-m:w-[312px] scr-m:h-[60px]' />
                    </a>
                    <div className="space-x-6">
                        {/* <button>asd</button> */}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
