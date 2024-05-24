import {useState} from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ThemeProvider } from '@emotion/react';
import {  createTheme } from '@mui/material';
import Grid from '../Grid/Grid';
import List from '../List/List';

export default function TabsComponent({coins}) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    color: 'var(--white)',
    width: '50vw',
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };
  const theme = createTheme({
    palette: {
        primary: {
            main: "#3a80e9"
        },
    },
  });
  return (
    <ThemeProvider theme={theme} >
      <TabContext value={value}>
          <TabList onChange={handleChange} variant="fullWidth" >
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
        <TabPanel value="grid">
            <div className='flex justify-center items-center flex-wrap gap-4 m-6'>
            {coins.map((item,idx) =>
                <Grid coin={item} key={idx}/>
            )}</div>
        </TabPanel>
        <TabPanel value="list">
        <table className='w-11/12 block lg:mx-auto'>
            {
              coins.map((item,idx) => (
                <List coin={item} key={idx}/>
              ))
            }
        </table>
        </TabPanel>
        
      </TabContext>
    </ThemeProvider>
  );
}
