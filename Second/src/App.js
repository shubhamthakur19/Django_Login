import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './hocs/Layout';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import PrivateRoute from './hocs/PrivateRoute';

import { Provider } from 'react-redux';
import store from './store';

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
            </Layout>
        </Router>
    </Provider>
);

export default App;