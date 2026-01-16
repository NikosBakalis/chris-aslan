import React from 'react';
import { Container, Typography, Paper, Link, Box, Divider } from '@mui/material';
import Gallery from '../components/Gallery';  // Importing Gallery component
import Tour1 from '../assets/images/tours/37_DSC_9986_Khiva_160.jpg';
import Tour2 from '../assets/images/tours/2015-04-12 14.26.21.jpg';
import Tour3 from '../assets/images/tours/DSC_0198 (3).jpg';
import Tour4 from '../assets/images/tours/DSC_0805.jpg';
import Tour5 from '../assets/images/tours/Finish.jpg';
import Tour6 from '../assets/images/tours/IMG_0610.jpg';
import Tour7 from '../assets/images/tours/IMG_0770.jpg';
import Tour8 from '../assets/images/tours/IMG_0835.jpg';
import Tour9 from '../assets/images/tours/IMG_1429.jpg';
import Tour10 from '../assets/images/tours/IMG_1469.jpg';
import Tour11 from '../assets/images/tours/IMG_1490.jpg';
import Tour12 from '../assets/images/tours/IMG_6121.jpg';
import Tour13 from '../assets/images/tours/IMG_20190429_120749.jpg';
import Tour14 from '../assets/images/tours/IMG_20220512_123252.jpg';
import Tour15 from '../assets/images/tours/IMG_20220911_121635.jpg';
import Tour16 from '../assets/images/tours/IMG_20220911_215726.jpg';
import Tour17 from '../assets/images/tours/IMG_20220912_114533.jpg';
import Tour18 from '../assets/images/tours/IMG_20220925_164208.jpg';
import Tour19 from '../assets/images/tours/IMG_20221001_172519.jpg';
import Tour20 from '../assets/images/tours/P1010303.jpg';
import Tour21 from '../assets/images/tours/P1010720.jpg';
import Tour22 from '../assets/images/tours/P1010726.jpg';
import Tour23 from '../assets/images/tours/P1030402.jpg';
import Tour24 from '../assets/images/tours/Start.jpg';
import Tour25 from '../assets/images/tours/suzani banner.jpg';
import Tour26 from '../assets/images/tours/tour1.png';
import Tour27 from '../assets/images/tours/Tours 2.jpg';


const Tours: React.FC = () => {
  const images = [
    Tour1,
    Tour2,
    Tour3,
    Tour4,
    Tour5,
    Tour6,
    Tour7,
    Tour8,
    Tour9,
    Tour10,
    Tour11,
    Tour12,
    Tour13,
    Tour14,
    Tour15,
    Tour16,
    Tour17,
    Tour18,
    Tour19,
    Tour20,
    Tour21,
    Tour22,
    Tour23,
    Tour24,
    Tour25,
    Tour26,
    Tour27
  ];

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ padding: { xs: 3, md: 4 }, margin: '20px 0', borderRadius: 2 }}>
        <Typography variant="h2" gutterBottom sx={{ mb: 3, fontWeight: 600, color: 'text.primary' }}>
          Tours
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
          Why not join Chris Aslan on a Silk Road adventure? Chris leads two-week tours to Uzbekistan and also multi-country tours of Asia and the Caucasus, and has decades of experience within the region. Whether booking Chris for a private tour, or joining one of his small group tours, travelling with him is never just a matter of sight-seeing. Expect an immersive experience; eating in local homes/yurts, picking cotton, feeding silkworms, haggling in bazaars, and visiting hammams or banyas for a good steam and a soak. Chris also includes informal talks as part of every tour to help you scratch beneath the surface and discover more about the places you're visiting. Accommodation is either luxury or boutique and small groups are a maximum of 15 people.
        </Typography>
        
        <Divider sx={{ my: 4 }} />
        
        <Typography variant="h3" gutterBottom sx={{ mt: 4, mb: 3, fontWeight: 600, color: 'primary.main' }}>
          Upcoming Tours 2026
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>
            April
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            <Link href="https://www.aceculturaltours.co.uk/tours/uzbekistan-and-tajikistan-traversing-the-silk-road-uzt1-26" target="_blank" rel="noopener noreferrer" underline="hover" color="primary" sx={{ fontSize: '1rem' }}>
              Uzbekistan and Tajikistan with ACE cultural tours
            </Link>
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>
            May
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            <Link href="https://www.indusexperiences.co.uk/tours/glories-of-uzbekistan-2026/" target="_blank" rel="noopener noreferrer" underline="hover" color="primary" sx={{ fontSize: '1rem' }}>
              Uzbekistan with Indus Experiences with Speikerman
            </Link>
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>
            June
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            <Link href="https://spiekermanntravel.com/clash-of-empires-jun26" target="_blank" rel="noopener noreferrer" underline="hover" color="primary" sx={{ fontSize: '1rem' }}>
              Clash of Empires tour of Tajikistan, Kyrgyzstan, China and Pakistan, along the Pamir and Karakorum Highways with Spiekermann Travel
            </Link>
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>
            August/September
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            <Link href="https://www.steppestravel.com/group-tours/central-asia-group-tour-three-stans-with-chris-aslan/" target="_blank" rel="noopener noreferrer" underline="hover" color="primary" sx={{ fontSize: '1rem' }}>
              Tour of Kazakhstan, Kyrgyzstan and Uzbekistan (sold out) with Steppes Travel
            </Link>
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>
            September
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            <Link href="https://www.aceculturaltours.co.uk/tours/uzbekistan-and-tajikistan-traversing-the-silk-road-uzt2-26" target="_blank" rel="noopener noreferrer" underline="hover" color="primary" sx={{ fontSize: '1rem' }}>
              Tour of Uzbekistan and Tajikistan with ACE cultural tours
            </Link>
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />
        
        <Typography variant="h3" gutterBottom sx={{ mt: 4, mb: 3, fontWeight: 600, color: 'primary.main' }}>
          Upcoming Tours 2027
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>
            April
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Turkmenistan, Uzbekistan and Tajikistan with Steppes Travel: Contact Jim Davies for enquiries: <Link href="mailto:jim@steppestravel.com" underline="hover" color="primary" sx={{ fontSize: '1rem' }}>jim@steppestravel.com</Link>
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>
            May
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Uzbekistan and Kyrgyzstan with ACE cultural tours. Contact Megan Lewis for enquiries: <Link href="mailto:megan@aceculturaltours.co.uk" underline="hover" color="primary" sx={{ fontSize: '1rem' }}>megan@aceculturaltours.co.uk</Link>
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>
            August/September
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            <Link href="https://academytravel.com.au/eoi-the-five-stans-tour-august-2027" target="_blank" rel="noopener noreferrer" underline="hover" color="primary" sx={{ fontSize: '1rem' }}>
              5-stan tour of Central Asia with Academy travel
            </Link>
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>
            September/October
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            <Link href="https://www.aahilyaholidays.com/tour/aa5e/footprints-of-mughal---a-journey-through-the-silk-route-with-chris-aslan-2027" target="_blank" rel="noopener noreferrer" underline="hover" color="primary" sx={{ fontSize: '1rem' }}>
              Uzbekistan, Kyrgyzstan, China, Pakistan and India, with Aahilya Holidays
            </Link>
          </Typography>
        </Box>
        <Divider sx={{ my: 4 }} />
        
        <Box sx={{ mt: 4 }}>
          <Gallery images={images} />  {/* Gallery component to display images */}
        </Box>
      </Paper>
    </Container>
  );
}

export default Tours;
