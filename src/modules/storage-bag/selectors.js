export default mountPoint => ({
  get: store => store[mountPoint],
});
