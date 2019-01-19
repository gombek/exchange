import initialState from './initialState';

const clone = state => new Set(state);

const add = (state, action) => clone(state).add(action.data);
const remove = (state, action) => {
  const nextState = clone(state);
  nextState.delete(action.data);
  return nextState;
};

const create = actions => (state = initialState, action) => {
  switch (action.type) {
    case actions.add.type:
      return add(state, action);
    case actions.remove.type:
      return remove(state, action);
    default:
      return state;
  }
};

export default create;