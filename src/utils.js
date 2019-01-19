export const makeAction = type => {
  const actionCreator = data => ({type, data});
  actionCreator.type = type;
  return actionCreator;
};

export const makeReplaceReducer =
  (actionCreator, initialState) =>
    (state = initialState, action) => (
      actionCreator.type === action.type ? action.data : state
    );

