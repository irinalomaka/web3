// NOTE: Need to compile with browserify viz.js -o main.js

//var account = '0x4cf24bf15bfead008b22ea33b7c99a82326031a7'; // Pi
var account = '0xa0d2e0ccfc48423e269fa62adcba67aba29efac2'; // Dev
var contractAddress = '0x8117241ae80Ae91D8Ba4c943eCe083CBa9f291f0';


if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider);
} else {
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
      if(!web3.isConnected()) {
        console.log("not connected");
      } else {
        console.log("connected");
      }
};
  
console.log("account " + account);

web3.eth.defaultAccount = account;

console.log("abi  " + abiArray);

var contract = web3.eth.contract(abiArray).at(contractAddress);

contract.getBooksCount(function(err, result){
    $("#info").html("<strong>Books added:</strong> " + contract.address);
    if(!err)
      $("#info").html("<strong>Books added:</strong> " + result);
      console.log("getBooksCount " + result);
});
// access setBook on Update button click to set the book details in the contract
$("#button").click(function() {
    contract.setBook($("#title").val(), $("#author").val(), $("#language").val());
    console.log("set book  " + $("#title").val(), $("#author").val(), $("#language").val());
});
