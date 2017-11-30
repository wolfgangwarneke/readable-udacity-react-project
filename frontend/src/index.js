import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getAllPosts } from './utils/api';
import { handleFetchedPosts } from './actions';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

// var posts = getAllPosts();
// console.log(posts);


ReactDOM.render(
  <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,
  document.getElementById('root'));
registerServiceWorker();
