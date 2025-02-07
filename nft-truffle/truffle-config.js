const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    sepolia: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY,
          `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
        ),
      network_id: 11155111, // Sepolia network ID
      gas: 5000000,
      gasPrice: 20000000000, // 20 gwei
    },
  },
  compilers: {
    solc: {
      version: "^0.8.19",
    },
  },
};
