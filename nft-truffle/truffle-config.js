const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {
  networks: {
    sepolia: {
      provider: () =>
        new HDWalletProvider(process.env.PRIVATE_KEY, process.env.ALCHEMY_API_URL),
      network_id: 11155111, // Sepolia network ID
      gas: 6000000, // Increase gas limit
      gasPrice: 45000000000, // Increase gas price (45 Gwei)
    },
  },
  compilers: {
    solc: {
      version: "^0.8.19",
    },
  },
};
