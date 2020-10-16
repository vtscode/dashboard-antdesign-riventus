import React from "react";
import routes from "../routes";
import ProtectedRoute from './protectedroute';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default () => {
  return(
  <React.Suspense fallback="Loading ...">
    <BrowserRouter>
      <Switch>
        {routes.public.map((x,idx) => (
          <Route key={idx} {...x} />
        ))}
        <Route path="/" render={m => <ProtectedRoute {...m} />} />
      </Switch>
    </BrowserRouter>
  </React.Suspense>);
};