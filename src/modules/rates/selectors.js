export default mountPoint => ({
  get: (store, baseCurrency) => store[mountPoint].get(baseCurrency),
  getExchange: (store, from, to) => store[mountPoint].get(from)
    ? store[mountPoint].get(from)[to]
    : undefined,
});
