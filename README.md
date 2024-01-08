# Quirks

![Quirks Banner](https://github.com/nabla-studio/quirks/blob/main/docs/quirks-banner.jpeg)

Quirks is a universal wallet adapter that easily connect your dapp with existing wallets in the Cosmos blockchain ecosystem.

## 🪄 Features

- 🔀 Cross Framework
- ⚙️ React and NextJS support
- ⚙️ Vue and NuxtJS support
- 📉 Small bundles, with vendor chunk splitting
- 💳 Different wallet supports (Keplr, Leap, Cosmostation, xDefi and Station, just for now)
- 💪 Fully typed and tree-shakeable
- 🌍 Global state even outside the frameworks

And many more to come:

- [x] Adding more wallets
- [x] Web [Broadcast API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API) Support, for tabs, windows and iframe sync
- [ ] React Native Support
- [x] Wallet Connect Support
- [ ] Web3 Modal Support
- [ ] UI Kit (Cross Framework)
- [ ] Improve Docs

## 📚 Examples

- [NuxtJS](https://github.com/nabla-studio/quirks-nuxt-example)
- [NextJS](https://github.com/nabla-studio/quirks/tree/main/examples/nextjs)
- [Vue 3](https://github.com/nabla-studio/quirks/tree/main/examples/vue3)

## 🔧 Installation

Node.js is required to run the project.

1. Clone the repository to your local machine:

```bash
git clone https://github.com/nabla-studio/quirks.git
```

2. Init git submodule:

```bash
git submodule init
```

3. Install the dependencies:

```bash
cd quirks
pnpm i
```

4. Build the packages:

```bash
pnpm build
```

### Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## 👥 Authors

👤 **Davide Segullo** (Code)

- Github: [@DavideSegullo](https://github.com/DavideSegullo)
- Twitter: [@davide_segullo](https://twitter.com/davide_segullo)

## 🎉 Contributing

We ❤️ contributions! If you'd like to contribute, please read our contributing
guidelines.

## 📜 License

This project is licensed under the Apache-2.0 License. See the LICENSE file for
more information.

## 🙋 Support

If you have any questions or comments about this project, please feel free to
contact us on discord.

## 🙌 Credits

Thanks to the creators and contributors of the following projects, whose work has influenced the development of quirks:

- [Wagmi](https://github.com/wevm/wagmi) by [WEVM](https://github.com/wevm)

- [Web3Modal](https://github.com/WalletConnect/web3modal) by [WalletConnect](https://github.com/WalletConnect)

- [Zustand](https://github.com/pmndrs/zustand) by [Poimandres](https://github.com/pmndrs)

- [Graz](https://github.com/graz-sh/graz) by [Graz](https://github.com/graz-sh)

- [Cosmos Kit](https://github.com/cosmology-tech/cosmos-kit) by [Cosmology Tech](https://github.com/cosmology-tech)

Copyright © 2023 [nabla](https://github.com/nabla-studio).
