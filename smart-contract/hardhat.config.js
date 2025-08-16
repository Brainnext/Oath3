require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    monadTestnet: {
      url: "https://testnet-rpc.monad.xyz",
      acccounts: [safely.env.PRIVATE_KEY],
      chainId: 20143,
    },
  },
};
