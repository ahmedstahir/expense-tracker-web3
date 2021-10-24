import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Summary() {

    const { transactions } = useContext(GlobalContext);

    var income = 0;
    var filteredTransactions = transactions.filter(trx => trx.amount > 0);
    if (filteredTransactions) {
        filteredTransactions.map(trx => (income += trx.amount));
    }

    var expense = 0;
    filteredTransactions = transactions.filter(trx => trx.amount < 0);
    if (filteredTransactions) {
        filteredTransactions.map(trx => (expense += trx.amount));
    }

    return (
        <div className="summary">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income.toFixed(2)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(expense).toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Summary;