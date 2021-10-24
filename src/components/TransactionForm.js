import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function TransactionForm() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { transactions, addTransaction } = useContext(GlobalContext);
    var maxId = 0;
    if (transactions) {
        transactions.map(trx => {
            if (trx.id > maxId) {
                maxId = trx.id;
            }
            return maxId;
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: maxId + 1,
            text,
            amount: +amount
        }

        setText('');
        setAmount(0);
        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Record new transaction</h3>
            <form onSubmit={onFormSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Description</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Your text here" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount<br />(positive for income, negative for expense)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className="btn">SAVE</button>
            </form>
        </>
    );
}

export default TransactionForm;