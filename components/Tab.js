import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AboutForm from './AboutForm';
import InterestForm from './InterestForm';
import ProfileForm from './ProfileForm';



export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Profile" value="1" />
            <Tab label="About" value="2" />
            <Tab label="Interests" value="3" />
          </TabList>
        </Box>

        <TabPanel value="1">
          <ProfileForm />
        </TabPanel>

        <TabPanel value="2">
          <AboutForm />
        </TabPanel>

        <TabPanel value="3">
          <InterestForm />
        </TabPanel>

      </TabContext>
    </Box>
  );
}
