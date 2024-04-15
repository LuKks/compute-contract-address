const rlp = require('rlp')
const keccak = require('keccak')

module.exports = function computeContractAddress (sender, nonce) {
  const input = [sender, parseInt(nonce)]
  const encoded = Buffer.from(rlp.encode(input))
  const contractAddressLong = keccak('keccak256').update(encoded).digest('hex')

  return '0x' + contractAddressLong.substr(24)
}
