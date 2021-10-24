import './App.css';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import Header from './components/Header'
import Balance from './components/Balance'
import Summary from './components/Summary'
import History from './components/History'
import TransactionForm from './components/TransactionForm'

import { GlobalProvider } from './context/GlobalState'

function App() {

    const [walletConnected, setWalletConnected] = useState(false);

    const loadWeb3 = async () => {

        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            setWalletConnected(true);
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
            setWalletConnected(true);
        }
        else {
            setWalletConnected(false);
            window.alert('Non-ethereum browser detected. Try using MetaMask.');
        }
    }

    const loadBlockchainData = async () => {

        const web3 = window.web3;

        if (web3) {
            const accounts = await web3.eth.getAccounts();
            console.log(accounts[0]);
        }
    }

    useEffect(() => {

        (async () => {

            await loadWeb3();

            if (walletConnected) {
                await loadBlockchainData();
            }

        })()
    }, [walletConnected]);

    return (
        <>
            {walletConnected &&
            <GlobalProvider>
                <Header />
                <div className="container">
                    <Balance />
                    <Summary />
                    <History />
                    <TransactionForm />
                </div>
            </GlobalProvider>}
        </>
    );
}

export default App;
