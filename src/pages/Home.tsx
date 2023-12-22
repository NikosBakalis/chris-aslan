import React from 'react';
import { Container, Typography, Paper, Avatar } from '@mui/material';
import ChrisImage from '../assets/images/chris.jpg';

const Home: React.FC = () => {
  return (
    <Container>
      <Paper elevation={3} sx={{ padding: '20px', margin: '20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <Avatar 
            variant="rounded" 
            src={ChrisImage} 
            alt="Chris Aslan" 
            sx={{
              width: '150px', 
              height: '210px', 
              marginRight: '20px',
              '@media (max-width: 600px)': {
                width: '100px', 
                height: '140px'
              }
            }} 
          />
          <Typography 
            variant="h1"
            sx={{
              '@media (max-width: 600px)': {
                fontSize: '1.5rem'
              }
            }}
          >
            A Bit About Chris
          </Typography>
        </div>
        <Typography variant="body1" paragraph>
          Chris Aslan was born in Turkey and spent his childhood there and in war-torn Beirut. After school, Chris spent two years at sea before studying media and journalism at Leicester University.
        </Typography>
        <Typography variant="body1" paragraph>
          He then moved to Khiva, a desert oasis in Uzbekistan, establishing a UNESCO workshop reviving fifteenth century carpet designs and embroideries, and becoming the largest non-government employer in town. He was kicked out as part of an anti-Western purge, and took a year in Cambridge to write A Carpet Ride to Khiva.
        </Typography>
        <Typography variant="body1" paragraph>
          Chris then spent several years in the Pamirs mountains of Tajikistan, training yak herders to comb their yaks for their cashmere-like down. Next came a couple more years in Kyrgyzstan living in the world’s largest natural walnut forest and establishing a wood-carving workshop.
        </Typography>
        <Typography variant="body1" paragraph>
          Now, Chris bases himself in North Cyprus where he works as a writer, spending part of each year in the UK, lecturing and catching up with friends and family. He still returns to Central Asia whenever he can to lead tours, having left a large chunk of his heart out there.
        </Typography>
      </Paper>
    </Container>
  );
}

export default Home;
