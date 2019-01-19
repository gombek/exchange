import initialState from './initialState';

const clone = state => new Map(state);

export default actions => (state = initialState, action) => (
  actions.set.type === action.type
    ? clone(state).set(action.data.base, action.data.rates)
    : state
)
