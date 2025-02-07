const NFTMarketplace = artifacts.require("NFTMarketplace");

module.exports = async function (deployer, network, accounts) {
  // Use the first account as the contract owner
  await deployer.deploy(NFTMarketplace, accounts[0]);
};
