import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from '@material-ui/core';
import React from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { userLoggedIn } from '../../store/auth';

const Login = ({ history, userLoggedIn }) => {
  const responseGoogleSuccess = (response) => {
    userLoggedIn(response);
    history.push('/home');
  };

  const responseGoogleFailed = (response) => {
    console.error(response);
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      style={{ minHeight: '100vh', marginTop: '10px' }}
    >
      <Grid style={{ textAlign: 'center' }} item xs={12} sm={6}>
        <Card>
          <CardHeader title="Log In" />
          <CardContent>
            <Box className="center-aligned" m={0}>
              <TextField
                className="login-form-element"
                name="User Name"
                label="User Name"
                type="text"
              />
            </Box>
            <Box className="center-aligned" m={2}>
              <TextField
                className="login-form-element"
                name="Password"
                label="Password"
                type="password"
              />
            </Box>
            <Box className="center-aligned " m={2}>
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
        </Card>
      </Grid>
    </Grid>
  );
};
const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps, { userLoggedIn })(withRouter(Login));
