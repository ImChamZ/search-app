import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core';
import React from 'react';
import UsersSearchView from '../UsersSearchView';
import TicketsSearchView from '../TicketsSearchView';
import OrganizationsSearchView from '../OrganizationsSearchView';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className="tab-container"
      {...other}
    >
      {value === index && (
        <Box p={3} className="tab-container-box">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const MainSearchView = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar color="inherit" position="fixed" className="sub-header">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Users" />
          <Tab label="Tickets" />
          <Tab label="Organizations" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <UsersSearchView />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TicketsSearchView />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OrganizationsSearchView />
      </TabPanel>
    </>
  );
};

export default MainSearchView;
