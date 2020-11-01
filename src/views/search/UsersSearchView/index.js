import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SearchForm from '../../common/SearchForm';
import UserDetailView from './UserDetailView';
import CircularLoader from '../../common/CircularLoader';
import UserAPI from '../../../utils/api/UserAPI';
import { Alert, AlertTitle } from '@material-ui/lab';

const fieldList = [
  { key: '', value: 'all' },
  { key: '_id', value: 'id' },
  { key: 'url', value: 'url' },
  { key: 'external_id', value: 'external_id' },
  { key: 'name', value: 'name' },
  { key: 'alias', value: 'alias' },
  { key: 'created_at', value: 'created_at' },
  { key: 'active', value: 'active' },
  { key: 'verified', value: 'verified' },
  { key: 'locale', value: 'locale' },
  { key: 'timezone', value: 'timezone' },
  { key: 'last_login_at', value: 'last_login_at' },
  { key: 'email', value: 'email' },
  { key: 'phone', value: 'phone' },
  { key: 'signature', value: 'signature' },
  { key: 'organization_id', value: 'organization_id' },
  { key: 'tags', value: 'tags' },
  { key: 'suspended', value: 'suspended' },
  { key: 'role', value: 'role' },
];

const UsersSearchView = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setLoadingState] = useState(false);
  const [loadingError, setLoadingError] = useState();

  useEffect(() => {
    setLoadingState(true);
    UserAPI.list()
      .then((result) => {
        setUserList(result);
        setLoadingError('');
      })
      .catch(() => {
        setLoadingError('Error loading data from the server.');
      })
      .finally(() => {
        setLoadingState(false);
      });
  }, []);

  const handleSearchCallback = (searchCriteria) => {
    setLoadingState(true);
    UserAPI.search(searchCriteria)
      .then((result) => {
        setUserList(result);
        setLoadingError('');
      })
      .catch(() => {
        setLoadingError('Error loading data from the server.');
      })
      .finally(() => {
        setLoadingState(false);
      });
  };

  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item xs={12} sm={4}>
        <SearchForm
          searchableFieldList={fieldList}
          onSearchCallback={handleSearchCallback}
        />
      </Grid>
      <Grid item xs={12}>
        {loadingError ? (
          <Alert className="center-aligned grid-error" severity="error">
            <AlertTitle>Error</AlertTitle>
            {loadingError}
          </Alert>
        ) : (
          <CircularLoader isLoading={isLoading}>
            <UserDetailView userData={userList} />
          </CircularLoader>
        )}
      </Grid>
    </Grid>
  );
};

export default UsersSearchView;
