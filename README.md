# compute-contract-address

Calculate the contract address from a sender before deployment

```
npm i compute-contract-address
```

## Usage

```js
const computeContractAddress = require('compute-contract-address')

// Random sender picked from a block explorer
const sender = '0x1db5fd3c59e8a3723ab3f044304fdbfe6dc4aaba'
const nonce = 0xff
const contractAddress = computeContractAddress(sender, nonce)
// => '0x9ee59cc206ac17d7d0ec1073e2773651ed7ab7b7'
```

## License

MIT
