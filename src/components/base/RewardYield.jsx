import React from 'react'


const ICON_IMAGES = {
    ionic: "/assets/icons/ionic.svg",
    ironclad: "/assets/icons//ironclad.svg",
    layerbank: "/assets/icons//layerbank.svg",
    logX: "/assets/icons/logx.svg",
};

export const REWARDS_INFO = [
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
export default function RewardYield({ reward_multiplier, tableView = false }) {
    return (
        <div className={`flex justify-between items-start p-g2 bg-act-accent2-default rounded-16 ${tableView ? 'min-h-[80px]' : ''} `}>
            <div className='flex gap-g2  text-hi'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g id="Icons Unique">
                        <g id="Shape">
                            <path fillRule="evenodd" clipRule="evenodd" d="M22 13L2 13L2 11L22 11L22 13Z" fillOpacity="0.87" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M22 10L2 10L2 8L22 8L22 10Z" fillOpacity="0.87" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M22 7L2 7L2 5L22 5L22 7Z" fillOpacity="0.87" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M22 16L2 16L2 14L22 14L22 16Z" fillOpacity="0.87" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M22 19L2 19L2 17L22 17L22 19Z" fillOpacity="0.87" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M22 22L2 22L2 20L22 20L22 22Z" fillOpacity="0.87" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M22 4L2 4L2 2L22 2L22 4Z" fillOpacity="0.87" />
                        </g>
                    </g>
                </svg>

                <p className={`${tableView ? 'body-s' : 'body-l'} font-body text-hi`}>Rewards Yield Tranche</p>
            </div>
            <div>
                <div className={`${tableView ? 'body-s' : 'body-l'}  font-body text-hi`}>Multiplier <span className='font-weight-800'>{reward_multiplier}</span></div>
                <div className='flex justify-end space-x-[-4px] '>
                    {REWARDS_INFO.map((reward, index) => (
                        <img key={`icon-${index}`} src={ICON_IMAGES[reward.key]} alt={reward.key} className='w-24 h-24 shadow-level2 rounded-full' />
                    ))}
                </div>
            </div>
        </div>
    )
}
