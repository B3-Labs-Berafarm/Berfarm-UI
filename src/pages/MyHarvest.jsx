import React from 'react'
import moment from 'moment'
import Navbar from '../components/Navbar'
import DataText from '../components/base/DataText'
import DataTextImg from '../components/base/DataTextImg'
import DynamicTable from '../components/base/Table';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Pagination from '../components/Pagination';

export default function MyHarvest() {

    const getActiveFarmsHeaders = () => {
        const headerContent = (
            <tr>
                {ACTIVE_FARMS_HEADERS.map((header, index) => (
                    <th
                        key={index}
                        scope="col"
                        className={`py-g1 px-g2 ${header === 'Rewards' ? 'text-right' : 'text-left'} text-hi body-s font-body font-weight-700`}
                    >
                        {header}
                    </th>
                ))}
            </tr>
        );
        return headerContent
    }
    const getTransactionHeaders = () => {
        const headerContent = (
            <tr>
                {TRANSACTIONS_HEADERS.map((header, index) => (
                    <th
                        key={index}
                        scope="col"
                        className={`py-g1 px-g2 ${header === 'Actions' ? 'text-right' : 'text-left'} text-hi body-s font-body font-weight-700`}
                    >
                        {header}
                    </th>
                ))}
            </tr>
        );
        return headerContent
    }

    const getRowContentsForFarms = () => {
        const rowsContent = (SAMPLE_MY_FARM || []).map((row, rowIndex) => (
            <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-lvl2' : 'bg-lvl2a'} text-hi`}>
                <td className="py-g1 px-g2 whitespace-nowrap body-s font-body">
                    <div className='flex items-center h-full gap-4'>
                        <img src='/assets/dollar.png' width={20} height={20} alt='vault image' />
                        <div>{row.vault_name}</div>
                    </div>
                </td>
                <td className={`py-g1 px-g2 whitespace-nowrap body-s font-body ${row?.status?.toLowerCase() === 'active' ? 'text-mean-suc' : 'text-mean-err'}`}>
                    {row.status}
                </td>
                <td className="py-g1 px-g2 whitespace-nowrap body-s font-body">
                    {row.initial_deposit}
                </td>
                <td className="py-g1 px-g2 whitespace-nowrap body-s font-body">
                    {row.initial_deposit}
                </td>
                <td className="py-g1 px-g2 whitespace-nowrap body-s font-body">
                    {row.current_value}
                </td>
                <td className="py-g1 px-g2 whitespace-nowrap body-s font-body">
                    {row.apr}
                </td>
                <td className="py-g1 px-g2 whitespace-nowrap body-s font-body text-right">
                    <div className='flex justify-end space-x-[-4px] '>
                        {REWARDS_INFO.map((reward, index) => (
                            <img key={`icon-${index}`} src={ICON_IMAGES[reward.key]} alt={reward.key} className='w-20 h-20 shadow-level2 rounded-full' />
                        ))}
                    </div>
                </td>
            </tr >
        ));
        return rowsContent;
    }
    const getRowContentsForTransactions = () => {
        const rowsContent = (SAMPLE_MY_TRANSACTIONS || []).map((row, rowIndex) => (
            <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-lvl2' : 'bg-lvl2a'} text-med`}>
                <td className="py-g1 px-g2 whitespace-nowrap body-s font-body">
                    <div className='flex items-center h-full gap-4'>
                        {moment(row?.date).format('DD MMMM YYYY') || '-'}
                    </div>
                </td>
                <td className={`py-g1 px-g2 whitespace-nowrap body-s font-body text-opacity-0`}>
                    {row?.vault_name || '-'}
                </td>
                <td className="py-g1 px-g2 whitespace-nowrap body-s font-body">
                    {row?.tranche || ''}
                </td>
                <td className="py-g1 px-g2 whitespace-nowrap body-s font-body">
                    {row?.asset || '-'}
                </td>
                <td className="py-g1 px-g2 whitespace-nowrap body-s font-body">
                    {row?.amount || '-'}
                </td>
                <td className="py-g1 px-g2 whitespace-nowrap body-s font-body">
                    {row?.txn || '-'}
                </td>
                <td className="py-g1 px-g2 whitespace-nowrap lbl-s font-body text-right">
                    <Link className='flex justify-end items-center gap-8 text-acc'>
                        View
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.72407 5.33333H5.33355V4H12.0002V10.6667H10.6669V6.27614L4.47162 12.4714L3.52881 11.5286L9.72407 5.33333Z" fillOpacity="0.93" />
                        </svg>
                    </Link>
                </td>
            </tr >
        ));
        return rowsContent;
    }
    return (
        <div className='flex flex-col gap-80 bg-srf-base'>
            <Navbar dapp={true} />
            <div className='container space-y-80'>
                <div className='mt-[90px] tab-s:mt-[100px] scr-s:mt-[128px]'>
                    <div className='grid grid-cols-1 tab-l:grid-cols-2 gap-g3 content-start'>
                        <div className='col-span-1 tab-l:col-span-2 h1 text-hi font-headings font-weight-800 h-auto'>My Harvest</div>

                        {/* Deposits Card */}
                        <div className='col-span-1'>
                            <div className='p-g4 bg-srf-l2 shadow-level2 rounded-rnd-m border border-light'>
                                <p className='text-hi font-titles title-s font-weight-800'>Your Deposits</p>

                                {depositData.map((item, index) => (
                                    <DataText
                                        key={`deposit-${index}`}
                                        label={item.label}
                                        value={item.value}
                                        dataTextClassName='flex justify-between items-center font-body py-g1'
                                        valueClassName={`font-weight-700 ${index === 0 || index === 3 ? 'body-m' : 'body-xs'} text-hi`}
                                        labelClassName={`${index === 0 || index === 3 ? 'body-m' : 'body-xs'} text-med ${item.hasInfo ? 'flex items-center gap-g0h' : ''}`}
                                        infoText={item.hasInfo ? item.infoText : undefined}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Rewards Card */}
                        <div className='col-span-1'>
                            <div className='p-g4 bg-srf-l2 shadow-level2 rounded-rnd-m border border-light'>
                                <p className='text-hi font-titles title-s font-weight-800'>Earned Rewards</p>
                                {rewardData.map((item, index) => (
                                    <DataTextImg
                                        key={`reward-${index}`}
                                        label={item.label}
                                        value={item.value}
                                        dataTextClassName='w-full flex justify-between items-center font-body py-g1'
                                        valueClassName="font-weight-700 body-l text-hi"
                                        labelClassName='font-weight-400 body-l text-med flex items-center gap-g1'
                                    />
                                ))}
                                <p className='font-body body-l text-hi px-32'>+{additionalRewards} <span className='font-weight-700'>UNIT</span></p>
                                <div className='flex justify-between items-center pt-g3'>
                                    <button className='text-acc font-body body-m lbl-s'>
                                        +{additionalRewards} Show all
                                    </button>
                                    <button className='font-body body-m lbl-s bg-action-primary-default text-inv-hi rounded-16 px-s h-32 shadow-level1'>
                                        Claim all
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-g4'>
                    <div className='h2 text-hi font-headings font-weight-800'>Active Farms</div>
                    <DynamicTable headerContent={getActiveFarmsHeaders()} rowsContent={getRowContentsForFarms()} />
                </div>
                <div className='flex flex-col gap-g4'>
                    <div className='h2 text-hi font-headings font-weight-800'>Transaction History</div>
                    <DynamicTable headerContent={getTransactionHeaders()} rowsContent={getRowContentsForTransactions()} />
                    <Pagination limit={10} current={2} total={20} />
                </div>
            </div>
            <Footer />
        </div>
    )
}


const ACTIVE_FARMS_HEADERS = ['Farm Name', 'Status', 'Tranche', 'Initial Deposit', 'Current Value', 'APR', 'Rewards'];
const TRANSACTIONS_HEADERS = ['Date', 'Farm Name', 'Tranche', 'Asset', 'Amount', 'Txn', 'Actions'];
const ICON_IMAGES = {
    ionic: "/assets/icons/ionic.svg",
    ironclad: "/assets/icons//ironclad.svg",
    layerbank: "/assets/icons//layerbank.svg",
    logX: "/assets/icons/logx.svg",
};

const REWARDS_INFO = [
    {
        name: "Ionic",
        key: "ionic",
        value: 6000,
    },
    {
        name: "Ironclad",
        key: "ironclad",
        value: 6000,
    },
    {
        name: "Layerbank",
        key: "layerbank",
        value: 6750,
    },
    {
        name: "LogX",
        key: "logX",
        value: 750,
    },
];
const SAMPLE_MY_FARM = [
    {
        vault_name: 'USDT Vaults',
        units: '10.36K UNIT',
        base_apr: '99%',
        reward_multiplier: 'x12',
        tfv: '9,999,999.99',
        status: 'Inactive',
        tranche: 'Rewards Yield',
        initial_deposit: '1000 CURR',
        current_value: '1000 CURR',
        apr: '12%'
    },
    {
        vault_name: 'USDT Vaults',
        units: '9.30K UNIT',
        base_apr: '92%',
        reward_multiplier: 'x8.9',
        tfv: '4,999,999.99',
        status: 'Active',
        tranche: 'Base Yield',
        initial_deposit: '1000 CURR',
        current_value: '1000 CURR',
        apr: '12%'
    },
    {
        vault_name: 'USDT Vaults',
        units: '12.36K UNIT',
        base_apr: '91%',
        reward_multiplier: 'x9',
        tfv: '2,999,999.99',
        status: 'Active',
        tranche: 'Base Yield',
        initial_deposit: '1000 CURR',
        current_value: '1000 CURR',
        apr: '12%'
    },
    {
        vault_name: 'USDT Vaults',
        units: '8.36K UNIT',
        base_apr: '98%',
        reward_multiplier: 'x10',
        tfv: '2,799,999.99',
        status: 'Active',
        tranche: 'Rewards Yield',
        initial_deposit: '1000 CURR',
        current_value: '1000 CURR',
        apr: '12%'
    }
]
// Sample data for deposits
const depositData = [
    { label: 'Total Initial Farm Value', value: '999 UNIT', hasInfo: true, infoText: 'This is additional information!' },
    { label: 'Total Bera', value: '9999 BERA' },
    { label: 'Total Honey', value: '999 UNIT' },
    { label: 'Default Key', value: '999 UNIT', hasInfo: true, infoText: 'This is additional information!' },
    { label: 'Total Bera', value: '9999 BERA' },
    { label: 'Total Honey', value: '999 UNIT' },
];

// Sample data for rewards
const rewardData = [
    { label: 'USDC', value: '999 UNIT' },
    { label: 'USDC', value: '999 UNIT' },
    { label: 'USDC', value: '999 UNIT' },
    { label: 'USDC', value: '999 UNIT' },
];

// Additional rewards not shown by default
const additionalRewards = 4;

const SAMPLE_MY_TRANSACTIONS = [
    {
        vault_name: 'USDT Vaults',
        units: '10.36K UNIT',
        base_apr: '99%',
        reward_multiplier: 'x12',
        tfv: '9,999,999.99',
        status: 'Inactive',
        tranche: 'Rewards Yield',
        asset: '1000 CURR',
        amount: '1000',
        apr: '12%',
        txn: 'Deposit',
        date: Date()
    },
    {
        vault_name: 'USDT Vaults',
        units: '9.30K UNIT',
        base_apr: '92%',
        reward_multiplier: 'x8.9',
        tfv: '4,999,999.99',
        status: 'Active',
        tranche: 'Base Yield',
        asset: '1000 CURR',
        amount: '1000',
        apr: '12%',
        txn: 'Deposit',
        date: Date()
    },
    {
        vault_name: 'USDT Vaults',
        units: '12.36K UNIT',
        base_apr: '91%',
        reward_multiplier: 'x9',
        tfv: '2,999,999.99',
        status: 'Active',
        tranche: 'Base Yield',
        asset: '1000 CURR',
        amount: '1000',
        apr: '12%',
        txn: 'Deposit',
        date: Date()
    },
    {
        vault_name: 'USDT Vaults',
        units: '8.36K UNIT',
        base_apr: '98%',
        reward_multiplier: 'x10',
        tfv: '2,799,999.99',
        status: 'Active',
        tranche: 'Rewards Yield',
        asset: '1000 CURR',
        amount: '1000',
        apr: '12%',
        txn: 'Deposit',
        date: Date()
    }
]