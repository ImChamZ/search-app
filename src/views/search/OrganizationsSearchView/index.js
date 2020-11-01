import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SearchForm from '../../common/SearchForm';
import OrganizationDetailView from './OrganizationDetailView';
import CircularLoader from '../../common/CircularLoader';
import OrganizationAPI from '../../../utils/api/OrganizationAPI';
import { Alert, AlertTitle } from '@material-ui/lab';

const fieldList = [
  { key: '', value: 'all' },
  { key: '_id', value: 'id' },
  { key: 'url', value: 'url' },
  { key: 'external_id', value: 'external_id' },
  { key: 'name', value: 'name' },
  { key: 'domain_names', value: 'domain_names' },
  { key: 'created_at', value: 'created_at' },
  { key: 'details', value: 'details' },
  { key: 'shared_tickets', value: 'shared_tickets' },
  { key: 'tags', value: 'tags' },
];

const OrganizationsSearchView = () => {
  const [organizationsList, setOrganizationList] = useState([]);
  const [isLoading, setLoadingState] = useState(false);
  const [loadingError, setLoadingError] = useState();

  useEffect(() => {
    setLoadingState(true);
    OrganizationAPI.list()
      .then((result) => {
        setOrganizationList(result);
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
    OrganizationAPI.search(searchCriteria)
      .then((result) => {
        setOrganizationList(result);
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
            <OrganizationDetailView organizationList={organizationsList} />
          </CircularLoader>
        )}
      </Grid>
    </Grid>
  );
};

export default OrganizationsSearchView;
