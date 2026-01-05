import React from 'react';
import '../styles/footerStyles.css';
import { Facebook, Instagram, Email } from '@mui/icons-material';
import { Box, Link, Typography, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1565C0 0%, #0d47a1 100%)',
          color: 'white',
          py: 3,
          mt: 'auto',
        }}
      >
        <Container maxWidth="lg">
          <Box 
            display="flex" 
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            justifyContent="space-between"
            gap={2}
          >
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              © {new Date().getFullYear()} Chris Aslan. All rights reserved.
            </Typography>
            <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={3}>
              <Link 
                href="https://www.facebook.com/christopher.alexander.31945" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': {
                    opacity: 0.8,
                  },
                  transition: 'opacity 0.2s',
                }}
              >
                <Facebook sx={{ mr: 1 }} />
                <Typography variant="body2">Chris Aslan</Typography>
              </Link>
              <Link 
                href="https://www.instagram.com/chrisaslanauthor/" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': {
                    opacity: 0.8,
                  },
                  transition: 'opacity 0.2s',
                }}
              >
                <Instagram sx={{ mr: 1 }} />
                <Typography variant="body2">chrisaslanauthor</Typography>
              </Link>
              <Link 
                href="mailto:chrisaslan@fastmail.fm"
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': {
                    opacity: 0.8,
                  },
                  transition: 'opacity 0.2s',
                }}
              >
                <Email sx={{ mr: 1 }} />
                <Typography variant="body2">chrisaslan@fastmail.fm</Typography>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
