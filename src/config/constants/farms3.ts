import contracts from './contracts'
import { Farm3Config, QuoteToken } from './types'

const farms3: Farm3Config[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'SENZU-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xcb8e10cd31ebb2633425cd4f579221ad126da040',
    },
    tokenSymbol: 'SENZU',
    tokenAddresses: {
      97: '',
      56: '0xcBA1813Ede683333020cedea7C3b63FbaC28e78e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'SENZU-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xc6d0aebc95b7cfee7c0212cf5a1d0e00e9209fa4',
    },
    tokenSymbol: 'SENZU',
    tokenAddresses: {
      97: '',
      56: '0xcBA1813Ede683333020cedea7C3b63FbaC28e78e',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
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
    pid: 4,
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
    pid: 7,
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
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'SENZU',
    lpAddresses: {
      97: '',
      56: '0xcb8e10cd31ebb2633425cd4f579221ad126da040', // VIKING-BUSD LP
    },
    tokenSymbol: 'SENZU',
    tokenAddresses: {
      97: '',
      56: '0xcBA1813Ede683333020cedea7C3b63FbaC28e78e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'DBALL',
    lpAddresses: {
      97: '',
      56: '0x55d06d963cdc4405e204fb1585b45b5e8e353719', // VIKING-BUSD LP
    },
    tokenSymbol: 'DBALL',
    tokenAddresses: {
      97: '',
      56: '0xceb2f5e9c7f2d3bcd12a7560d73c56f3396af3f9',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms3
