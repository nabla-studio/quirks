//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { resolve } = require('path');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack: (config) => {
    const noop = resolve(__dirname, 'etc', 'noop', 'index.js');

    config.resolve = {
      ...config.resolve, // This spreads existing resolve configuration (if any)
      alias: {
        ...config.resolve.alias, // This spreads any existing alias configurations
        libsodium: noop,
        'libsodium-wrappers': noop,
        'libsodium-sumo': noop,
        'libsodium-wrappers-sumo': noop,
        // bip39 is only used in the context of the extension wallet, so we can replace it.
        // replacing it with a no-op breaks build, so we can at least replace it with a lighter weight version for now.
        // ideally this becomes replaced with an API-compatible no-op.
        bip39: noop,
      },
    };

    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
