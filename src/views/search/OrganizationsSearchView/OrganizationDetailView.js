import React from 'react';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  Paper,
} from '@material-ui/core';
import OrganizationDetailRow from './OrganizationDetailRow';

const OrganizationDetailView = ({ organizationList }) => {
  const resultLength = organizationList.length;
  return (
    <Grid container justify="center" alignItems="center" spacing={3}>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          {resultLength > 0
            ? resultLength === 1
              ? `${resultLength} Match found`
              : `${resultLength} Matches found`
            : 'No Matches found'}
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>
                  <strong>Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Details</strong>
                </TableCell>
                <TableCell>
                  <strong>User Names</strong>
                </TableCell>
                <TableCell>
                  <strong>Shared Tickets</strong>
                </TableCell>
                <TableCell>
                  <strong>Created On</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {organizationList.map((organization, index) => (
                <OrganizationDetailRow
                  key={index}
                  organization={organization}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default OrganizationDetailView;
