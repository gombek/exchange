import initialState from './initialState';
import { roundDown, toNumber, onlyPositive } from '../../utils';

const setFrom = (state, action) => ({ ...state, from: action.data});
const setTo = (state, action) => ({ ...state, to: action.data});
export const setAmount = (state, action) => ({
  ...state,
  amount: action.data.value,
  outcome: roundDown(onlyPositive(toNumber(action.data.value)) * action.data.rate),
});
export const setOutcome = (state, action) => ({
  ...state,
  amount: roundDown(onlyPositive(toNumber(action.data.value)) / action.data.rate),
  outcome: action.data.value,
});

const create = actions => (state = initialState, action) => {
  switch (action.type) {
  case actions.setFrom.type:
    return setFrom(state, action);
  case actions.setTo.type:
    return setTo(state, action);
  case actions.setAmount.type:
    return setAmount(state, action);
  case actions.setOutcome.type:
    return setOutcome(state, action);
  default:
    return state;
  }
};

export default create;