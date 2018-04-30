import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux';

class SecureRoute extends PureComponent {
  renderSecureRoute = ({ component: Component, isLoggedIn }) => props => {
    return isLoggedIn
      ? <Component {...props} />
      : <Redirect to={{
        pathname: "/login",
        state: { from: props.location }
      }} />;
  }
  render () {
    const { component, auth: { isLoggedIn }, ...rest } = this.props;
    return <Route { ...rest } render={this.renderSecureRoute({ component, isLoggedIn })} />
  }
};

SecureRoute.propTypes = {
  auth: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
  ]).isRequired,
}

const connector = connect(({ auth }) => ({ auth }));

export default connector(SecureRoute);
