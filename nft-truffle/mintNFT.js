const pinataSDK = require('@pinata/sdk'); // Importing Pinata SDK properly
const fs = require('fs');
const Web3 = require('web3');
require('dotenv').config();

const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_SECRET_KEY = process.env.PINATA_SECRET_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const ALCHEMY_URL = process.env.ALCHEMY_API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const pinata = pinataSDK(PINATA_API_KEY, PINATA_SECRET_KEY); // Correct way to initialize
const ABI = require('./build/contracts/NFTMarketplace.json').abi;

async function uploadToPinata(name, description, imagePath) {
    const readableStreamForFile = fs.createReadStream(imagePath);
    const metadata = {
        name,
        keyvalues: {
            description,
        },
    };

    const options = {
        pinataMetadata: metadata,
        pinataOptions: {
            cidVersion: 0,
        },
    };

    try {
        const result = await pinata.pinFileToIPFS(readableStreamForFile, options);
        console.log('Metadata URL:', `ipfs://${result.IpfsHash}`);
        return `ipfs://${result.IpfsHash}`;
    } catch (error) {
        console.error('Error uploading to Pinata:', error);
        throw error;
    }
}

async function mintNFT(imagePath, collection) {
    try {
        console.log('Uploading image to Pinata...');
        const metadataURI = await uploadToPinata('My NFT', 'This is an NFT!', imagePath);

        console.log('Connecting to Ethereum via Alchemy...');
        const web3 = new Web3(new Web3.providers.HttpProvider(ALCHEMY_URL));
        const account = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY);
        web3.eth.accounts.wallet.add(account);

        const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

        console.log('Minting NFT on Holesky...');
        const tx = await contract.methods.mintNFT(metadataURI, collection).send({
            from: account.address,
            gas: 500000,
        });

        console.log(`✅ NFT Minted! Token ID: ${tx.events.NFTMinted.returnValues.tokenId}`);
    } catch (error) {
        console.error('Error minting NFT:', error);
    }
}

// Replace "testNFT.png" with your actual image file in the same directory
mintNFT('testNFT.png', 'MyCollection');
