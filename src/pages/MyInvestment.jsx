import React, { useEffect } from 'react'
import * as echarts from "echarts";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DataText from '../components/base/DataText';
import TransactionActionCard from '../components/TransactionActionCard';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

export default function MyInvestment() {
    const [activeTab, setActiveTab] = React.useState("Deposit");
    const chartStrategyCompositionRef = React.useRef(null);
    const chartTrancheStructureRef = React.useRef(null);
    const [strategyInformation, setStrategyInformation] = React.useState();
    const [vaultInformation, setVaultInformation] = React.useState({});
    const [vaultType, setVaultType] = React.useState('base');
    const getStrategyInformation = async () => {
        try {
            const { trancheVaultAddress, strategyManagerAddress } = vaultInformation;
            if (trancheVaultAddress && strategyManagerAddress) {
                const payload = { trancheVaultInfo: [{ trancheVaultAddress, strategyManagerAddress }] }
                console.log({ payload })
                const { data: { data } } = await axios.post(`${import.meta.env.VITE_API_URL}/trancheDetails/getStrategyDetails`, payload);
                console.log({ data })
                const strategies = data?.strategyDetails?.[0]?.strategies?.map((item) => {
                    return { value: item?.percentage, name: item?.strategyName }
                });
                const trancheVaultThickness = data?.thicknessDetails?.[0]?.trancheVaultThickness || {};
                const thickness = [
                    { name: 'Base Yield', value: trancheVaultThickness?.yieldVaultShare || 0 },
                    { name: 'Rewards Yield', value: trancheVaultThickness?.rewardVaultShare || 0 },
                ]
                setStrategyInformation({ strategies, thickness });
            }
        } catch (error) {
            console.error(error)
        }
    }
    const getVaultInformation = async () => {
        try {
            const { data: { data } } = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/vault/${vaultId}`);
            console.log({ data })

            setVaultInformation(data);
        } catch (error) {
            console.error(error)
        }
    }
    // Scroll to top on component mount
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top of the page
    }, []);
    const { vaultId, yieldType } = useParams();
    const location = useLocation();
    // Create a URLSearchParams object to parse the query parameters
    const queryParams = new URLSearchParams(location.search);
    // Access the query parameters by name
    const vaultTrancheType = queryParams.get('vaultTrancheType');
    console.log({ queryParams })
    console.log({ vaultTrancheType })
    if (!vaultId) {
        return <p>Something Wrong</p>
    }

    useEffect(() => {
        if (vaultTrancheType) {
            setVaultType(vaultTrancheType == 'base' ? 'base' : 'rewards')
        }
    }, [yieldType])
    useEffect(() => {
        getVaultInformation();
    }, [vaultId]);
    useEffect(() => {
        getStrategyInformation();

    }, [vaultInformation]);

    useEffect(() => {
        const chart = echarts.init(chartStrategyCompositionRef.current);
        const chartData = strategyInformation?.strategies || [];
        console.log({ chartData })
        const option = {
            tooltip: {
                trigger: 'item'
            },
            color: ['rgba(62, 219, 223, 0.75)', 'rgba(230, 109, 58, 0.75)', 'rgba(120, 135, 250, 0.75)', 'rgba(190, 134, 0, 0.75)', 'rgba(132, 154, 0, 0.75)'],
            series: [
                {
                    name: 'Strategy Composition',
                    type: 'pie',
                    radius: ['35%', '75%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 12,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: chartData
                }
            ]
        }
        chart.setOption(option);

        const resizeHandler = () => chart.resize();
        window.addEventListener("resize", resizeHandler);

        return () => {
            chart.dispose();
            window.removeEventListener("resize", resizeHandler);
        };
    }, [strategyInformation]);
    useEffect(() => {
        const chart = echarts.init(chartTrancheStructureRef.current);
        const chartData = strategyInformation?.thickness || [];
        const option = {
            tooltip: {
                trigger: 'item'
            },
            color: ['rgba(62, 219, 223, 0.75)', 'rgba(230, 109, 58, 0.75)'],
            series: [
                {
                    name: 'Strategy Composition',
                    type: 'pie',
                    radius: ['35%', '75%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 12,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: chartData
                }
            ]
        }
        chart.setOption(option);

        const resizeHandler = () => chart.resize();
        window.addEventListener("resize", resizeHandler);

        return () => {
            chart.dispose();
            window.removeEventListener("resize", resizeHandler);
        };
    }, [strategyInformation]);
    const getVaultDisplayName = () => {
        return vaultType === 'base' ?
            vaultInformation?.yieldVaultDetails?.trancheDisplayName :
            vaultInformation?.rewardVaultDetails?.trancheDisplayName
    }
    const getVaultButtonDisplayText = () => {
        return vaultType === 'base' ? 'Switch to rewards yield' : 'Switch to base yield'
    }
    const getVaultDescription = () => {
        return vaultType === 'base' ?
            vaultInformation?.yieldVaultDetails?.vaultDescription :
            vaultInformation?.rewardVaultDetails?.vaultDescription
    }
    const getVaultKeyPointers = () => {
        return vaultType === 'base' ?
            vaultInformation?.yieldVaultDetails?.vaultKeyPointers :
            vaultInformation?.rewardVaultDetails?.vaultKeyPointers
    }
    return (
        <div className='flex flex-col gap-80 bg-srf-accent2base'>
            <Navbar dapp={true} />
            <div className='container space-y-80'>
                <div className='mt-[90px] tab-s:mt-[100px] scr-s:mt-[128px]'>
                    <div className='grid grid-cols-1 tab-s:grid-cols-2 scr-s:grid-cols-12 gap-g3 content-start'>
                        <div className='col-span-1 scr-s:col-span-5 space-y-g2'>
                            <div className='flex justify-between items-center'>
                                <div className='flex text-hi gap-g1'>
                                    <img src='/assets/Bera.ico' width={48} height={48} alt='vault image' className='rounded-full' />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M44 26L4 26L4 22L44 22L44 26Z" fill="currentColor" fillOpacity="0.87" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M44 20L4 20L4 16L44 16L44 20Z" fill="currentColor" fillOpacity="0.87" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M44 14L4 14L4 10L44 10L44 14Z" fill="currentColor" fillOpacity="0.87" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M44 32L4 32L4 28L44 28L44 32Z" fill="currentColor" fillOpacity="0.87" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M44 38L4 38L4 34L44 34L44 38Z" fill="currentColor" fillOpacity="0.87" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M44 44L4 44L4 40L44 40L44 44Z" fill="currentColor" fillOpacity="0.87" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M44 8L4 8L4 4L44 4L44 8Z" fill="currentColor" fillOpacity="0.87" />
                                    </svg>
                                </div>
                                <button className='border-2 border-action-primary-default rounded-rnd-m px-s tab-l:px-m ht-m font-body text-action-primary-default' onClick={() => setVaultType(vaultType === 'base' ? 'reward' : 'base')}>
                                    {getVaultButtonDisplayText()}
                                </button>
                            </div>
                            <div className='h2 font-headings font-weight-800 text-hi'>
                                {getVaultDisplayName()}
                            </div>
                            <div className='flex flex-col gap-g2'>
                                <div className='text-med mt-40 body-l font-body'>
                                    {getVaultDescription()}
                                </div>
                                <ul className='text-med font-body list-disc pl-5 space-y-2'>
                                    {getVaultKeyPointers()?.map((item, index) => (
                                        <li key={`vault-key-pointers-${index}`}>{item}</li>
                                    ))}
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
                            <div className='flex flex-col gap-g4'>
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
                                    <TransactionActionCard />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-2 border-light my-80'></div>
                    <div className='grid grid-cols-1 tab-l:grid-cols-2 scr-s:grid-cols-12 gap-g3 content-start'>
                        <div className='col-span-1 scr-s:col-span-5 space-y-g2'>
                            <div className='flex flex-col gap-g4'>
                                <p className='title-l text-hi font-titles font-weight-800'>Strategy Information</p>
                                <p className='body-l text-med font-body font-weight-400'>{vaultInformation?.strategyInformation}</p>
                            </div>
                        </div>
                        <div className='hidden scr-s:block scr-s:col-span-1'></div>
                        <div className='col-span-1 scr-s:col-span-6'>
                            <div className='grid grid-cols-1 tab-s:grid-cols-2 gap-g3'>
                                <div className='col-span-1 '>
                                    <div ref={chartStrategyCompositionRef} className='w-full h-[300px] tab-s:h-[320px] tab-s:w-[320px] tab-l:h-[200px] tab-l:w-[200px]  scr-s:h-[320px] scr-s:w-[320px] scr-m:h-[360px] scr-m:w-[360px] scr-l:h-[420px] scr-l:w-[420px]' />
                                    <p className='text-center text-hi font-titles title-m pb-g3'>Strategy Composition</p>
                                    <div className='px-g3'>

                                        {strategyInformation?.strategies?.map((item, index) => (
                                            <DataText
                                                key={`strategy-information-${index}`}
                                                label={item.name}
                                                value={item.value ? `${item.value}%` : '-'}
                                                dataTextClassName='flex justify-between items-center font-body py-g0'
                                                valueClassName={`font-weight-700 body-m text-med`}
                                                labelClassName={`body-m text-med`}
                                                infoText={item.hasInfo ? item.infoText : undefined}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className='col-span-1'>
                                    <div ref={chartTrancheStructureRef} className='w-full  h-[300px] tab-s:h-[320px] tab-s:w-[320px] tab-l:h-[200px] tab-l:w-[200px] scr-s:h-[320px] scr-s:w-[320px]  scr-m:h-[360px] scr-m:w-[360px] scr-l:h-[420px] scr-l:w-[420px]' />
                                    <p className='text-center text-hi font-titles title-m pb-g3'>Strategy Composition</p>
                                    <div className='px-g3'>
                                        {strategyInformation?.thickness?.map((item, index) => (
                                            <DataText
                                                key={`strategy-thickness-${index}`}
                                                label={item.name}
                                                value={item.value ? `${item.value}%` : '-'}
                                                dataTextClassName='flex justify-between items-center font-body py-g0'
                                                valueClassName={`font-weight-700 body-m text-med`}
                                                labelClassName={`body-m text-med`}
                                                infoText={item.hasInfo ? item.infoText : undefined}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

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