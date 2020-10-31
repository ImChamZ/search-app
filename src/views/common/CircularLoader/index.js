import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const CircularLoader = ({ isLoading, children }) => (
  <div className="center-aligned">
    {isLoading ? <CircularProgress /> : { ...children }}
  </div>
);

export default CircularLoader;
