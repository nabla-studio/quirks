export interface SuggestCW20Token {
  contractAddress: string;
  viewingKey?: string;
  imageURL?: string;
  coinGeckoId?: string;
}

export const SuggestTokenTypes = {
  CW20: 'cw20',
  ERC20: 'erc20',
} as const;

export type SuggestTokenType =
  (typeof SuggestTokenTypes)[keyof typeof SuggestTokenTypes];

export interface SuggestToken {
  chainId: string;
  chainName: string;
  type: SuggestTokenType;
  tokens: SuggestCW20Token[];
}
