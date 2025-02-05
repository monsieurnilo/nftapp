interface Nft {
    name: string;
    image: string;
    description: string;
    proprietaire: string;
    prix: number;
    auteur: string;
    date: string;
}

function NftCard({ nft }: { nft: Nft }) {
    return (
        <>
            <article className="flex column p-1" style={{ flex: '1 1 calc(33.333% - 1rem)' }}>
                <header>
                    <h2 className="capitalize">{nft.name} de {nft.auteur}</h2>
                </header>
                <img className="width" src={nft.image} alt={nft.name} />
                <p className="normal">
                    {nft.description}
                </p>
                <hr></hr>
                <p className="normal">
                    Propriétaire : {nft.proprietaire}
                </p>
                <footer className="flex space-between align-center">
                    <mark>{nft.prix}</mark>
                    <button className="default">Button</button>
                </footer>
            </article>
        </>
    );
}

export default NftCard;