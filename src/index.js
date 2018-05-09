import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';
import reducer from './reducers';
import './index.css';
import Landing from './routes/Landing';
import Home from './routes/Home';
import UserList from './routes/UserList';
import { UserDetail } from './routes/UserDetail';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

const logger = createLogger({
  duration: true,
});

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Landing}/>
        <Route path="/home" component={Home}/>
        <Route path="/userlist" component={UserList}/>
        <Route path="/userdetail/:id" component={UserDetail}/>
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();


