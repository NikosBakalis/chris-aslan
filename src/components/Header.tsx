import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ 
      background: '#1565C0', // Darker blue color
      boxShadow: '0 3px 5px 2px #65808c',
      color: 'white'
      }}>
      <Toolbar>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Typography variant="h6" component="div">
            Chris Aslan
          </Typography>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Link to="/books" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Button color="inherit">Books</Button>
        </Link>
        <Link to="/lectures" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Button color="inherit">Lectures</Button>
        </Link>
        <Link to="/tours" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Button color="inherit">Tours</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
