const test = require('brittle')
const computeContractAddress = require('./index.js')

test('basic', function (t) {
  const sender = '0x1db5fd3c59e8a3723ab3f044304fdbfe6dc4aaba'
  const nonce = 0xff
  const contractAddress = computeContractAddress(sender, nonce)

  t.is(contractAddress, '0x9ee59cc206ac17d7d0ec1073e2773651ed7ab7b7')
})

test('sender with checksum', function (t) {
  const sender = '0x1db5Fd3c59e8A3723AB3F044304fDBfE6Dc4Aaba'
  const nonce = 0xff
  const contractAddress = computeContractAddress(sender, nonce)

  t.is(contractAddress, '0x9ee59cc206ac17d7d0ec1073e2773651ed7ab7b7')
})

test('nonce is a string', function (t) {
  const sender = '0xddc143fa0f77ae51021c3521d358604b20ab860a'
  const nonce = '0x0'
  const contractAddress = computeContractAddress(sender, nonce)

  t.is(contractAddress, '0x7c6d0c8f963c211786a3a72f9ea03fad75298871')
})

test.skip('benchmark', function (t) {
  const sender = '0x3fa29f50D7FA913a6E325e99522D1cf561d6A0E3'

  const cycles = 3
  let nonce = 0
  let avg = 0

  for (let i = 0; i < cycles; i++) {
    const started = Date.now()
    let count = 0

    while (true) {
      computeContractAddress(sender, nonce++)
      count++

      if (Date.now() - started >= 1000) {
        t.comment('Addresses per second: ' + count)
        avg += count
        break
      }
    }
  }

  t.comment('Average addrs per sec: ' + Math.round(avg / cycles))
})
