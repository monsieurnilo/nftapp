import React from 'react';

interface Nft {
    tokenId: string;
    tokenURI: string;
    collection: string;
}

function NftListCard({ nft }: { nft: Nft }) {
    return (
        <article className="flex column p-1" style={{ flex: '1 1 calc(33.333% - 1rem)', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '8px' }}>
            <header>
                <h2 className="capitalize">Collection: {nft.collection}</h2>
            </header>
            <img className="width" src={`https://ipfs.io/ipfs/${nft.tokenURI.split('ipfs://')[1]}`} alt={`NFT ${nft.tokenId}`} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            <footer className="flex space-between align-center" style={{ marginTop: '8px' }}>
                <mark>ID: {nft.tokenId}</mark>
            </footer>
        </article>
    );
}

export default NftListCard;