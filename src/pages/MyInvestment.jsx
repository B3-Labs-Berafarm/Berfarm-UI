import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DataText from '../components/base/DataText';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
const data = [
    {
        label: "Deposit",
        value: "Deposit",
        desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
        label: "Withdraw",
        value: "Withdraw",
        desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },

];

export default function MyInvestment() {
    const [activeTab, setActiveTab] = React.useState("Deposit");

    return (
        <div className='flex flex-col gap-80 bg-srf-accent2base'>
            <Navbar dapp={true} />
            <div className='container space-y-80'>
                <div className='mt-[90px] tab-s:mt-[100px] scr-s:mt-[128px]'>
                    <div className='grid grid-cols-1 tab-s:grid-cols-2 scr-s:grid-cols-12 gap-g3 content-start'>
                        <div className='col-span-1 scr-s:col-span-5 space-y-g2'>
                            <div className='flex justify-between items-center'>
                                <div className='flex text-hi gap-g1'>
                                    <img src='/assets/dollar.png' className='w-48 h-48' />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44 26L4 26L4 22L44 22L44 26Z" fill="currentColor" fill-opacity="0.87" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44 20L4 20L4 16L44 16L44 20Z" fill="currentColor" fill-opacity="0.87" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44 14L4 14L4 10L44 10L44 14Z" fill="currentColor" fill-opacity="0.87" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44 32L4 32L4 28L44 28L44 32Z" fill="currentColor" fill-opacity="0.87" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44 38L4 38L4 34L44 34L44 38Z" fill="currentColor" fill-opacity="0.87" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44 44L4 44L4 40L44 40L44 44Z" fill="currentColor" fill-opacity="0.87" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M44 8L4 8L4 4L44 4L44 8Z" fill="currentColor" fill-opacity="0.87" />
                                    </svg>
                                </div>
                                <button className='border-2 border-action-primary-default rounded-rnd-m px-s tab-l:px-m ht-m font-body text-action-primary-default'>
                                    Switch to rewards yield
                                </button>
                            </div>
                            <div className='h2 font-headings font-weight-800 text-hi'>Base Yield Tranche</div>
                            <div className='flex flex-col gap-g2'>
                                <div className='text-med mt-40 body-l font-body'>
                                    Tailored for investors focused on capital preservation and stable returns.
                                </div>
                                <ul className='text-med font-body list-disc pl-5 space-y-2'>
                                    <li>Minimum guaranteed base yield per investment period</li>
                                    <li>Automatically reinvest funds to achieve the target APY</li>
                                    <li>Includes built-in loss protection through variable yield vaults</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-8'>
                                <div className='text-hi mt-24 title-m font-titles font-weight-800'>
                                    Product Details
                                </div>
                                {PRODUCT_DETAILS.map((item, index) => (
                                    <DataText
                                        key={`deposit-${index}`}
                                        label={item.label}
                                        value={item.value}
                                        dataTextClassName='flex justify-between items-center font-body'
                                        valueClassName={`font-weight-700 body-m  text-hi`}
                                        labelClassName={`body-m text-med ${item.hasInfo ? 'flex items-center gap-g0h' : ''}`}
                                        infoText={item.hasInfo ? item.infoText : undefined}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='hidden scr-s:block scr-s:col-span-1'></div>
                        <div className='col-span-1 scr-s:col-span-6'>
                            <div className='flex  flex-col gap-g4'>
                                <div className='p-g2 tab-l:p-g4 bg-srf-l2 shadow-level2 rounded-rnd-m border border-light w-full'>
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
                                <div className='bg-srf-l2 shadow-level2 rounded-rnd-m border border-light w-full'>
                                    <Tabs value={activeTab} className="">
                                        <TabsHeader
                                            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                                            indicatorProps={{
                                                className:
                                                    "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                                            }}
                                        >
                                            {data.map(({ label, value }) => (
                                                <Tab
                                                    key={value}
                                                    value={value}
                                                    onClick={() => setActiveTab(value)}
                                                    className={`${activeTab === value ? "text-gray-900" : ""} px-l py-16 lbl-m !font-body font-weight-500`}
                                                >
                                                    {label}
                                                </Tab>
                                            ))}
                                        </TabsHeader>
                                        <TabsBody className='px-l py-s'>
                                            {data.map(({ value, desc }) => (
                                                <TabPanel key={value} value={value}>
                                                    {desc}
                                                </TabPanel>
                                            ))}
                                        </TabsBody>
                                    </Tabs>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 border-light my-80'></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


const depositData = [
    { label: 'Total Initial Farm Value', value: '999 UNIT', hasInfo: true, infoText: 'This is additional information!' },
    { label: 'Total Bera', value: '9999 BERA', hasInfo: true, infoText: 'This is additional information!' },
    { label: 'Total Honey', value: '999 UNIT', hasInfo: true, infoText: 'This is additional information!' },
    { label: 'Default Key', value: '999 UNIT', hasInfo: true, infoText: 'This is additional information!' },
    { label: 'Total Bera', value: '9999 BERA', hasInfo: true, infoText: 'This is additional information!' },
    { label: 'Total Honey', value: '999 UNIT', hasInfo: true, infoText: 'This is additional information!' },
];

const PRODUCT_DETAILS = [
    { label: 'Total Farm Value Locked', value: "21,00,000 USD" },
    { label: 'Farm Status', value: "Active" },
    { label: 'Fixed APR', value: "10%" },
    { label: 'Performance Fees', value: "6.9%", hasInfo: true, infoText: 'This is additional information!' },
]