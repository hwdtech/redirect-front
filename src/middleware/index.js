import { GET, POST } from 'redux-http-middleware'

const url = window.location.origin
 
export const getMainLinks = () => ({
  GET,
  url,
  onRequest: 'GET_MAIN_LINKS_REQUEST',
  onResponse: 'GET_MAIN_LINKS_RESPONSE',
  onError: 'GET_MAIN_LINKS_ERROR',
})

export const getServerState = () => ({
  GET,
  url,
  onRequest: 'GET_SERVER_STATE_REQUEST',
  onResponse: 'GET_SERVER_STATE_RESPONSE',
  onError: 'GET_SERVER_STATE_ERROR',
})
 
export const postServerState = ({ body, suburl='' }) => ({
  POST,
  url: url+suburl,
  headers: {
    "Content-Type": 'application/json',
    // Authorization: 'token OAUTH-TOKEN' // token needs to be retrieved (e.g. from a cookie) 
  },
  body,
  onRequest: 'POST_SERVER_STATE_REQUEST',
  onResponse: 'POST_SERVER_STATE_RESPONSE',
  onError: 'POST_SERVER_STATE_ERROR',
})