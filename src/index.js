import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals'
import rootReducer from './redux/reducer';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <App />
  </Provider >
);
reportWebVitals();

