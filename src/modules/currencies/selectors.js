export default mountPoint => ({
  get: (store) => Array.from(store[mountPoint]),
});
