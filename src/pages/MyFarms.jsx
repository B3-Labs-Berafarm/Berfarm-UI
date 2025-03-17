import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import axios from 'axios';
import Navbar from '../components/Navbar'
import InfoCard from '../components/base/InfoCard';
import { Grip, List, Search, Filter } from 'lucide-react';
import classNames from 'classnames';
import Input from '../components/base/Input';
import FarmCard from '../components/base/FarmCard';
import DynamicTable from '../components/base/Table';
import FarmTable from '../components/base/FarmTable';
import Footer from '../components/Footer';
import numberAbbreviate from 'number-abbreviate'
import { capitalize } from 'underscore.string';
import NoDataFound from '../components/base/NoDataFound';
import { numberToFixed } from '../utils/numbers';
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
const getAnalyticsOverview = async () => {
    try {
        await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/analytics/overview`);
    } catch (error) {

    }
}
export default function MyFarms() {
    const [searchValue, setSearchValue] = useState('')
    const [columnView, setColumnView] = React.useState(true);
    const [analyticsOverview, setAnalyticsOverview] = React.useState(true);
    const [vaultsData, setVaultsData] = React.useState([]);
    const [tvlValues, setTVLValues] = React.useState({});
    const { isConnected } = useAccount();

    const getAnalyticsOverview = async () => {
        try {
            const { data: { data } } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/analytics/overview`);
            // console.log({ data })
            setAnalyticsOverview(data);
        } catch (error) {
            console.error(error)
        }
    }
    const getVaultDetails = async () => {
        try {
            const { data: { data } } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/vault?searchValue=${searchValue}`);
            // console.log({ data })
            setVaultsData(data);
        } catch (error) {
            console.error(error)
        }
    }
    const getTVLInfo = async () => {
        try {
            const vaultPayload = vaultsData?.map((item) => {
                const { trancheVaultAddress, strategyManagerAddress } = item;
                return {
                    trancheVaultAddress,
                    strategyManagerAddress
                }
            });
            const payload = { trancheVaultInfo: vaultPayload };
            const { data: { data } } = await axios.post(`${import.meta.env.VITE_API_URL}/trancheDetails/trancheVaultTvl`, payload);
            console.log({ data })
            setTVLValues(data);
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getVaultDetails();
    }, [searchValue]);
    useEffect(() => {
        getAnalyticsOverview();
    }, []);
    useEffect(() => {
        getTVLInfo()
    }, [vaultsData])
    return (
        <div key="my-farms" className='flex flex-col gap-80 bg-srf-base'>
            {/* <div>isConnected {isConnected?.toString()}</div> */}
            <div className='cover-img flex justify-end items-center'>
                <Navbar dapp={true} />
                {console.log({ MUMN: Number(analyticsOverview?.totalValue || 0) })}
                <div className='container flex tab-s:justify-end items-center gap-default flex-col tab-s:flex-row'>
                    <InfoCard {...{ label: 'Total Farm Value', value: numberAbbreviate(numberToFixed(analyticsOverview?.totalValue), 2) || '-', keyValue: `cover-info-total-farm-value`, valueClassName: "uppercase" }} />
                    <InfoCard {...{ label: 'Total Farmers', value: numberAbbreviate(Number(analyticsOverview?.total_farmers || 0), 2), keyValue: `cover-info-total-farmers`, valueClassName: "uppercase" }} />
                </div>
            </div>
            <div className='container gap-g4 flex flex-col'>
                <div className='flex justify-between items-center text-hi flex-col tab-s:flex-row'>
                    <div className='flex items-center gap-g4 justify-between tab-s:justify-start w-full'>
                        <div className='text-hi h2 font-weight-800 font-headings'>All Farms {""}</div>
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
                            value={searchValue}
                            onChange={(event) => setSearchValue(event?.target?.value)}
                            inputClassName={"bg-srf-base font-headings text-hi border-action-neutral border-2 tab-s:w-[320px] scr-m:w-[420px]"}
                            icon={
                                <Search
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-hi"
                                    size={16}
                                />}
                        />
                        {/* <Filter
                            size={20}
                        /> */}
                    </div>
                </div>
                {(columnView && !!vaultsData?.length) && (
                    <div className='grid grid-cols-1 tab-l:grid-cols-2 gap-default'>
                        {vaultsData.map((item, index) => (
                            <FarmCard {...{ ...item, keyValue: `farm-card-${index}`, tvls: (tvlValues?.vaultTvl || []) }} />
                        ))}
                    </div>
                )}
                {(!columnView && !!vaultsData?.length) && (
                    <FarmTable vaults={vaultsData} tvls={tvlValues?.vaultTvl || []} />
                )}
                {!(!!vaultsData?.length) && (
                    <NoDataFound text='No Vault Found' />
                )}
            </div>
            <Footer />
        </div >
    )
}
