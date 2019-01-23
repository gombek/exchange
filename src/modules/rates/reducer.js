import initialState from './initialState';

const clone = state => new Map(state);

export default actions => (state = initialState, action) => (
  actions.set.type === action.type && action.data && action.data.base
    ? clone(state).set(action.data.base, action.data.rates)
    : state
)
