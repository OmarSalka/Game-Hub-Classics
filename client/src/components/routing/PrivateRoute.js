import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({
  component: Component,
  socketRouting: { isAuthenticated },
  // socketRouting: { isAuthenticated, loading },
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        // !isAuthenticated && !loading ? (
        !isAuthenticated ? <Redirect to='/join' /> : <Component {...props} />
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
