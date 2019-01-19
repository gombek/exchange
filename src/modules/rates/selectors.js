export default mountPoint => ({
  get: (store, currency) => store[mountPoint].get(currency),
});
