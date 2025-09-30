# Ethereum Playground (Hardhat)

Small demo project to show I'm tinkering with **Ethereum/Smart Contracts**.  
It includes a minimal ETH vault contract, deployment script, and basic tests.

## What’s inside
- `contracts/SimpleVault.sol` – simple ETH deposit/withdraw vault
- `scripts/deploy.js` – deploys the contract to a local/remote network
- `test/SimpleVault.t.js` – unit tests (deposit / withdraw)
- `hardhat.config.js` – Hardhat setup
- `package.json` – scripts and dev deps

## Quick start
```bash
# 1) Install deps
npm install

# 2) Run tests on a local Hardhat network
npx hardhat test

# 3) Start a local node (in a separate terminal)
npx hardhat node

# 4) Deploy to the local node
npx hardhat run scripts/deploy.js --network localhost
```

## Notes
- This is a demo-only vault for learning purposes — **do not use in production**.
- Tested with Node 18+.
