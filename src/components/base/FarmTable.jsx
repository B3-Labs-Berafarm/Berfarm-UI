import React from 'react'
import DynamicTable from './Table';
import BaseYield from './BaseYield';
import RewardYield from './RewardYield';
import { titleize } from 'underscore.string';
const headers = ['Farm', 'Status', 'TFV', 'Base Yield Tranche', 'Rewards Yield Tranche'];

export default function FarmTable({ data }) {
    const getHeaders = () => {
        const headerContent = (
            <tr>
                {headers.map((header, index) => (
                    <th
                        key={index}
                        scope="col"
                        className={`py-g1 px-g2 ${header !== 'TFV' ? 'text-left' : 'text-right'} text-hi body-s font-body font-weight-700`}
                    >
                        {header}
                    </th>
                ))}
            </tr>
        );
        return headerContent
    }
    const getRowContents = () => {
        const rowsContent = (data || []).map((row, rowIndex) => (
            <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-lvl2' : 'bg-lvl2a'} text-hi`}>
                <td className="py-g1 px-g2 whitespace-nowrap body-s font-body">
                    <div className='flex items-center h-full gap-4'>
                        <img src='/assets/Bera.ico' width={20} height={20} alt='vault image' className='rounded-full' />
                        <div>{row.vaultName || '-'}</div>
                    </div>
                </td>
                <td className="py-g1 px-g2 whitespace-nowrap body-s font-body">
                    {titleize(row.vaultStatus) || '-'}
                </td>
                <td className="py-g1 px-g2 whitespace-nowrap body-s font-body text-right">
                    {row.tfv || '-'}
                </td>
                <td className="py-g1 px-g2 whitespace-nowrap body-s font-body">
                    <BaseYield {...{ row, vaultId: row?._id }} tableView={true} />
                </td>
                <td className="py-g1 px-g2 whitespace-nowrap body-s font-body">
                    <RewardYield {...{ ...row, vaultId: row?._id }} tableView={true} />
                </td>
            </tr>
        ));
        return rowsContent;
    }
    return (
        <DynamicTable headerContent={getHeaders()} rowsContent={getRowContents()} />
    )
}
