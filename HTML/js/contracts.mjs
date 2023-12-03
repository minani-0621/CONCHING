const contract = require('./contracts-nfn.sol');

module.exports = {
  nfnContract: contract
}
// Khởi tạo web3
var web3 = new Web3(window.ethereum);

// Khởi tạo kết nối web3
const web3 = new Web3(window.ethereum);

// Lấy tài khoản được cấp quyền
const accounts = await web3.eth.getAccounts();

// Khởi tạo contract
const nftContract = new web3.eth.Contract(NFTContract.abi, CONTRACT_ADDRESS);

// Khởi tạo contract
var nfn;
var nfnContract = new web3.eth.Contract(nfnContract.abi, CONTRACT_ADDRESS);