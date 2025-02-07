import NftListCard from "./NtfListCards";

const testNfts = [
    {
        id: 1,
        name: "NFT 1",
        image: "https://cdn.pixabay.com/photo/2024/12/28/03/20/parrot-9295172_960_720.jpg",
        description: "Description du NFT 1",
        proprietaire: "Propriétaire 1",
        prix: 1.5,
        auteur: "Auteur 1",
        date: "2023-01-01"
    },
    {
        id: 2,
        name: "NFT 2",
        image: "https://cdn.pixabay.com/photo/2024/12/28/03/20/parrot-9295172_960_720.jpg",
        description: "Description du NFT 2",
        proprietaire: "Propriétaire 2",
        prix: 2.5,
        auteur: "Auteur 2",
        date: "2023-01-02"
    },
    {
        id: 3,
        name: "NFT 3",
        image: "https://cdn.pixabay.com/photo/2024/12/28/03/20/parrot-9295172_960_720.jpg",
        description: "Description du NFT 3",
        proprietaire: "Propriétaire 3",
        prix: 3.5,
        auteur: "Auteur 3",
        date: "2023-01-03"
    }
];

function NftList() {
    const nfts = testNfts;
    return (
        <>
            <div className="flex wrap spacing-x-1 spacing-y-1">
                {nfts.map((nft) => (
                    <NftListCard key={nft.id} nft={nft} />
                ))}
            </div>
        </>
    );
}

export default NftList;