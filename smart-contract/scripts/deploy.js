const hre = require("hardhat");

async function main(){
    const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const UnlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

    const lockedAmount = hre.ether.utils.parseEther("0.001");

    const Lock = await hre.ethers.getContractFactory("Lock");
    const lock = await Lock.deploy(UnlockTime, {value: lockedAmount});

    await lock.deployed();
    console.log('lock deployed to {lock address}');


}

main().catch((error) =>{
    console.error(error);
    process.exitCode = 1;
})