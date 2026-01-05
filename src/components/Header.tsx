import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar position="sticky" sx={{ 
      background: 'linear-gradient(135deg, #1565C0 0%, #0d47a1 100%)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      color: 'white'
    }}>
      <Toolbar sx={{ py: 1 }}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ 
              fontWeight: 700,
              letterSpacing: '0.5px',
              '&:hover': {
                opacity: 0.9,
              },
              transition: 'opacity 0.2s',
            }}
          >
            Chris Aslan
          </Typography>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Link to="/books" style={{ color: 'inherit', textDecoration: 'none' }}>
            <Button 
              color="inherit" 
              sx={{
                fontWeight: isActive('/books') ? 600 : 400,
                borderBottom: isActive('/books') ? '2px solid white' : '2px solid transparent',
                borderRadius: 0,
                px: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderBottom: '2px solid rgba(255, 255, 255, 0.7)',
                },
                transition: 'all 0.2s',
              }}
            >
              Books
            </Button>
          </Link>
          <Link to="/lectures" style={{ color: 'inherit', textDecoration: 'none' }}>
            <Button 
              color="inherit"
              sx={{
                fontWeight: isActive('/lectures') ? 600 : 400,
                borderBottom: isActive('/lectures') ? '2px solid white' : '2px solid transparent',
                borderRadius: 0,
                px: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderBottom: '2px solid rgba(255, 255, 255, 0.7)',
                },
                transition: 'all 0.2s',
              }}
            >
              Lectures
            </Button>
          </Link>
          <Link to="/tours" style={{ color: 'inherit', textDecoration: 'none' }}>
            <Button 
              color="inherit"
              sx={{
                fontWeight: isActive('/tours') ? 600 : 400,
                borderBottom: isActive('/tours') ? '2px solid white' : '2px solid transparent',
                borderRadius: 0,
                px: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderBottom: '2px solid rgba(255, 255, 255, 0.7)',
                },
                transition: 'all 0.2s',
              }}
            >
              Tours
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
