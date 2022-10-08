import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import { Route } from 'react-router';

const isAuthenticated = (token) => {
    if (token) {
        return true;
    } else return false;
};

const PrivateRoute = ({ path, userDetails, component: Component, ...rest }) => {
    
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated(userDetails.userDetails) ? (
                    window.location.pathname === path ? (
                        <Component {...props} />
                    ) : (
                        <NotFoundPage />
                    )
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                        }}
                    />
                )
            }
        />
    );
};

const mapStateToProps = (state) => ({
    userDetails: state.userDetails,
});

export default connect(mapStateToProps)(PrivateRoute);
