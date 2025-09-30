const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleVault", function () {
  it("accepts deposits and allows withdrawals", async function () {
    const [user] = await ethers.getSigners();
    const Vault = await ethers.getContractFactory("SimpleVault");
    const vault = await Vault.deploy();
    await vault.deployed();

    // deposit 1 ETH
    const oneEth = ethers.utils.parseEther("1");
    await expect(await vault.connect(user).deposit({ value: oneEth }))
      .to.emit(vault, "Deposited")
      .withArgs(user.address, oneEth);

    expect(await vault.balances(user.address)).to.equal(oneEth);

    // withdraw 0.4 ETH
    const amount = ethers.utils.parseEther("0.4");
    await expect(await vault.connect(user).withdraw(amount))
      .to.emit(vault, "Withdrawn")
      .withArgs(user.address, amount);

    expect(await vault.balances(user.address)).to.equal(oneEth.sub(amount));
  });
});
