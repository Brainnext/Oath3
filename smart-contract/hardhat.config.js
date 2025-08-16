require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path: "./env"});

const PRIVATE_KEY = process.env.PRIVATE_KE;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    monadTestnet: {
      url: "https://testnet-rpc.monad.xyz",
      acccounts: [PRIVATE_KEY],
      chainId: 20143,
    },
  },
};
