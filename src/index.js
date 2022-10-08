import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import Navigation from './Routes';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const { store } = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <Auth0Provider
                domain="dev-oj30zr8p.us.auth0.com"
                clientId="V9lZYUq9slie9YloWk0rL8iPphnZcpdK"
                redirectUri={window.location.origin}
            >
                <Navigation />
            </Auth0Provider>
            ,
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
