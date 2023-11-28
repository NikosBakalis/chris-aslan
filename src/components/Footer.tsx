import React from 'react';
import '../styles/footerStyles.css';
import { Facebook, Instagram, Email } from '@mui/icons-material';
import { Box, Link, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Box display="flex" flexDirection="column" alignItems="flex-start" paddingY={2} paddingLeft={2}>
        <Link href="https://www.facebook.com/christopher.alexander.31945" color="inherit" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
          <Facebook />
          <Typography variant="body1" component="span" style={{ marginLeft: 8 }}>Chris Aslan</Typography>
        </Link>
        <Link href="https://www.instagram.com/chrisaslanauthor/" color="inherit" target="_blank" style={{ display: 'flex', alignItems: 'center' }}>
          <Instagram />
          <Typography variant="body1" component="span" style={{ marginLeft: 8 }}>chrisaslanauthor</Typography>
        </Link>
        <Link href="mailto:chrisaslan@fastmail.fm" color="inherit" style={{ display: 'flex', alignItems: 'center' }}>
          <Email />
          <Typography variant="body1" component="span" style={{ marginLeft: 8 }}>chrisaslan@fastmail.fm</Typography>
        </Link>
      </Box>
    </footer>
  );
}

export default Footer;
