import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({
  component: Component,
  socketRouting: { is_Authenticated },
  // socketRouting: { isAuthenticated, loading },
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        // !isAuthenticated && !loading ? (
        !is_Authenticated ? <Redirect to='/' /> : <Component {...props} />
      }
    />
  );
};
PrivateRoute.propTypes = {
  socketRouting: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  socketRouting: state.socketRouting
});

export default connect(mapStateToProps)(PrivateRoute);
