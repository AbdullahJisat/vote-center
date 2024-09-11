import React from 'react';

interface TableProps {
    thead: React.ReactNode;
    tbody: React.ReactNode;
}

const Table: React.FC<TableProps> = ({ thead, tbody }) => {
    return (
        <table className="table table-hover text-nowrap">
            <thead>
            {thead}
            </thead>
            <tbody>
            {tbody}
            </tbody>
        </table>
    );
};

export default Table;
