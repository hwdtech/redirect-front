import { selectAction } from '../utils';


const getActors = (state, action) => (
  action.payload
);

const actorActions = {
  GET_ACTORS_RESPONSE: getActors,
};

const actors = (state = [], action) => (
  selectAction(actorActions, state, action)
);

export default actors;
