import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Balance() {

    const { transactions } = useContext(GlobalContext);
    var balance = 0;
    transactions.map(trx => (balance += trx.amount));
    const sign = balance < 0 ? '-' : '';

    return (
        <>
            <h4>Closing Balance</h4>
            <h2>{sign}${Math.abs(balance).toFixed(2)}</h2>
        </>
    );
}

export default Balance;