var offerContract = web3.eth.contract(pfoffer_abi);
var _offerContract = offerContract.new(
    contractor,
    "0xbb9bc244d798123fde783fcc1c72d3bb8c189413", // client DAO address
    '0x0',  // Should be a hash of the paper contract
    web3.toWei(50, "ether"), //total costs
    web3.toWei(10, "ether"), //one time costs
    web3.toWei(1, "ether"), //min daily costs
    {
        from: contractor,
        data: pfoffer_bin,
        gas: 3000000
    }, function (e, contract){
        if (e) {
            console.log(e+" at PFOffer creation!");
        } else if (typeof contract.address != 'undefined') {
            console.log("Deployed PFOffer address:" + contract.address);
        }
    });