import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

// const appContainer = document.getElementById('root');
// const root = ReactDOM.createRoot(appContainer);
const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);