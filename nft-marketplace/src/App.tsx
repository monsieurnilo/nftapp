import NftList from "./components/NtfList/NftList";
import { useState } from "react";
import WalletConnector from "./components/WalletConnector/WalletConnector";

function App() {
  const [account, setAccount] = useState<string | null>(null);

  return (
    <>
      <h1>NTF APP</h1>
      <WalletConnector onAccountChange={setAccount} />
      <NftList />
    </>
  );
}

export default App;