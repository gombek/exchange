export const makeAction = type => {
  const actionCreator = data => ({type, data});
  actionCreator.type = type;
  return actionCreator;
};

export const roundDown = value => Math.floor(value * 100) / 100;

export const onlyPositive = value => Math.max(value, 0);

export const toNumber = value => parseFloat(value.toString().replace(',', '.')) || 0;