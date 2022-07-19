import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProfile } from '../app/profileSlice';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  

  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [inputValue, setInputValue] = useState({name: ''});
  const dispatch = useDispatch();


  function changeHandle(event){
    const value = event.target.value;
    setInputValue({
        ...inputValue,
        [event.target.name]: value,
    })
  }

  

  function handleForm(e){
    e.preventDefault();

    if(inputValue.length === 0){
        alert("Enter value before Adding !!");
        setInputValue('');
        return;
    }

    dispatch(
        addProfile({
            image: inputValue.image,
            fullName: inputValue.fullName,
            designation: inputValue.designation,
            website: inputValue.website,
            email: inputValue.email,
            linkedin: inputValue.linkedin,
            about: inputValue.about,
            interests: inputValue.interests,
        })
    )
    
    setInputValue('');
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Profile" {...a11yProps(0)} />
          <Tab label="About" {...a11yProps(1)} />
          <Tab label="Interest" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <form id="form" className='form' onSubmit={handleForm}>
          <label htmlFor="imgField">
              <input 
                type="file" 
                id="imgField" 
                className="profile_image" 
                name="image"
                onChange={changeHandle}
              />
          </label>
          <input 
              type="text" 
              placeholder='Full Name'
              name="fullName" 
              onChange={changeHandle} 
          />
          <input 
              type="text" 
              placeholder='Designation' 
              name="designation"
              onChange={changeHandle}
              
          />
          <input 
              type="text" 
              placeholder='Website' 
              name="website"
              onChange={changeHandle}
          />
          <input 
              type="text"
              placeholder='Email' 
              name="email"
              onChange={changeHandle}
          />
          <input 
              type="text" 
              placeholder='Linkedin Profile'
              name="linkedin" 
              onChange={changeHandle}
          />
          <button className='submit'>Submit</button>
      </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <form onSubmit={handleForm}>
          <textarea 
            name="about" 
            id=""
            cols="30" 
            rows="10"
            placeholder='About Yourself'
            onChange={changeHandle}
          >
          </textarea>
          <button className='submit'>Submit</button>
        </form>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <form onSubmit={handleForm}>
          <textarea 
            name="interests" 
            id=""
            cols="30" 
            rows="10"
            placeholder='Your Interests'
            onChange={changeHandle}
          >
          </textarea>
          <button className='submit'>Submit</button>
        </form>
      </TabPanel>
    </Box>
  );
}
