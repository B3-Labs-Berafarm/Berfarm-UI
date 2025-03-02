
import React from 'react';

const DynamicTable = ({ headerContent, rowsContent }) => {
    if (!headerContent || !rowsContent) {
        return <div className="text-gray-500 py-4 text-center">No data available</div>;
    }

    return (
        <div className="overflow-x-auto shadow-level2 rounded-16 p-g2 bg-lvl2 border border-light">
            <table className="min-w-full">
                <thead className="bg-lvl2">
                    {headerContent}
                </thead>
                <tbody className="bg-lvl2">
                    {rowsContent}
                </tbody>
            </table>
        </div>
    );
};

export default DynamicTable;