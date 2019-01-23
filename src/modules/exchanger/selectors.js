export default mountPoint => ({
  getFrom: store => store[mountPoint].from,
  getTo: store => store[mountPoint].to,
  getAmount: store => store[mountPoint].amount,
  getOutcome: store => store[mountPoint].outcome,
});
