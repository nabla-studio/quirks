<script setup lang="ts">
import { bitsong, bitsongAssetList } from '@nabla-studio/chain-registry';

const { wallets } = useConfig();
const { accounts } = useChains();
const { connect, disconnect, connected, status } = useConnect();

const open = async (chainName: string) => {
  await suggestChains(chainName, [
    { chain: bitsong, assetList: bitsongAssetList, name: 'bitsong' },
  ]);
  await connect(chainName);
};

const send = async () => {
  const cosmos = (await import('stargazejs')).cosmos;
  const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

  const address = getAddress('osmosis');

  const msg = send({
    amount: [
      {
        denom: 'uosmo',
        amount: '1',
      },
    ],
    toAddress: address,
    fromAddress: address,
  });

  console.log(msg);

  const txRaw = await sign('osmosis', [msg]);

  const broadcast = (await import('@quirks/store')).broadcast;

  const res = await broadcast('osmosis', txRaw);

  console.log(res);
};
</script>

<template>
  <div>
    Hello world {{ status }} {{ connected }}
    {{ wallets.length }}
    <button @click="disconnect" v-if="connected">DISCONNECT</button>
    <div v-else>
      <div v-for="wallet in wallets" :key="wallet.options.name">
        <button
          @click="
            {
              open(wallet.options.name);
            }
          "
        >
          <img
            :src="wallet.options.logoUrls?.light?.svg"
            :alt="wallet.options.prettyName"
            height="48px"
            width="48px"
            :style="{ width: '48px', height: '48px' }"
          />
        </button>

        <a
          :href="
            wallet.options.downloads && wallet.options.downloads.length > 0
              ? wallet.options.downloads[0].link
              : '#'
          "
          target="_blank"
          v-if="!wallet.injected"
        >
          Install
        </a>
      </div>
    </div>

    <div>
      STATUS: {{ status }}
      <div v-if="connected">
        Addresses:
        <button @click="send">SIGN</button>
        <div v-for="account in accounts" :key="account.chainId">
          <div>Chain ID: {{ account.chainId }}</div>

          <div>Chain Name: {{ account.chainName }}</div>

          <div>Address: {{ account.bech32Address }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
