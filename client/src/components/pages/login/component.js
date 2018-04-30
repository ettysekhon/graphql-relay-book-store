import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

const Login = ({
  login,
  classes
}) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <TextField id="username" label="Username" fullWidth autoFocus required autoComplete='off' />
        </Grid>
        <Grid item xs={12}>
          <TextField id="password" label="Password" fullWidth required />
        </Grid>
        <Button onClick={login}>Login</Button>
      </Grid>
    </div>
  </div>
);

Login.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    container: PropTypes.string.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
};

export default Login;
