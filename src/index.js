import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import app from './reducers'
import App from './components/App'
import axios from 'axios'
import { reduxHttpMiddleware} from 'redux-http-middleware'


let store = createStore(
  app,
  applyMiddleware(
    reduxHttpMiddleware(axios)
  )
)

import { getMainLinks, getSubLinks, postToServer, deleteFromServer } from './middleware'
store.dispatch(getMainLinks())
store.dispatch(getSubLinks())
// store.dispatch(deleteFromServer({id: 10, target:'mainlink'}))
//store.dispatch(postToServer({body:{title:'body'}, suburl:'/add/mainlink/'}))

//store.dispatch(getServerState())
//store.dispatch(postServerState({body:{body:'body'}}))
//store.dispatch(postServerState({body:{body:'body'}, suburl:'/add/mainlink/'}))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)