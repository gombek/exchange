import initialState from './initialState';

const create = actions => (state = initialState, action) => (
  action.type === actions.set.type
    ? action.data
    : state
);

export default create;