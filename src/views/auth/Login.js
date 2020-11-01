import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { userLoggedIn } from '../../store/auth';
import { Alert } from '@material-ui/lab';

const Login = ({ history, userLoggedIn }) => {
  const [loginError, setLoginError] = useState();

  const responseGoogleSuccess = (response) => {
    setLoginError('');
    userLoggedIn(response);
    history.push('/home');
  };

  const responseGoogleFailed = (response) => {
    setLoginError('Error login with Google. Please try later.');
    console.error(response);
  };

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      alignItems="center"
      style={{ minHeight: '100vh', marginTop: '10px' }}
    >
      <Grid
        style={{ textAlign: 'center', minWidth: '30%' }}
        item
        xs={12}
        sm={6}
      >
        <Card>
          <CardHeader title="Log In" />
          <CardContent>
            <TextField
              className="login-form-element"
              name="User Name"
              label="User Name"
              type="text"
            />
            <TextField
              className="login-form-element"
              name="Password"
              label="Password"
              type="password"
            />
            <Box className="center-aligned " mt={2}>
              <Button
                className="login-form-element"
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
            </Box>
            <Box className="center-aligned" m={2}>
              <GoogleLogin
                clientId="136623216777-hdnfejj0v5789bbn1j6mpg9kcg8gatvk.apps.googleusercontent.com"
                onSuccess={responseGoogleSuccess}
                onFailure={responseGoogleFailed}
              >
                <span> Login with Google</span>
              </GoogleLogin>
            </Box>
          </CardContent>
          {loginError ? (
            <Alert variant="outlined" severity="error">
              {loginError}
            </Alert>
          ) : null}
        </Card>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps, { userLoggedIn })(withRouter(Login));
