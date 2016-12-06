import { GET, POST, DELETE } from 'redux-http-middleware';


export const postToServer = ({ body, target = '' }) => ({
  POST,
  url: `/add/${target}/`,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: 'token OAUTH-TOKEN' // token needs to be retrieved (e.g. from a cookie)
  },
  body,
  onRequest: 'POST_TO_SERVER_REQUEST',
  onResponse: `POST_TO_SERVER_RESPONSE_${target.toUpperCase()}`,
  onError: 'POST_TO_SERVER_ERROR',
});

export const patchNoteOfServer = ({ body, target = '' }) => ({
  POST, // PATCH doesn work
  url: `/patch/${target}/`,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: 'token OAUTH-TOKEN' // token needs to be retrieved (e.g. from a cookie)
  },
  body,
  onRequest: 'PATCH_NOTE_OF_SERVER_REQUEST',
  onResponse: `PATCH_NOTE_OF_SERVER_RESPONSE_${target.toUpperCase()}`,
  onError: 'PATCH_NOTE_OF_SERVER_ERROR',
});

export const deleteFromServer = ({ id, target = '' }) => ({
  DELETE,
  url: `/del/${target}/`,
  headers: {
    'Content-Type': 'application/json',
  },
  body: { id },
  onRequest: 'DELETE_FROM_SERVER_REQUEST',
  onResponse: 'DELETE_FROM_SERVER_RESPONSE',
  onError: 'DELETE_FROM_SERVER_ERROR',
});

export const getMainLinks = () => ({
  GET,
  url: '/mainlinks/',
  onRequest: 'GET_MAIN_LINKS_REQUEST',
  onResponse: 'GET_MAIN_LINKS_RESPONSE',
  onError: 'GET_MAIN_LINKS_ERROR',
});

export const getSubLinks = () => ({
  GET,
  url: '/sublinks/',
  onRequest: 'GET_SUB_LINKS_REQUEST',
  onResponse: 'GET_SUB_LINKS_RESPONSE',
  onError: 'GET_SUB_LINKS_ERROR',
});
