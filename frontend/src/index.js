import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

// const root = ReactDOM.createRoot(document.getElementById('root'));


// Find or create a container element for your React app
const appContainer = document.getElementById('root');

// Create the React root using the container element
const root = ReactDOM.createRoot(appContainer);

    if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
    } else {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);