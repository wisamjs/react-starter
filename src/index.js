import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/App';
import Home from './containers/Home/home';

import './styles/index.css';
import configureStore from './store/';

const store = configureStore();

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
	  <Provider store={ store }>
	   <Router history={browserHistory}>
	      <Route path="/" component={App}>
	        <IndexRedirect to='home'/>
	        <Route path="home" component={Home}/>

	      </Route>
	    </Router>
	  </Provider>,
	  document.getElementById('root')
);
