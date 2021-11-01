import React from 'react';
import TableHead from './TableHead';

const clubs = [
    {
        name: 'Paris-SG',
        played: 12,
        won: 10,
        draws: 1,
        lost: 1,
        pts: 31
    },
]

export default function Table({headers}) {
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <TableHead headers={headers}></TableHead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {clubs.map((club) => (
                                    <tr key={club.name}>
                                        {club.name}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}