import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ 
        background: 'linear-gradient(45deg, #187aa8 30%, #2196F3 90%)',
        boxShadow: '0 3px 5px 2px #65808c',
        color: 'white',
        backgroundImage: `
          radial-gradient(circle, transparent 20%, #187aa8 20%),
          radial-gradient(circle, transparent 20%, #84bed9 20%)`,
        backgroundSize: '10px 10px',
        backgroundPosition: '0 0, 5px 5px'
      }}>
      <Toolbar>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Typography variant="h6" component="div">
            Chris Aslan
          </Typography>
        </Link>
        <Box sx={{ flexGrow: 1 }} /> {/* This box will push the buttons to the right */}
        <Button color="inherit" href="/books">Books</Button>
        <Button color="inherit" href="/lectures">Lectures</Button>
        <Button color="inherit" href="/tours">Tours</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;