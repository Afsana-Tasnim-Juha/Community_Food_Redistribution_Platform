
import { useTable } from 'react-table';

const ManageMyFoods = ({ foodData }) => {
    const columns = [
        // Define columns for your table
        {
            Header: 'Food Name',
            accessor: 'name', // Property name in your data object
        },
        {
            Header: 'Quantity',
            accessor: 'quantity',
        },
        {
            Header: 'Pickup Location',
            accessor: 'pickup',
        },
        {
            Header: 'Expired Date',
            accessor: 'expired',
        },
        {
            Header: 'Food Status',
            accessor: 'status',
        },
        {
            Header: 'Donator Name',
            accessor: 'dName',
        },
        {
            Header: 'Donator Email',
            accessor: 'dEmail',
        },
        // Add more columns as needed
    ];

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: foodData || [] });


    return (
        <div>
            <h2>Manage My Foods</h2>
            <table {...getTableProps()} className="table">
                <thead>
                    {headerGroups.map((headerGroup, index) => (
                        <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th key={column.id} {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, index) => {
                        prepareRow(row);
                        return (
                            <tr key={index} {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td key={cell.id} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ManageMyFoods;
