import { useState, useEffect } from "react";
import Web3 from "web3";

declare global {
    interface Window {
        ethereum: any;
    }
}

interface WalletConnectorProps {
    onAccountChange: (account: string | null) => void;
}

const WalletConnector: React.FC<WalletConnectorProps> = ({ onAccountChange }) => {
    const [account, setAccount] = useState<string | null>(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const web3 = new Web3(window.ethereum);
                await window.ethereum.request({ method: "eth_requestAccounts" });
                const accounts = await web3.eth.getAccounts();
                setAccount(accounts[0]);
                onAccountChange(accounts[0]);
            } catch (error) {
                console.error("User denied account access");
            }
        } else {
            console.error("MetaMask not detected");
        }
    };

    useEffect(() => {
        const checkIfWalletIsConnected = async () => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                const accounts = await web3.eth.getAccounts();
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                    onAccountChange(accounts[0]);
                }
            }
        };

        checkIfWalletIsConnected();

        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts: string[]) => {
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                    onAccountChange(accounts[0]);
                } else {
                    setAccount(null);
                    onAccountChange(null);
                }
            });
        }

        return () => {
            if (window.ethereum) {
                window.ethereum.removeListener("accountsChanged", () => { });
            }
        };
    }, [onAccountChange]);

    return (
        <>
            {account ? (
                <p>Compte connecté: {account}</p>
            ) : (
                <button onClick={connectWallet}>Connecter via MetaMask</button>
            )}
        </>
    );
};

export default WalletConnector;