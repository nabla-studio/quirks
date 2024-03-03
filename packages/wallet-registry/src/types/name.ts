export const WalletNames = [
  'xdefiextension',
  'trustwalletmobile',
  'stationextension',
  'trustwalletextension',
  'shellextension',
  'okxextension',
  'leapmobile',
  'leapmetamasksnap',
  'leapextension',
  'keplrmobile',
  'keplrextension',
  'cosmostation',
  'cosmostationextention',
] as const;

export type WalletName = (typeof WalletNames)[keyof typeof WalletNames];
