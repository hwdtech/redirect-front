export const isVisible = (viewContent, currentContent) => (
  viewContent.filter(t => t === currentContent).length > 0
);

export const selectAction = (someActions, state, action) => {
  try {
    return someActions[action.type](state, action);
  } catch (err) {
    return state;
  }
};

export const isValid = (validateState, keys) => {
  for (let i = 0; i < keys.length; i += 1) {
    try {
      if (validateState[keys[i]].status !== 'success') {
        return false;
      }
    } catch (err) {
      console.log(`${keys[i]} doesnt exist in validateState'`);
      return false;
    }
  }
  return true;
};

export const objToArr = (obj) => {
    let index = 0;
    let arr = [];
    for (let key in obj) {
      arr[index] = [key, obj[key]];
      index += 1;
    }
    return arr;
  }