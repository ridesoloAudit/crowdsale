const {initialBlocktime} = require("./utils/testHelpers");

module.exports = {
  port: 8555,
  testrpcOptions: `-a 200 --time "${initialBlocktime}" -p 8555 --mnemonic "flight cute ski coffee decide milk bitter table speed orchard bag meadow"`,
  //norpc: true,
  dir: '.',
  copyPackages: ['openzeppelin-solidity'],
  skipFiles: ['test/TestToken.sol','test/TestAsureBonusesCrowdsale.sol'],
  compileCommand: 'truffle compile',
  testCommand: 'truffle test --network coverage',
};
