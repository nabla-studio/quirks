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
  getOfflineSigner: async (chainId) => {
    assertIsDefined(get().wallet);

    await get().enable({ chainIds: [chainId] });

    return get().wallet!.getOfflineSigner(chainId, get().signOptions);
  },
  getOfflineSignerOnlyAmino: async (chainId) => {
    assertIsDefined(get().wallet);

    await get().enable({ chainIds: [chainId] });

    return get().wallet!.getOfflineSignerOnlyAmino(chainId, get().signOptions);
  },
  getOfflineSignerAuto: async (chainId) => {
    assertIsDefined(get().wallet);

    await get().enable({ chainIds: [chainId] });

    return get().wallet!.getOfflineSignerAuto(chainId, get().signOptions);
  },
  signAmino: async (chainId, signDoc) => {
    assertIsDefined(get().wallet);

    await get().enable({ chainIds: [chainId] });

    const address = get().getAddress(chainId);

    assertIsDefined(address);

    return get().wallet!.signAmino(
      chainId,
      address,
      signDoc,
      get().signOptions,
    );
  },
  signDirect: async (chainId, signDoc) => {
    assertIsDefined(get().wallet);

    await get().enable({ chainIds: [chainId] });

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
