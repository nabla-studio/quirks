export const createClientNotExistError = (key: string) => {
  return new Error(`[Quirks]: Client with key "${key}" does not exist.`);
};

export const createInvalidWalletName = (name: string) => {
  return new Error(
    `[Quirks]: Invalid wallet name, ${name} doesn't exist inside the config.`,
  );
};

export const createInvalidWallet = () => {
  return new Error(`[Quirks]: Invalid wallet, wallet is not initialized.`);
};
