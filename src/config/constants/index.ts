import farmsConfig from './farms'
import farms3Config from './farms3'

const communityFarms = farmsConfig.filter((farm) => farm.isCommunity).map((farm) => farm.tokenSymbol)

const communityFarms3 = farms3Config.filter((farm) => farm.isCommunity).map((farm) => farm.tokenSymbol)

export { farmsConfig, communityFarms, farms3Config, communityFarms3 }
export { default as poolsConfig } from './pools'
export { default as ifosConfig } from './ifo'
