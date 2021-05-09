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
        href: 'https://exchange.pancakeswap.finance//#/swap?inputCurrency=BNB&outputCurrency=0xA6227a81CC18b35fEdd709F7FC9d1f3e0acDAdf8',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0xA6227a81CC18b35fEdd709F7FC9d1f3e0acDAdf8',
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
    label: 'Furnace',
    icon: 'LayerIcon',
    href: '/layer/info',
  },
  {
    label: 'Overlooks',
    icon: 'PoolIcon',
    href: '/supersaiyanpool',
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
    label: 'Coal info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'BSC Scan',
        href: 'https://bscscan.com/token/0xA6227a81CC18b35fEdd709F7FC9d1f3e0acDAdf8',
      },
      {
        label: 'Price Graph',
        href: '#',
      },
      {
        label: 'DApp Radar',
        href: '#',
      },
    ],
  },
  {
    label: 'Diamond Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'BSC Scan',
        href: '#',
      },
      {
        label: 'Price Graph',
        href: '#',
      },
      {
        label: 'DApp Radar',
        href: 'https://dappradar.com/binance-smart-chain/defi/',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/mountaindefi',
      },
      {
        label: 'Docs',
        href: 'https://docs.mountaindefi.com/',
      },
      {
        label: 'Blog',
        href: 'https://mountaindefi.medium.com/',
      },
    ],
  },
  {
    label: 'Roadmap',
    icon: 'RoadmapIcon',
    href: 'https://mountaindefi.com/Roadmap',
  },
  {
    label: 'Techrate Audit',
    icon: 'AuditIcon',
    href: 'https://mountaindefi.org/Coal.pdf',
  },
]

export default config
