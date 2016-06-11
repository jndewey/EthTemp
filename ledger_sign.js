dao.newProposal.sendTransaction(
    pfoffer.address,
    web3.toWei(50, "ether"), // this is the total costs of the offer
    "PFOffer contract description will go in this string",
    "0x2ca15122", // transaction bytecode to call sign() on PFOffer
    2 weeks, // proposal debate period
    false, // no, this is not a split
    {
        from: contractor,
        value: web3.toWei(20, "ether"), // this is the proposal deposit
        gas: 1000000
    });
