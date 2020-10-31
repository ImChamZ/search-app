import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { AccountCircle } from '@material-ui/icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { withRouter } from 'react-router';
import { userLogout } from '../../../store/auth';
import { getLoggedInUserData } from '../../../store/auth/authReducer';

const Header = ({ currentUser, userLogout, history }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h5" className="app-bar-title">
        Search Application
      </Typography>
      {currentUser ? (
        <>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <div>
            Hello,
            {currentUser?.name}{' '}
          </div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={() => {
              userLogout();
              history.push('/login');
            }}
          >
            <ExitToAppIcon />
          </IconButton>
        </>
      ) : null}
    </Toolbar>
  </AppBar>
);

const mapStateToProps = (state) => {
  const currentUser = getLoggedInUserData(state);
  return {
    currentUser,
    ...state,
  };
};
export default connect(mapStateToProps, { userLogout })(withRouter(Header));
