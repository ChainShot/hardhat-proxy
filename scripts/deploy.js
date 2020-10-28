const fs = require('fs');
const path = require('path');

async function main() {
  const Hello = await ethers.getContractFactory("Hello");
  const hello = await Hello.deploy();
  await hello.deployed();

  const Proxy = await ethers.getContractFactory("Proxy");
  const proxy = await Proxy.deploy(hello.address);
  await proxy.deployed();

  console.log(`Deployed proxy @ ${proxy.address}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
