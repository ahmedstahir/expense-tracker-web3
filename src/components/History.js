import React, { useContext } from 'react';
import Transaction from './Transaction'
import { GlobalContext } from '../context/GlobalState';

function History() {

    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>Transaction history</h3>
            <ul className="list">
                {transactions.map(trx => (
                    <Transaction key={trx.id} transaction={trx} />
                ))}
                
            </ul>
        </>
    );
}

export default History;