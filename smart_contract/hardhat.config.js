//  https://eth-ropsten.alchemyapi.io/v2/ZsLCL_e674JVyqpgmhxA71wFdC-QhFay

require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ZsLCL_e674JVyqpgmhxA71wFdC-QhFay',
      accounts: ['4b4b35507ca5fdebe9db44ff4b334c744f0a3bd55193c6f35bdae8c1fc5b5b5e'],
    },
  },
};