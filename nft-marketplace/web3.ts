import Web3 from 'web3';

const providerUrl = 'https://eth-holesky.g.alchemy.com/v2/br_GFSMZg20oFmMvgZiDM-ZzfG_7_oBY';

const web3: Web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));

export default web3;