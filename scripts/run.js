const main = async() => {
    const gameContractFactory = await hre.ethers.getContractFactory('MainGame');
    const gameContract = await gameContractFactory.deploy(
        ["00001", "00002", "00003"],
        ["https://i.imgur.com/SKVTkMu.png",
        "https://i.imgur.com/A7Espdx.png",
        "https://i.imgur.com/Qsxf2g2.png"
        ],
        [100,200,300],
        [100,50,25]
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    let returnedTokenUrl = await gameContract.tokenURI(1);
    console.log("Token URL:", returnedTokenUrl);
};

const runMain = async() => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();