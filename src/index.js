import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'moment/locale/id';
import moment from 'moment';
import store from './redux/store';
import { Provider } from 'react-redux';
import ErrorPage from './views/pages/ErrorPage';
// import * as serviceWorker from './serviceWorker';
moment().locale('id');

ReactDOM.render(
  <ErrorPage>
    <Provider store={store}>
      <React>
        <App />
      </React>
    </Provider>
  </ErrorPage>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
