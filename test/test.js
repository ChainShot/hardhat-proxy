const { assert } = require("chai");

describe("Hello Proxy", function() {
  let helloProxy;
  let hello;
  let proxy;
  before(async () => {
    const Hello = await ethers.getContractFactory("Hello");
    const hello = await Hello.deploy();
    await hello.deployed();

    const Proxy = await ethers.getContractFactory("Proxy");
    const proxy = await Proxy.deploy(hello.address);
    await proxy.deployed();

    helloProxy = Hello.attach(proxy.address);
  });

  it("should allow me to communicate through the proxy", async function() {
    assert.equal(await helloProxy.hello(), "Hello");
  });
});
