import { selectAction } from '../utils';


const viewErrors = (state, action) => (
  [...action.errors]
);

const errorsActions = {
  VIEW_ERRORS: viewErrors,
};

const errors = (state = [], action) => (
  selectAction(errorsActions, state, action)
);

export default errors;
