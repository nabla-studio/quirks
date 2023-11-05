import { assertIsDefined } from '@quirks/core';
import type { AppState, SignSlice, SignState } from '../types';
import type { StateCreator } from 'zustand/vanilla';

export const signInitialState: SignState = {
  signOptions: {
    preferNoSetFee: false,
    preferNoSetMemo: true,
    disableBalanceCheck: true,
  },
  signerOptions: undefined,
};

export const createSignSlice: StateCreator<AppState, [], [], SignSlice> = (
  _,
  get,
) => ({
  ...signInitialState,
  getOfflineSigner: (chainId) => {
    assertIsDefined(get().wallet);

    return get().wallet!.getOfflineSigner(chainId, get().signOptions);
  },
  getOfflineSignerOnlyAmino: (chainId) => {
    assertIsDefined(get().wallet);

    return get().wallet!.getOfflineSignerOnlyAmino(chainId, get().signOptions);
  },
  getOfflineSignerAuto: (chainId) => {
    assertIsDefined(get().wallet);

    return get().wallet!.getOfflineSignerAuto(chainId, get().signOptions);
  },
  signAmino: (chainId, signDoc) => {
    assertIsDefined(get().wallet);

    const address = get().getAddress(chainId);

    assertIsDefined(address);

    return get().wallet!.signAmino(
      chainId,
      address,
      signDoc,
      get().signOptions,
    );
  },
  signDirect: (chainId, signDoc) => {
    assertIsDefined(get().wallet);

    const address = get().getAddress(chainId);

    assertIsDefined(address);

    return get().wallet!.signDirect(
      chainId,
      address,
      signDoc,
      get().signOptions,
    );
  },
});
