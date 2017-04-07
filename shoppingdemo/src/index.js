import React from 'react';
import ReactDOM from 'react-dom';
// redux相关
import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
// router相关
import {Router,Route,browserHistory,IndexRoute} from 'react-router'
// 展示组件
import Home from './containers/Home'
import Welcome from './components/Welcome'
import ShoppingContainer from './containers/ShoppingContainer'
import CartContainer from './containers/CartContainer'
import 'antd/dist/antd.css'

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} title>
    	<Route path="/" component={Home} >
        <IndexRoute component={Welcome}/>
        <Route path="/ShoppingContainer" component={ShoppingContainer}/>>
        <Route path="/CartContainer" component={CartContainer}/>
    	</Route>
  	</Router>
  </Provider>,
  document.getElementById('root')
);
