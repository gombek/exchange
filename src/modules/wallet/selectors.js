export default mountPoint => ({
  get: (store, currency) => store[mountPoint].get(currency),
  getBalance: (store, currency) => store[mountPoint].get(currency)
    ? store[mountPoint].get(currency).balance
    : undefined,
});
