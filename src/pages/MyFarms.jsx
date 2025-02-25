import React from 'react'
import Navbar from '../components/Navbar'
import InfoCard from '../components/base/InfoCard'
import { Grip, List, Search, Filter } from 'lucide-react';
import classNames from 'classnames';
import Input from '../components/base/Input';
import FarmCard from '../components/base/FarmCard';
const CARD_DETAILS = [
    { label: "Total Farm Value", value: "$39M UDS" },
    { label: "Total Farmers", value: "2.97M" },
]
export default function MyFarms() {
    const [columnView, setColumnView] = React.useState(true);

    return (
        <div className='flex flex-col gap-80 bg-srf-base'>
            <div className='cover-img flex justify-end items-center'>
                <Navbar />
                <div className='container flex justify-end items-center gap-default'>
                    {CARD_DETAILS.map((item, index) => (
                        <InfoCard {...item} key={`cover-info-${index}`} />
                    ))}
                </div>
            </div>
            <div className='container gap-g4 flex flex-col'>
                <div className='flex justify-between items-center text-hi'>
                    <div className='flex items-center gap-g4'>
                        <div className='text-hi h2 font-weight-800 font-headings'>All Farms</div>
                        <div className='flex items-center justify-start gap-4'>
                            <Grip
                                size={24}
                                className={classNames({ 'text-action-default': columnView, 'cursor-pointer': !columnView, 'cursor-not-allowed': columnView })}
                                onClick={() => setColumnView(true)}
                            />
                            <List
                                size={24}
                                className={classNames({ 'text-action-default': !columnView, 'cursor-pointer': columnView, 'cursor-not-allowed': !columnView })}
                                onClick={() => setColumnView(false)}
                            />

                        </div>
                    </div>
                    <div className='flex items-center gap-g2 '>
                        <Input
                            placeholder="Search by farms"
                            inputClassName={"bg-srf-base font-headings text-hi border-action-neutral border-2 tab-s:w-[320px] scr-m:w-[420px]"}
                            icon={
                                <Search
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-hi"
                                    size={16}
                                />}
                        />
                        <Filter
                            size={20}
                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 tab-s:grid-cols-2 gap-default'>
                    {[1, 2, 3, 4, 5].map((item, index) => (
                        <FarmCard />
                    ))}
                </div>
            </div>
        </div >
    )
}
