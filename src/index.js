import React from 'react';
import "./index.css";
import 'moment/locale/id';
import moment from 'moment';
import App from './layouts';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import ErrorPage from './views/pages/ErrorBoundary';
// import * as serviceWorker from './serviceWorker';
moment().locale('id');

ReactDOM.render(
  <ErrorPage>
    <Provider store={store}>
      <React.Suspense>
        <App />
      </React.Suspense>
    </Provider>
  </ErrorPage>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
