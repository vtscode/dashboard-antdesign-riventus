import React from 'react';
import 'moment/locale/id';
import moment from 'moment';
import App from './layouts';
import ReactDOM from 'react-dom';
import {store, persistor} from './redux/store';
import { Provider } from 'react-redux';
import "../node_modules/antd/dist/antd.css";
import * as serviceWorker from './serviceWorker';
import {LoadingState} from './components/loading';
import ErrorPage from './views/pages/ErrorBoundary';
import { PersistGate } from 'redux-persist/lib/integration/react';

import "./index.scss";
moment().locale('id');

ReactDOM.render(
  <ErrorPage>
    <Provider store={store}>
      {/* the loading and persistor props are both required! */}
      <PersistGate loading={<LoadingState />} persistor={persistor}>
        <React.Suspense fallback={<LoadingState />}>
          <App />
        </React.Suspense>
      </PersistGate>
    </Provider>
  </ErrorPage>,
  document.getElementById('root')
);
serviceWorker.register();
