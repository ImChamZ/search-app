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

const OrganizationDetailRow = ({ organization = {} }) => {
  const [open, setOpen] = useState(false);
  const {
    name,
    details,
    shared_tickets,
    domain_names,
    created_at,
    tags,
    external_id,
    ticket_subject_list,
    user_names,
  } = organization;
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
        <TableCell>{name}</TableCell>
        <TableCell>{details}</TableCell>
        <TableCell>{user_names.join(', ')}</TableCell>
        <TableCell>{shared_tickets ? 'Yes' : 'No'}</TableCell>
        <TableCell>{created_at}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div" />
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={2}>
                  <Grid item xs={12}>
                    <strong>Domain Names</strong> :{domain_names.join(', ')}
                    <br />
                    <strong>Ticket Subjects</strong> :{' '}
                    {ticket_subject_list.join(', ')}
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

export default OrganizationDetailRow;
