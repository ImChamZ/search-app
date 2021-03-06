import { CssBaseline, Paper } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from '../views/auth/Login';
import Header from '../views/layouts/Header';
import MainSearchView from '../views/search/MainSearchView';

const MainRoutes = () => (
  <Router>
    <CssBaseline />
    <Paper className="main-container">
      <Route path="/" component={(props) => <Header {...props} />} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={MainSearchView} />
      <Route
        path="/"
        render={() => {
          <Redirect to="/login" />;
        }}
      />
    </Paper>
  </Router>
);

export default MainRoutes;
