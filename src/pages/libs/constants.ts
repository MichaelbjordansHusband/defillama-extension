export const PRICES_API = "https://coins.llama.fi/prices/current";
export interface Prices {
  coins: {
    [key: string]: {
      price: number;
      symbol: string;
      timestamp: number;
      confidence: number;
    };
  };
}

export const PROTOCOLS_API = "https://api.llama.fi/lite/protocols2";
export const PROTOCOL_TVL_THRESHOLD = 1000000;

export const ACCOUNTS_API_V1 = "https://aww.llamao.fi/api/v1/address";

export type TagsDataV1 = Record<string, TagsDataV1Core>;

export type TagsDataV1Core = {
  behaviorals: { category: string; tag: string }[];
  entities: { category: string; tag: string }[];
  socials: { protocol: string; name: string }[];
};

export const METAMASK_LIST_CONFIG_API =
  "https://raw.githubusercontent.com/MetaMask/eth-phishing-detect/master/src/config.json";
export const DEFILLAMA_DIRECTORY_API =
  "https://raw.githubusercontent.com/DefiLlama/defillama-app/main/src/directory/directory-urls.json";

export const COINGECKO_COINS_LIST_API = "https://api.coingecko.com/api/v3/coins/list";

export const CHAIN_PREFIX = {
  ETHEREUM: "ethereum",
  BSC: "bsc",
  AVAX: "avax",
  FANTOM: "fantom",
  ARBITRUM: "arbitrum",
  POLYGON: "polygon",
  OPTIMISM: "optimism",
  CRONOS: "cronos",
  MOONRIVER: "moonriver",
  MOONBEAM: "moonbeam",
  GNOSIS: "xdai",
  BOBA: "boba",
} as const;

export const EXPLORER_CHAIN_PREFIX_MAP: { [domain: string]: string } = {
  "etherscan.io": CHAIN_PREFIX.ETHEREUM,
  "bscscan.com": CHAIN_PREFIX.BSC,
  "snowtrace.io": CHAIN_PREFIX.AVAX,
  "ftmscan.com": CHAIN_PREFIX.FANTOM,
  "arbiscan.io": CHAIN_PREFIX.ARBITRUM,
  "polygonscan.com": CHAIN_PREFIX.POLYGON,
  "optimistic.etherscan.io": CHAIN_PREFIX.OPTIMISM,
  "cronoscan.com": CHAIN_PREFIX.CRONOS,
  "moonriver.moonscan.io": CHAIN_PREFIX.MOONRIVER,
  "moonscan.io": CHAIN_PREFIX.MOONBEAM,
  "gnosisscan.io": CHAIN_PREFIX.GNOSIS,
  "bobascan.com": CHAIN_PREFIX.BOBA,
} as const;
