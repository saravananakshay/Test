import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch} from 'react-router-dom';
import Login from './../pages/Login';
import UserProfile from '../pages/UserProfile.js';
import NotFoundPage from '../pages/NotFoundPage';
import PrivateRoute from './PrivateRoutes';

const Navigation = () => {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivateRoute
                        exact
                        path="/user-profile"
                        component={UserProfile}
                    />
                    <Route component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Navigation;
