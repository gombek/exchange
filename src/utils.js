export const makeAction = type => {
  const actionCreator = data => ({type, data});
  actionCreator.type = type;
  return actionCreator;
};
