import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './stores/store';
import { HashRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// window.addEventListener('beforeinstallprompt', (e) => {
//     console.log('beforeinstallprompt event has fired')
//     e.prompt()
// });