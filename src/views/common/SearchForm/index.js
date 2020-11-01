import React, { useState } from 'react';
import { Box, Button, FormControl, Grid, TextField } from '@material-ui/core';
import SelectElement from '../elements/SelectElement';

const SearchForm = ({ searchableFieldList = [], onSearchCallback }) => {
  const [searchCriteria, setSearchCriteria] = useState({});

  const updateSearchCriteria = ({ target: { name, value } }) => {
    setSearchCriteria(Object.assign(searchCriteria, { [name]: value }));
  };

  return (
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={4}>
        <Grid item xs={5} sm={5}>
          <FormControl className="" noValidate autoComplete="off">
            <TextField
              name="searchText"
              label="Search Value"
              type="search"
              onChange={updateSearchCriteria}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  onSearchCallback(searchCriteria);
                }
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={3} sm={4}>
          <SelectElement
            name="searchTerm"
            menuItemList={searchableFieldList}
            onChangeCallback={updateSearchCriteria}
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <Box m={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onSearchCallback(searchCriteria)}
            >
              Search
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchForm;
