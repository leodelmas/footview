import React from 'react';
import Table from './components/Table';

export function App() {
    return (
        <div>
            <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome {new Date().toString() }</h1>
            <Table headers={['Club', 'WM', 'LM', 'D', 'Pts']}></Table>
        </div>
    );
}