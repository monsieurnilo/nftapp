import { useState } from "react";
import WalletConnector from "../WalletConnector/WalletConnector";

function Header() {
    const [account, setAccount] = useState<string | null>(null);

    return (
        <>
            <header>
                <h1>NTF Marketplace</h1>
                <WalletConnector onAccountChange={setAccount} />
            </header>
        </>
    );
}

export default Header;