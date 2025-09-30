const { ethers } = require("ethers");

async function main() {
  // używamy publicznego RPC (Alchemy demo)
  const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/demo");

  const blockNumber = await provider.getBlockNumber();
  console.log("Current Ethereum block:", blockNumber);

  const address = "0x00000000219ab540356cBB839Cbe05303d7705Fa"; // beacon deposit contract
  const balance = await provider.getBalance(address);
  console.log("Balance of", address, "is", ethers.utils.formatEther(balance), "ETH");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
