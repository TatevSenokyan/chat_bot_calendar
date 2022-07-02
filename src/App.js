import React from 'react';
import Login from './components/Login/Login';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box
      sx={{
        width: '390px',
        margin: 'auto',
        fontFamily: 'Harmonia Sans Pro Cyr !important',
      }}>
       <Login />
    </Box>
  );
}

export default App;
