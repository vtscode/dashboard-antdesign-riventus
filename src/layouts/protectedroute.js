import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route,Switch } from 'react-router-dom'
import routes from "../routes";

const ProtectedRoute = ({auth,history}) => {

  if (!auth?.user) {
    history.replace('/login');
  }

  return(<Switch>
  {routes.strict.map((route,idx) => (
    <React.Fragment key={idx}>
      <Route {...route} />
    </React.Fragment>
  ))}
   <Redirect from="/" to="/home" />
  </Switch>
  );
};
const mapStateToProps = ({auth}) => ({auth});

export default connect(mapStateToProps)(ProtectedRoute);