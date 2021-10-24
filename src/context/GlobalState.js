import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -60 },
        { id: 4, text: 'Misc', amount: 30 }
    ]
}

//Create and export Context
export const GlobalContext = createContext(initialState);

//Create and export Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}