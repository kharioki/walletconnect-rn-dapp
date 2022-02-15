/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");

const { HARDHAT_PORT } = process.env;

module.exports = {
  solidity: "0.7.3",
  networks: {
    localhost: { url: `http://127.0.0.1:${HARDHAT_PORT}` },
    hardhat: {
      accounts: [{"privateKey":"0x12f13d82365bfa8c0424de3ffd373d9c904938749a056413c90a8a63cdbdd0b8","balance":"1000000000000000000000"},{"privateKey":"0x5a5f9c4e34fef35515315975f88e5432641e99e387e8123745f4bc43267b288b","balance":"1000000000000000000000"},{"privateKey":"0x7a8f72b12bff97d0bd24c543334c90b775f72c5dde3fd65f73ae63aa61a7926f","balance":"1000000000000000000000"},{"privateKey":"0x8bf2dcd2fac99135cdcee990b5d16c0bc8ada7d652b0744dfe90b55cadb31e54","balance":"1000000000000000000000"},{"privateKey":"0xf5745e7698ce2f4c81339b2272e6f5c9f281dc8d930b08f65f4ec5fa608026b5","balance":"1000000000000000000000"},{"privateKey":"0x017079425f5eaee01a0c78203cfef36899eb55c82a9fa1c893c391121e8cae5d","balance":"1000000000000000000000"},{"privateKey":"0x58f584007a907accf23fae4c6a8084ce05cf600e557d92a8c814050d24d1a3ec","balance":"1000000000000000000000"},{"privateKey":"0x6855bd33b02f6a5ccfb5fabd15164208d1c7dbe7a98eee098d50e9d4129dad74","balance":"1000000000000000000000"},{"privateKey":"0xced2239e1c7077071ab397bdffc9bc05b67723b07449ffc65624ef85c21ff945","balance":"1000000000000000000000"},{"privateKey":"0x6827e6e62fb9dddf84fc27ab9e15e35b7c8dab75be7dbf2674de267e1eaca9d0","balance":"1000000000000000000000"}]
    },
  },
  paths: {
    sources: './contracts',
    tests: './__tests__/contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};