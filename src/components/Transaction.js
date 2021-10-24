import React from 'react';

function getSign(amount) {
    if (amount < 0) return "-";
    else return "+";
}

function Transaction({ transaction }) {
    const sign = getSign(transaction.amount);

    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text}
            <span>
                {sign}${Math.abs(transaction.amount).toFixed(2)}
            </span>
        </li>
    );
}

export default Transaction;