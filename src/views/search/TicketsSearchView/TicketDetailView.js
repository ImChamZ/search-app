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
import TicketDetailRow from './TicketDetailRow';

const TicketDetailView = ({ ticketList }) => {
  const resultLength = ticketList.length;
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
                  <strong>Subject</strong>
                </TableCell>
                <TableCell>
                  <strong>Priority</strong>
                </TableCell>
                <TableCell>
                  <strong>Status</strong>
                </TableCell>
                <TableCell>
                  <strong>Submitter Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Assignee Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Organization Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Created On</strong>
                </TableCell>
                <TableCell>
                  <strong>Due On</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ticketList.map((ticket, index) => (
                <TicketDetailRow key={index} ticket={ticket} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default TicketDetailView;
