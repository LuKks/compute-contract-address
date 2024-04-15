const rlp = require('rlp')
const keccak = require('keccak')

module.exports = function computeContractAddress (sender, nonce) {
  const encoded = Buffer.from(rlp.encode([sender, nonce]))
  const contractAddressLong = keccak('keccak256').update(encoded).digest('hex')

  return '0x' + contractAddressLong.substr(24)
}
