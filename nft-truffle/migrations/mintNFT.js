const { NFTStorage, File } = require("nft.storage");
const fs = require("fs");
const Web3 = require("web3");
require("dotenv").config();

const NFT_STORAGE_API_KEY = process.env.NFT_STORAGE_API_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;; // Replace with your contract address
const ALCHEMY_URL = process.env.ALCHEMY_API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY; // Your MetaMask private key

const ABI = require("./build/contracts/NFTMarketplace.json").abi; // Import contract ABI

async function uploadToIPFS(name, description, imagePath) {
  const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });
  const image = fs.readFileSync(imagePath);
  
  const metadata = await client.store({
    name,
    description,
    image: new File([image], imagePath, { type: "image/png" }),
  });

  console.log("Metadata URL:", metadata.url);
  return metadata.url; // Returns IPFS metadata URI
}

async function mintNFT(imagePath, collection) {
  try {
    console.log("Uploading image to IPFS...");
    const metadataURI = await uploadToIPFS("My NFT", "This is an NFT!", imagePath);

    console.log("Connecting to Ethereum via Alchemy...");
    const web3 = new Web3(new Web3.providers.HttpProvider(ALCHEMY_URL));
    const account = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
    web3.eth.accounts.wallet.add(account);

    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    
    console.log("Minting NFT on Sepolia...");
    const tx = await contract.methods.mintNFT(metadataURI, collection).send({
      from: account.address,
      gas: 500000,
    });

    console.log(`✅ NFT Minted! Token ID: ${tx.events.NFTMinted.returnValues.tokenId}`);
  } catch (error) {
    console.error("Error minting NFT:", error);
  }
}

// Replace "image.png" with your actual image file in the same directory
mintNFT("image.png", "MyCollection");
