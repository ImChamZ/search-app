import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SearchForm from '../../common/SearchForm';
import TicketDetailView from './TicketDetailView';
import CircularLoader from '../../common/CircularLoader';
import TicketAPI from '../../../utils/api/TicketAPI';
import { Alert, AlertTitle } from '@material-ui/lab';

const fieldList = [
  { key: '', value: 'all' },
  { key: '_id', value: 'id' },
  { key: 'url', value: 'url' },
  { key: 'external_id', value: 'external_id' },
  { key: 'type', value: 'type' },
  { key: 'subject', value: 'subject' },
  { key: 'created_at', value: 'created_at' },
  { key: 'description', value: 'description' },
  { key: 'priority', value: 'priority' },
  { key: 'status', value: 'status' },
  { key: 'submitter_id', value: 'submitter_id' },
  { key: 'assignee_id', value: 'assignee_id' },
  { key: 'organization_id', value: 'organization_id' },
  { key: 'has_incidents', value: 'has_incidents' },
  { key: 'due_at', value: 'due_at' },
  { key: 'tags', value: 'tags' },
  { key: 'via', value: 'via' },
];

const TicketsSearchView = () => {
  const [ticketList, setTicketList] = useState([]);
  const [isLoading, setLoadingState] = useState(false);
  const [loadingError, setLoadingError] = useState();

  useEffect(() => {
    setLoadingState(true);
    TicketAPI.list()
      .then((result) => {
        setTicketList(result);
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
    TicketAPI.search(searchCriteria)
      .then((result) => {
        setTicketList(result);
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
          <Alert className="center-aligned" severity="error">
            <AlertTitle>Error</AlertTitle>
            {loadingError}
          </Alert>
        ) : (
          <CircularLoader isLoading={isLoading}>
            <TicketDetailView ticketList={ticketList} />
          </CircularLoader>
        )}
      </Grid>
    </Grid>
  );
};

export default TicketsSearchView;
