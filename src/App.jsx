import React from 'react';
import Login from './components/Login/Login';
import AddCompany from './components/AddCompany/AddCompany';
import Box from '@mui/material/Box';
import Admin from './components/AdminProfile/Admin';
import HomePage from './components/HomePage/HomePage';
import User from './components/User/User';
import UserHome from './components/User/UserHome';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Box sx={{width: 390, margin: 'auto'}}>
      <Router>
        <Routes>
          <Route exact path="/" element = {<Login />} />
          <Route path="/addCompany" element = {<AddCompany />} />
          <Route path="/admin" element = {<Admin />} />
          <Route path="/homePage" element = {<HomePage />} />
          <Route path="/users" element = {<User />} />
          <Route path="/userHome" element = {<UserHome />} />
        </Routes>
      </Router>
    </Box>

  );
}

export default App;
