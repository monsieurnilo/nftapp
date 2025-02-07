const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {
  networks: {
    holesky: {
      provider: () =>
        new HDWalletProvider(process.env.PRIVATE_KEY, process.env.ALCHEMY_API_URL),
      network_id: 17000, // Holesky network ID
      gas: 6000000,
      gasPrice: 45000000000, // Adjust based on live network conditions
    },
  },
  compilers: {
    solc: {
      version: "^0.8.19",
    },
  },
};
