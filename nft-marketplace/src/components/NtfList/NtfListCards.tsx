interface Nft {
    tokenId: any;
    tokenURI: string;
    collection: string;
}

function NftListCard({ nft }: { nft: Nft }) {
    return (
        <article className="flex column p-1" style={{ flex: '1 1 calc(33.333% - 1rem)' }}>
            <header>
                <h2 className="capitalize">Collection: {nft.collection}</h2>
            </header>
            <img className="width" src={nft.tokenURI} alt={`NFT ${nft.tokenId}`} />
            <footer className="flex space-between align-center">
                <mark>ID: {nft.tokenId}</mark>
                <button className="default">Voir</button>
            </footer>
        </article>
    );
}

export default NftListCard;