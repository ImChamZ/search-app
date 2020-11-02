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
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const UserDetailRow = ({ user = {} }) => {
  const [open, setOpen] = useState(false);
  const {
    name,
    alias,
    active,
    email,
    organization_id,
    organization_name,
    timezone,
    role,
    created_at,
    last_login_at,
    locale,
    phone,
    signature,
    verified,
    shared,
    suspended,
    tags,
    external_id,
    assignee_tickets,
    submitted_tickets,
  } = user;
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
        <TableCell>
          <span className="">
            <FiberManualRecordIcon
              className={`user-${active ? 'active' : 'inactive'}`}
            />
          </span>{' '}
          {name} ({alias})
        </TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{organization_name}</TableCell>
        <TableCell>{timezone}</TableCell>
        <TableCell>{role}</TableCell>
        <TableCell>{created_at}</TableCell>
        <TableCell>{last_login_at}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div" />
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={2}>
                  <Grid item xs={6} sm={6}>
                    <strong>Locale</strong> :{locale}
                    <br />
                    <strong>phone</strong> :{phone}
                    <br />
                    <strong>Organization Id</strong> :{organization_id}
                    <br />
                    <strong>Signature</strong> :{signature}
                    <br />
                    <strong>Active User</strong> :{active ? 'Yes' : 'No'}
                    <br />
                    <strong>Shared</strong> :{verified ? 'Yes' : 'No'}
                    <br />
                    <strong>Verified</strong> :{shared ? 'Yes' : 'No'}
                    <br />
                    <strong>Suspended</strong> :{suspended ? 'Yes' : 'No'}
                    <br />
                    <strong>Tags</strong> :{tags.join(', ')}
                    <br />
                    <strong>External Id</strong> :{external_id}
                    <br />
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <strong>Submitted Ticket Subjects</strong> :{' '}
                    {submitted_tickets.join(', ')}
                    <br />
                    <strong>Assignee Ticket Subjects</strong> :{' '}
                    {assignee_tickets.join(', ')}
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

export default UserDetailRow;
