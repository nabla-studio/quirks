<script setup lang="ts">
import {
  useConnect,
  useConfig,
  useChains,
  useChain,
  useWalletConnect,
} from '@quirks/vue';
import VueQrcode from 'vue-qrcode';

const { wallets } = useConfig();
const { accounts } = useChains();
const { address } = useChain('bitsong');
const { connect, disconnect, connected, status, walletName, connecting } =
  useConnect();
const { pairingURI } = useWalletConnect();

const open = async (chainName: string) => {
  await connect(chainName);
};

const send = async () => {
  const cosmos = (await import('stargazejs')).cosmos;
  const sign = (await import('@quirks/store')).sign;
  const getAddress = (await import('@quirks/store')).getAddress;
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
    Wallet {{ walletName }} status: {{ status }} connecting:
    {{ connecting }}
    <button @click="disconnect" v-if="connected">DISCONNECT</button>
    <div v-else>
      <VueQrcode
        v-if="pairingURI"
        :value="pairingURI"
        type="image/png"
        :color="{ dark: '#000000ff', light: '#ffffffff' }"
      />
      <div v-for="wallet in wallets" :key="wallet.options.wallet_name">
        <button @click="open(wallet.options.wallet_name)">
          <img
            :src="wallet.logoLight ?? wallet.logoDark"
            :alt="wallet.options.pretty_name"
            height="48px"
            width="48px"
            :style="{ width: '48px', height: '48px' }"
          />
        </button>

        <a
          :href="
            wallet.options.platforms && wallet.options.platforms.length > 0
              ? wallet.options.platforms[0].install_link
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
      STATUS: {{ status }} ADDRESS BITSONG: {{ address }}
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
