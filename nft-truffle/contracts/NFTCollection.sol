// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTMarketplace is ERC721URIStorage, Ownable {
    uint256 public nextTokenId;
    mapping(uint256 => uint256) public nftPrices; // Maps tokenId to its price
    mapping(uint256 => string) public nftCollections; // Maps tokenId to a collection name
    uint256[] public allNFTs; // Array to store all token IDs

    event NFTMinted(uint256 tokenId, string tokenURI, string collection, address owner);
    event NFTListed(uint256 tokenId, uint256 price, address seller);
    event NFTSold(uint256 tokenId, uint256 price, address seller, address buyer);

    constructor(address initialOwner) ERC721("NFT Marketplace", "NFTM") Ownable(initialOwner) {}

    /**
     * @dev Mint a new NFT, associate it with a collection, and assign metadata.
     * tokenURI = IPFS hash : mintNFT("ipfs://<metadata-hash>", "MyCollection")
     */
    function mintNFT(string memory tokenURI, string memory collection) public onlyOwner {
        uint256 tokenId = nextTokenId;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);
        nftCollections[tokenId] = collection;
        allNFTs.push(tokenId); // Add the tokenId to the allNFTs array
        nextTokenId++;

        emit NFTMinted(tokenId, tokenURI, collection, msg.sender);
    }

    /**
     * @dev List an NFT for sale by setting a price.
     */
    function listNFT(uint256 tokenId, uint256 price) public {
        require(ownerOf(tokenId) == msg.sender, "You do not own this NFT");
        require(price > 0, "Price must be greater than zero");

        nftPrices[tokenId] = price;

        emit NFTListed(tokenId, price, msg.sender);
    }

    /**
     * @dev Buy an NFT that is listed for sale.
     */
    function buyNFT(uint256 tokenId) public payable {
        uint256 price = nftPrices[tokenId];
        address seller = ownerOf(tokenId);

        require(price > 0, "This NFT is not for sale");
        require(msg.value == price, "Incorrect payment amount");

        // Transfer funds to the seller
        payable(seller).transfer(msg.value);

        // Transfer the NFT to the buyer
        _transfer(seller, msg.sender, tokenId);

        // Clear the listing
        nftPrices[tokenId] = 0;

        emit NFTSold(tokenId, price, seller, msg.sender);
    }

    /**
     * @dev Get the collection name of an NFT.
     */
    function getCollection(uint256 tokenId) public view returns (string memory) {
        return nftCollections[tokenId];
    }

    /**
     * @dev Get all minted NFTs.
     * Returns an array of all token IDs.
     */
    function getAllNFTs() public view returns (uint256[] memory) {
        return allNFTs;
    }
}
