import React from 'react';
import "./index.scss";
import 'moment/locale/id';
import moment from 'moment';
import App from './layouts';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import ErrorPage from './views/pages/ErrorBoundary';
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
serviceWorker.register();
