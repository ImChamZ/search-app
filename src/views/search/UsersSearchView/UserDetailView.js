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
import UserDetailRow from './UserDetailRow';

const UserDetailView = ({ userData }) => {
  const resultLength = userData.length;
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
                  <strong>Email</strong>
                </TableCell>
                <TableCell>
                  <strong>Organization Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Timezone</strong>
                </TableCell>
                <TableCell>
                  <strong>UserRole</strong>
                </TableCell>
                <TableCell>
                  <strong>Created On</strong>
                </TableCell>
                <TableCell>
                  <strong>Last Logged In On</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((user, index) => (
                <UserDetailRow key={index} user={user} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default UserDetailView;
