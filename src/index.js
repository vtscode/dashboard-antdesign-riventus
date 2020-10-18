import React from 'react';
import 'moment/locale/id';
import moment from 'moment';
import App from './layouts';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import "../node_modules/antd/dist/antd.css";
import * as serviceWorker from './serviceWorker';
import {LoadingState} from './components/loading';
import ErrorPage from './views/pages/ErrorBoundary';

import "./index.scss";
moment().locale('id');

ReactDOM.render(
  <ErrorPage>
    <Provider store={store}>
      <React.Suspense fallback={<LoadingState />}>
        <App />
      </React.Suspense>
    </Provider>
  </ErrorPage>,
  document.getElementById('root')
);
serviceWorker.register();
