/**
   Workflow Overview

    Backend/Script (uploadNFT):
        The uploadNFT script is responsible for uploading the NFT image and metadata to IPFS.
        It generates a metadata URI (e.g., ipfs://<hash>), which can then be used in the smart contract's mintNFT function.

    Frontend:
        Your frontend will provide a form for users to input NFT details (name, description, and upload an image).
        When the user submits the form, the frontend will:
            Call the uploadNFT function to upload the image and metadata to IPFS.
            Use the returned metadata URI to call your smart contract's mintNFT function, minting the NFT.

    Smart Contract:
        The smart contract will store the metadata URI (from IPFS) on-chain and associate it with the NFT.

    Frontend Display:
        The frontend fetches the metadata URI from the blockchain, retrieves the metadata from IPFS, and uses it to render the NFT (e.g., image, name, description).
 */

const { NFTStorage, File } = require('nft.storage');
const fs = require('fs');
require('dotenv').config();

const NFT_STORAGE_API_KEY = process.env.NFT_STORAGE_API_KEY;

async function uploadNFT(name, description, imagePath) {
  const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });

  // Read the image file
  const image = fs.readFileSync(imagePath);

  // Upload metadata and image
  const metadata = await client.store({
    name,
    description,
    image: new File([image], 'nft-image.png', { type: 'image/png' }),
  });

  console.log('Metadata URL:', metadata.url); // Outputs: ipfs://<hash>
  return metadata.url;
}