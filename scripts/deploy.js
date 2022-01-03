const main = async() => {
    const gameContractFactory = await hre.ethers.getContractFactory('MainGame');
    const gameContract = await gameContractFactory.deploy(
        ["00001", "00002", "00003"],
        ["https://i.imgur.com/SKVTkMu.png",
        "https://i.imgur.com/A7Espdx.png",
        "https://i.imgur.com/Qsxf2g2.png"
        ],
        [100,200,300],
        [100,50,25],
        "Crypto Punks",
        "https://i.imgur.com/Dbq8iOP.png",
        10000,
        50
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
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