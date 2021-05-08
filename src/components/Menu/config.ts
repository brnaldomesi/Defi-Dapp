import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://exchange.dragonballfinance.org/',
      },
      {
        label: 'Liquidity',
        href: 'http://exchange.dragonballfinance.org/#/pool',
      },
    ],
  },
  {
    label: 'Mines',
    icon: 'FarmIcon',
    href: '/mines',
  },
  {
    label: 'Nodes',
    icon: 'PoolIcon',
    href: '/nodes',
  },
  {
    label: 'Layer 1',
    icon: 'LayerIcon',
    href: '/layer/info',
  },
  {
    label: 'Super Saiyan Pool',
    icon: 'PoolIcon',
    href: '/supersaiyanpool',
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'Nft',
    icon: 'NftIcon',
    href: '/Nft',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/Lottery',
  },
  {
    label: 'Referrals',
    icon: 'TicketIcon',
    href: '/referrals',
  },
  {
    label: 'Gaming App',
    icon: 'NftIcon',
    href: '/Gaming',
  },
  {
    label: 'DBALL Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'BSC Scan',
        href: 'https://bscscan.com/token/0xceB2f5e9C7F2D3BCd12A7560D73c56f3396af3F9',
      },
      {
        label: 'Price Graph',
        href: 'https://dex.guru/token/0xceB2f5e9C7F2D3BCd12A7560D73c56f3396af3F9-bsc',
      },
      {
        label: 'DApp Radar',
        href: 'https://dappradar.com/binance-smart-chain/defi/dragonball-finance',
      },
    ],
  },
  {
    label: 'SENZU Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'BSC Scan',
        href: 'https://bscscan.com/token/0xcBA1813Ede683333020cedea7C3b63FbaC28e78e',
      },
      {
        label: 'Price Graph',
        href: 'https://dex.guru/token/0xcBA1813Ede683333020cedea7C3b63FbaC28e78e-bsc',
      },
      {
        label: 'DApp Radar',
        href: 'https://dappradar.com/binance-smart-chain/defi/dragonball-finance',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/DragonBallFinance',
      },
      {
        label: 'Docs',
        href: 'https://docs.dragonballfinance.org/',
      },
      {
        label: 'Blog',
        href: 'https://dragonballfinance.medium.com/',
      },
      {
        label: 'Whitepaper',
        href: 'https://dragonballfinance.org/Whitepaper.pdf',
      },
    ],
  },
  {
    label: 'Roadmap',
    icon: 'RoadmapIcon',
    href: 'https://dragonballfinance.org/Roadmap',
  },
  {
    label: 'Techrate Audit',
    icon: 'AuditIcon',
    href: 'https://dragonballfinance.org/Dball.pdf',
  },
]

export default config
