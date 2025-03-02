import React from 'react'
import Navbar from '../components/Navbar'
import InfoCard from '../components/base/InfoCard'
import { Grip, List, Search, Filter } from 'lucide-react';
import classNames from 'classnames';
import Input from '../components/base/Input';
import FarmCard from '../components/base/FarmCard';
import DynamicTable from '../components/base/Table';
import FarmTable from '../components/base/FarmTable';
import Footer from '../components/Footer';

const CARD_DETAILS = [
    { label: "Total Farm Value", value: "$39M UDS" },
    { label: "Total Farmers", value: "2.97M" },
]
const SAMPLE_MY_FARM = [
    {
        vault_name: 'USDT Vaults',
        units: '10.36K UNIT',
        base_apr: '99%',
        reward_multiplier: 'x12',
        tfv: '9,999,999.99',
        status: 'Active'
    },
    {
        vault_name: 'USDT Vaults',
        units: '9.30K UNIT',
        base_apr: '92%',
        reward_multiplier: 'x8.9',
        tfv: '4,999,999.99',
        status: 'Active'
    },
    {
        vault_name: 'USDT Vaults',
        units: '12.36K UNIT',
        base_apr: '91%',
        reward_multiplier: 'x9',
        tfv: '2,999,999.99',
        status: 'Active'
    },
    {
        vault_name: 'USDT Vaults',
        units: '8.36K UNIT',
        base_apr: '98%',
        reward_multiplier: 'x10',
        tfv: '2,799,999.99',
        status: 'Active'
    }
]
export default function MyFarms() {
    const [columnView, setColumnView] = React.useState(true);
    return (
        <div className='flex flex-col gap-80 bg-srf-base'>
            <div className='cover-img flex justify-end items-center'>
                <Navbar dapp={true} />
                <div className='container flex tab-s:justify-end items-center gap-default flex-col tab-s:flex-row'>
                    {CARD_DETAILS.map((item, index) => (
                        <InfoCard {...item} key={`cover-info-${index}`} />
                    ))}
                </div>
            </div>
            <div className='container gap-g4 flex flex-col'>
                <div className='flex justify-between items-center text-hi flex-col tab-s:flex-row'>
                    <div className='flex items-center gap-g4 justify-between tab-s:justify-start w-full'>
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
                    <div className='flex items-center gap-g2 w-full py-s tab-s:py-0 tab-s:w-auto'>
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
                {columnView && (
                    <div className='grid grid-cols-1 tab-l:grid-cols-2 gap-default'>
                        {SAMPLE_MY_FARM.map((item, index) => (
                            <FarmCard {...item} key={index} />
                        ))}
                    </div>
                )}
                {!columnView && (
                    <FarmTable data={SAMPLE_MY_FARM} />
                )}

            </div>
            <Footer />
        </div >
    )
}
