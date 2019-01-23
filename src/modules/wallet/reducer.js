import initialState from './initialState';
import { roundDown } from '../../utils';

const clone = state => new Map(state);
const cloneWallet = (state, nextState) => ({ ...state, ...nextState });

export const setBalance = (state, action) => {
  const { currency, balance } = action.data;
  const wallet = state.get(currency);
  if (!wallet) return state;
  return clone(state).set(currency, cloneWallet(wallet, { balance }));
};

export const exchange = (state, action) => {
  const { from, to, rate, amount } = action.data;
  const fromWallet = state.get(from);
  const toWallet = state.get(to);

  if (!fromWallet || !toWallet) return state;

  const realAmount = fromWallet.balance - amount < 0
    ? fromWallet.balance
    : amount;

  return clone(state)
    .set(from, cloneWallet(
      fromWallet,
      {
        balance: fromWallet.balance - realAmount,
      },
    ))
    .set(to, cloneWallet(
      toWallet,
      {
        balance: toWallet.balance + roundDown(realAmount * rate),
      },
    ))
};

const create = actions => (state = initialState, action) => {
  switch (action.type) {
    case actions.setBalance.type:
      return setBalance(state, action);
    case actions.exchange.type:
      return exchange(state, action);
    default:
      return state;
  }
};

export default create;