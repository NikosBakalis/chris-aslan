import React from 'react';
import { Container, Typography, Paper, Avatar, Box } from '@mui/material';
import ChrisImage from '../assets/images/chris.jpg';

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Paper 
        elevation={3} 
        sx={{ 
          padding: { xs: 3, md: 4 }, 
          margin: '20px 0',
          borderRadius: 2,
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            mb: 4,
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 3,
          }}
        >
          <Avatar 
            variant="rounded" 
            src={ChrisImage} 
            alt="Chris Aslan" 
            sx={{
              width: { xs: 120, sm: 150 }, 
              height: { xs: 168, sm: 210 }, 
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }} 
          />
          <Typography 
            variant="h2"
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            A Bit About Chris
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
            Chris Aslan was born in Turkey and spent his childhood there and in war-torn Beirut. After school, Chris spent two years at sea before studying media and journalism at Leicester University.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
            He then moved to Khiva, a desert oasis in Uzbekistan, establishing a UNESCO workshop reviving fifteenth century carpet designs and embroideries, and becoming the largest non-government employer in town. He was kicked out as part of an anti-Western purge, and took a year in Cambridge to write A Carpet Ride to Khiva.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
            Chris then spent several years in the Pamirs mountains of Tajikistan, training yak herders to comb their yaks for their cashmere-like down. Next came a couple more years in Kyrgyzstan living in the world's largest natural walnut forest and establishing a wood-carving workshop.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
            Now, Chris bases himself in North Cyprus where he works as a writer, spending part of each year in the UK, lecturing and catching up with friends and family. He still returns to Central Asia whenever he can to lead tours, having left a large chunk of his heart out there.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Home;
