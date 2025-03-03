import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Deposit from './Deposit'
import Withdraw from './Withdraw'
import { useState } from 'react'

const categories = [
    {
        name: 'Deposit',
    },
    {
        name: 'Withdraw',
    },
]

export default function TransactionActionCard() {
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <div className="flex w-full justify-center">
            <div className="w-full">
                <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                    <TabList className="flex w-full ">
                        {categories.map(({ name }) => (

                            <Tab
                                key={name}
                                className={`w-full ${name === 'Deposit' ? 'rounded-tl-rnd-m' : 'rounded-tr-rnd-m'} 
                                    h-64 py-8 px-l text-sm/6 font-weight-500 text-acc font-body 
                                    focus:outline-none data-[selected]:bg-action-neutral-filled bg-srf-l1 data-[selected]:border-b-2 
                                    data-[selected]:border-action-primary-default 
                                    border-b-2 border-def `}
                            >
                                {name}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels className="">
                        <TabPanel key={"Deposit"} className="rounded-b-rnd-m  py-l px-l">
                            <Deposit />
                        </TabPanel>
                        <TabPanel key={"Withdraw"} className="rounded-b-rnd-m py-l px-l">
                            <Withdraw />
                        </TabPanel>

                    </TabPanels>
                </TabGroup>
            </div>
        </div >
    )
}
