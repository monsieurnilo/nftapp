# Deploying 'NFTMarketplace'
--------------------------
> transaction hash:    0x218b299a4c277a39ca6613ba002b9ddc1307e014e76e8ba23e5d0e5eb50c6cea
> Blocks: 1            Seconds: 16
> contract address:    0x536FAEb44E5E287375602212B0022Eb661a41cdd
> block number:        3304187
> block timestamp:     1738933824
> account:             0xF364321D09Fd8556A9fE7D66869B081e6D3feB4F
> balance:             0.869779045
> gas used:            2893799 (0x2c27e7)
> gas price:           45 gwei
> value sent:          0 ETH
> total cost:          0.130220955 ETH

> Saving artifacts
-------------------------------------
> Total cost:         0.130220955 ETH

## NFT Marketplace - Setup and Deployment

### **Environment Variables (`.env` file)**
Ensure you have the following environment variables configured:

```env
PRIVATE_KEY=your_metamask_private_key
NFT_STORAGE_API_KEY=your_nft_storage_api_key
ALCHEMY_API_URL=https://eth-holesky.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY
CONTRACT_ADDRESS=your_contract_address  # This is set after deployment
```

---

## **1️⃣ Compile and Deploy the Smart Contract**
Run the following commands to **compile** and **deploy** the smart contract to Holesky:

```bash
truffle compile
truffle migrate --network holesky --reset
```

After deployment, **update your `.env` file** with the contract address:
```env
CONTRACT_ADDRESS=0xYourDeployedContractAddress
```

---

## **2️⃣ Mint an NFT**
Once the contract is deployed and the `.env` file is updated, mint an NFT by running:

```bash
node mintNFT.js
```

Expected output:
```
Metadata URL: ipfs://bafybei...
✅ NFT Minted! Token ID: 0
```

---

## **3️⃣ Retrieve Minted NFTs**
After minting an NFT, retrieve its details using Truffle Console.

### **1️⃣ Open Truffle Console for Holesky**
Run:
```bash
truffle console --network holesky
```
Expected output:
```
truffle(holesky)>
```

### **2️⃣ Get All Minted NFTs**
Run:
```javascript
const nft = await NFTMarketplace.deployed();
const allNFTs = await nft.getAllNFTs();
console.log(allNFTs);
```
✅ **Expected Output:**
```
[ '0', '1', '2' ] // Array of NFT token IDs
```

### **3️⃣ Get the Metadata URI of a Specific NFT**
Retrieve the IPFS metadata URI:
```javascript
const uri = await nft.tokenURI(0); // Replace 0 with the actual tokenId
console.log(uri);
```
✅ **Expected Output:**
```
ipfs://bafybei... // The NFT's metadata URL on IPFS
```

### **4️⃣ Fetch and View Metadata from IPFS**
Once you have the IPFS URI, open it in a browser:
```bash
https://ipfs.io/ipfs/bafybei...  # Replace with the actual CID
```
OR fetch via JavaScript:
```javascript
const ipfsHash = "QmWsmNDoWdUN4ikY8hqJqpWNDyBwj8z9dBz5hV7PfgBcNY";
const response = await fetch(`https://gateway.pinata.cloud/ipfs/${ipfsHash}`);
console.log("Content-Type:", response.headers.get("content-type"));

```

### **5️⃣ Get the Collection of an NFT**
Retrieve the collection name of an NFT:
```javascript
const collection = await nft.getCollection(0); // Replace 0 with tokenId
console.log(collection);
```
✅ **Expected Output:**
```
"MyCollection"
```

### **6️⃣ Get All NFTs in a Specific Collection** *(Optional)*
If you added the `getAllNFTsByCollection()` function:
```javascript
const nftsInCollection = await nft.getAllNFTsByCollection("MyCollection");
console.log(nftsInCollection);
```
✅ **Expected Output:**
```
[ '1', '3', '5' ] // NFTs belonging to "MyCollection"
```

### **7️⃣ Exit Truffle Console**
When you're done, exit:
```bash
.exit
```

