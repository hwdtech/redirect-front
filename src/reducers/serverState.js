import { selectAction } from '../utils';


const getServerState = (state, action) => {
  console.log(action.type, action.payload);
  return action.type;
};

const serverStateActions = {
  GET_MAIN_LINKS_REQUEST: getServerState,
  GET_MAIN_LINKS_RESPONSE: getServerState,
  GET_MAIN_LINKS_ERROR: getServerState,
  GET_SUB_LINKS_REQUEST: getServerState,
  GET_SUB_LINKS_RESPONSE: getServerState,
  GET_SUB_LINKS_ERROR: getServerState,
  DELETE_FROM_SERVER_REQUEST: getServerState,
  DELETE_FROM_SERVER_RESPONSE: getServerState,
  DELETE_FROM_SERVER_ERROR: getServerState,
  PATCH_NOTE_OF_SERVER_REQUEST: getServerState,
  PATCH_NOTE_OF_SERVER_RESPONSE: getServerState,
  PATCH_NOTE_OF_SERVER_ERROR: getServerState,
};

const serverState = (state = '', action) => (
  selectAction(serverStateActions, state, action)
);

export default serverState;
