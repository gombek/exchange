import initialState from './initialState';

export default actions => (state = initialState, action) => (
  actions.set.type === action.type
    ? state.set(action.data.base, action.data.rates)
    : state
)
