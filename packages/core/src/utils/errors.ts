export const createClientNotExistError = (key: string) => {
  return new Error(`Client with key "${key}" does not exist.`);
};

export const createInvalidWalletName = (name: string) => {
  return new Error(
    `Invalid wallet name, ${name} doesn't exist inside the config.`,
  );
};
