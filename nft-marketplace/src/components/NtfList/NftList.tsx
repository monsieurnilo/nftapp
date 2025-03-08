import React, { useEffect, useState } from 'react';
import NftListCard from "./NtfListCards";
import NFTMarketplace from '../../../../nft-truffle/build/contracts/NFTMarketplace.json';
import web3 from '../../../web3';

interface Nft {
    tokenId: string;
    tokenURI: string;
    collection: string;
}

function NftList() {
    const [nfts, setNfts] = useState<Nft[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNFTs = async () => {
            try {
                const networkId = await web3.eth.net.getId();
                const deployedNetwork = NFTMarketplace.networks[networkId as unknown as keyof typeof NFTMarketplace.networks];
                const contract = new web3.eth.Contract(
                    NFTMarketplace.abi,
                    deployedNetwork && deployedNetwork.address,
                );

                const nfts = await contract.methods.getAllNFTs().call() || [];
                console.log('NFTs:', nfts); // Log des NFTs récupérés

                const nftDetails = await Promise.all(nfts.map(async (tokenId: any) => {
                    const tokenURI = await contract.methods.tokenURI(tokenId).call() as string;
                    const collection = await contract.methods.getCollection(tokenId).call() as string;
                    console.log('NFT Details:', { tokenId: tokenId.toString(), tokenURI, collection }); // Log des détails des NFTs
                    return { tokenId: tokenId.toString(), tokenURI, collection };
                }));
                setNfts(nftDetails);
            } catch (err) {
                setError('Failed to fetch NFTs');
            } finally {
                setLoading(false);
            }
        };

        fetchNFTs();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="flex wrap spacing-x-1 spacing-y-1">
            {nfts.map((nft, index) => (
                <NftListCard key={index} nft={nft} />
            ))}
        </div>
    );
}

export default NftList;