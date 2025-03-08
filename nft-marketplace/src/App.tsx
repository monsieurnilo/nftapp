import React, { useState } from 'react';
import Header from "./components/Header/Header";
import NftList from "./components/NtfList/NftList";
import WalletConnector from "./components/WalletConnector/WalletConnector";

function App() {
  const [account, setAccount] = useState<string | null>(null);

  const handleAccountChange = (newAccount: string | null) => {
    setAccount(newAccount);
  };

  return (
    <>
      <Header />
      <WalletConnector onAccountChange={handleAccountChange} />
      {account ? <NftList /> : <p>Veuillez connecter votre wallet pour voir la liste des NFTs.</p>}
    </>
  );
}

export default App;