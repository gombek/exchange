export const makeAction = type => {
  const actionCreator = data => ({type, data});
  actionCreator.type = type;
  return actionCreator;
};

export const roundDown = value => Math.floor(value * 100) / 100;