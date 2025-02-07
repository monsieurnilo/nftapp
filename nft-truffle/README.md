NFT Marketplace - Setup and Deployment

Environment Variables (.env file)

Ensure you have the following environment variables configured:

PRIVATE_KEY=your_metamask_private_key
NFT_STORAGE_API_KEY=your_nft_storage_api_key
ALCHEMY_API_URL=your_alchemy_api_url
CONTRACT_ADDRESS=your_contract_address  # This is set after deployment

1️⃣ Compile and Deploy the Smart Contract

Run the following commands to compile and deploy the smart contract to Sepolia:

truffle compile
truffle migrate --network sepolia --reset

After deployment, update your .env file with the contract address:

CONTRACT_ADDRESS=0xYourDeployedContractAddress

2️⃣ Mint an NFT

Once the contract is deployed and the .env file is updated, mint an NFT by running:

node mintNFT.js

Expected output:

Metadata URL: ipfs://bafybei...
✅ NFT Minted! Token ID: 0

3️⃣ Retrieve Minted NFTs

After minting an NFT, retrieve its details using Truffle Console.

1️⃣ Open Truffle Console for Sepolia

Run:

truffle console --network sepolia

Expected output:

truffle(sepolia)>

2️⃣ Get All Minted NFTs

Run:

const nft = await NFTMarketplace.deployed();
const allNFTs = await nft.getAllNFTs();
console.log(allNFTs);

✅ Expected Output:

[ '0', '1', '2' ] // Array of NFT token IDs

3️⃣ Get the Metadata URI of a Specific NFT

Retrieve the IPFS metadata URI:

const uri = await nft.tokenURI(0); // Replace 0 with the actual tokenId
console.log(uri);

✅ Expected Output:

ipfs://bafybei... // The NFT's metadata URL on IPFS

4️⃣ Fetch and View Metadata from IPFS

Once you have the IPFS URI, open it in a browser:

https://ipfs.io/ipfs/bafybei...  # Replace with the actual CID

OR fetch via JavaScript:

const metadata = await fetch("https://ipfs.io/ipfs/bafybei...").then(res => res.json());
console.log(metadata);

✅ Expected Output:

{
  "name": "My First NFT",
  "description": "This is my first NFT stored on IPFS.",
  "image": "ipfs://bafybeib2aabc123.../image.png",
  "attributes": [
    { "trait_type": "Rarity", "value": "Unique" },
    { "trait_type": "Power", "value": 100 }
  ]
}

5️⃣ Get the Collection of an NFT

Retrieve the collection name of an NFT:

const collection = await nft.getCollection(0); // Replace 0 with tokenId
console.log(collection);

✅ Expected Output:

"MyCollection"

6️⃣ Get All NFTs in a Specific Collection (Optional)

If you added the getAllNFTsByCollection() function:

const nftsInCollection = await nft.getAllNFTsByCollection("MyCollection");
console.log(nftsInCollection);

✅ Expected Output:

[ '1', '3', '5' ] // NFTs belonging to "MyCollection"

7️⃣ Exit Truffle Console

When you're done, exit:

.exit