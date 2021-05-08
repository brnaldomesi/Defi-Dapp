import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'DBALL-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x55d06D963CDc4405E204FB1585b45b5E8e353719',
    },
    tokenSymbol: 'DBALL',
    tokenAddresses: {
      97: '',
      56: '0xceB2f5e9C7F2D3BCd12A7560D73c56f3396af3F9',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'DBALL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3330Bde1FfB5E358FCadfA266f98c95D7D5DC9B9',
    },
    tokenSymbol: 'DBALL',
    tokenAddresses: {
      97: '',
      56: '0xceB2f5e9C7F2D3BCd12A7560D73c56f3396af3F9',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 29,
    risk: 5,
    lpSymbol: 'DBALL-SENZU LP',
    lpAddresses: {
      97: '',
      56: '0x7CA6751Ae5CB4676ace4c2AA0D039778642e2702',
    },
    tokenSymbol: 'DBALL',
    tokenAddresses: {
      97: '',
      56: '0xceB2f5e9C7F2D3BCd12A7560D73c56f3396af3F9',
    },
    quoteTokenSymbol: QuoteToken.SENZU,
    quoteTokenAdresses: contracts.senzu,
  },
  {
    pid: 30,
    risk: 5,
    lpSymbol: 'DBALL-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x4a228A09B2ED4B9995b05F87bE60E7D4dCCf28C4',
    },
    tokenSymbol: 'DBALL',
    tokenAddresses: {
      97: '',
      56: '0xceB2f5e9C7F2D3BCd12A7560D73c56f3396af3F9',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 31,
    risk: 5,
    lpSymbol: 'DBALL-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0xeA28357967d1c80b86928DAE71609f1456CC9938',
    },
    tokenSymbol: 'DBALL',
    tokenAddresses: {
      97: '',
      56: '0xceB2f5e9C7F2D3BCd12A7560D73c56f3396af3F9',
    },
    quoteTokenSymbol: QuoteToken.CAKE2,
    quoteTokenAdresses: contracts.cake2,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 1,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 2,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 7,
    risk: 2,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 1,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 4,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    risk: 5,
    lpSymbol: 'EGG-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 10,
    risk: 5,
    lpSymbol: 'ALPHA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4e0f3385d932f7179dee045369286ffa6b03d887',
    },
    tokenSymbol: 'ALPHA',
    tokenAddresses: {
      97: '',
      56: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 11,
    risk: 5,
    lpSymbol: 'LINK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xaebe45e3a03b734c68e5557ae04bfc76917b4686',
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      97: '',
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 12,
    risk: 5,
    lpSymbol: 'FIL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x35fe9787f0ebf2a200bac413d3030cf62d312774',
    },
    tokenSymbol: 'FIL',
    tokenAddresses: {
      97: '',
      56: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 13,
    risk: 5,
    lpSymbol: 'XCUR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x54482282df17f523fee3af5d10bcfba080cf2588',
    },
    tokenSymbol: 'XCUR',
    tokenAddresses: {
      97: '',
      56: '0x708c671aa997da536869b50b6c67fa0c32ce80b2',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 14,
    risk: 5,
    lpSymbol: 'UNI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4269e7f43a63cea1ad7707be565a94a9189967e9',
    },
    tokenSymbol: 'UNI',
    tokenAddresses: {
      97: '',
      56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 15,
    risk: 5,
    lpSymbol: 'LIT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x60bb03d1010b99ceadd0dd209b64bc8bd83da161',
    },
    tokenSymbol: 'LIT',
    tokenAddresses: {
      97: '',
      56: '0xb59490ab09a0f526cc7305822ac65f2ab12f9723',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'DBALL',
    lpAddresses: {
      97: '',
      56: '0x55d06D963CDc4405E204FB1585b45b5E8e353719', // EGG-BUSD LP
    },
    tokenSymbol: 'DBALL',
    tokenAddresses: {
      97: '',
      56: '0xceB2f5e9C7F2D3BCd12A7560D73c56f3396af3F9',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x55d06D963CDc4405E204FB1585b45b5E8e353719', // EGG-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 19,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 17,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 20,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 21,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 22,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'ALPHA',
    lpAddresses: {
      97: '',
      56: '0x5ba0d670ea3db79067ee6861b960f06d53712e18', // DAI-BUSD LP
    },
    tokenSymbol: 'ALPHA',
    tokenAddresses: {
      97: '',
      56: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 23,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'LINK',
    lpAddresses: {
      97: '',
      56: '0xe54a9d8412287cfc675cae18a0011483ef975f05', // DAI-BUSD LP
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      97: '',
      56: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 24,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'SALT',
    lpAddresses: {
      97: '',
      56: '0x6596f770786915556c47e301cc8290aa14288d99', // DAI-BUSD LP
    },
    tokenSymbol: 'SALT',
    tokenAddresses: {
      97: '',
      56: '0x2849b1ae7e04a3d9bc288673a92477cf63f28af4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 25,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'FIL',
    lpAddresses: {
      97: '',
      56: '0x8d2cc42acf64647dc21c43fb7fff3b8d0551194f', // DAI-BUSD LP
    },
    tokenSymbol: 'FIL',
    tokenAddresses: {
      97: '',
      56: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 27,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'UNI',
    lpAddresses: {
      97: '',
      56: '0x8f3624467993967f89c30c5f65d270b154b1b0fd', // DAI-BUSD LP
    },
    tokenSymbol: 'UNI',
    tokenAddresses: {
      97: '',
      56: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 28,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'LIT',
    lpAddresses: {
      97: '',
      56: '0x581c5de0cf860b740fe1fe96d973631bdd157a5b', // DAI-BUSD LP
    },
    tokenSymbol: 'LIT',
    tokenAddresses: {
      97: '',
      56: '0xb59490ab09a0f526cc7305822ac65f2ab12f9723',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 32,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'SENZU',
    lpAddresses: {
      97: '',
      56: '0xCb8e10cd31EBB2633425CD4f579221Ad126Da040', // DAI-BUSD LP
    },
    tokenSymbol: 'SENZU',
    tokenAddresses: {
      97: '',
      56: '0xcba1813ede683333020cedea7c3b63fbac28e78e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms