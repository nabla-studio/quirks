export const createClientNotExistError = (key: string) => {
  return new Error(`Client with key "${key}" does not exist`);
};
