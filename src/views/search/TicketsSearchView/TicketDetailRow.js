import React, { useState } from 'react';
import {
  Grid,
  TableCell,
  TableRow,
  IconButton,
  Collapse,
  Box,
  Typography,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const TicketDetailRow = ({ ticket = {} }) => {
  const [open, setOpen] = useState(false);
  const {
    subject,
    priority,
    status,
    submitter_id,
    submitter_name,
    assignee_id,
    assignee_name,
    organization_id,
    organization_name,
    has_incidents,
    created_at,
    due_at,
    description,
    tags,
    external_id,
  } = ticket;
  return (
    <>
      <TableRow className="">
        <TableCell>
          <IconButton
            title="More"
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{subject}</TableCell>
        <TableCell>{priority}</TableCell>
        <TableCell>{status}</TableCell>
        <TableCell>{submitter_name}</TableCell>
        <TableCell>{assignee_name}</TableCell>
        <TableCell>{organization_name}</TableCell>
        <TableCell>{created_at}</TableCell>
        <TableCell>{due_at}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div" />
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={2}>
                  <Grid item xs={12}>
                    <strong>Description</strong> :{description}
                    <br />
                    <strong>Submitter Id</strong> :{submitter_id}
                    <br />
                    <strong>Assignee Id</strong> :{assignee_id}
                    <br />
                    <strong>Organization Id</strong> :{organization_id}
                    <br />
                    <strong>Has Incidents</strong> :{' '}
                    {has_incidents ? 'Yes' : 'No'}
                    <br />
                    <strong>Tags</strong> :{tags.join(', ')}
                    <br />
                    <strong>External Id</strong> :{external_id}
                    <br />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default TicketDetailRow;
