import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
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
    <Container>
      <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
        <Typography variant="h1" gutterBottom>Tours</Typography>
        <Typography variant="body1" paragraph>
        Why not join Chris Aslan on a Silk Road adventure? Chris leads two-week tours to Uzbekistan and also multi-country tours of Asia and the Caucasus, and has decades of experience within the region. Whether booking Chris for a private tour, or joining one of his small group tours, travelling with him is never just a matter of sight-seeing. Expect an immersive experience; eating in local homes/yurts, picking cotton, feeding silkworms, haggling in bazaars, and visiting hammams or banyas for a good steam and a soak. Chris also includes informal talks as part of every tour to help you scratch beneath the surface and discover more about the places you're visiting. Accommodation is either luxury or boutique and small groups are a maximum of 15 people.
        </Typography>
        <Typography variant="h2" gutterBottom style={{ marginTop: '30px' }}>Upcoming Tours 2025</Typography>
        <Typography variant="h3" gutterBottom style={{ marginTop: '20px' }}>April</Typography>
        <Typography variant="body1" paragraph>
        Uzbekistan and Tajikistan with ACE cultural tours: <a href="https://www.aceculturaltours.co.uk/tours/uzbekistan-and-tajikistan-traversing-the-silk-road-uzt1-26">https://www.aceculturaltours.co.uk/tours/uzbekistan-and-tajikistan-traversing-the-silk-road-uzt1-26</a>
        </Typography>
        <Typography variant="h3" gutterBottom style={{ marginTop: '20px' }}>May</Typography>
        <Typography variant="body1" paragraph>
        Uzbekistan with Indus Experiences with Speikerman: <a href="https://www.indusexperiences.co.uk/tours/glories-of-uzbekistan-2026/">https://www.indusexperiences.co.uk/tours/glories-of-uzbekistan-2026/</a>
        </Typography>
        <Typography variant="h3" gutterBottom style={{ marginTop: '20px' }}>June</Typography>
        <Typography variant="body1" paragraph>
        Clash of Empires tour of Tajikistan, Kyrgyzstan, China and Pakistan, along the Pamir and Karakorum Highways with Spiekermann Travel: <a href="https://spiekermanntravel.com/clash-of-empires-jun26">https://spiekermanntravel.com/clash-of-empires-jun26</a>
        </Typography>
        <Typography variant="h3" gutterBottom style={{ marginTop: '20px' }}>August/September</Typography>
        <Typography variant="body1" paragraph>
        Tour of Kazakhstan, Kyrgyzstan and Uzbekistan (sold out) with Steppes Travel: <a href="https://www.steppestravel.com/group-tours/central-asia-group-tour-three-stans-with-chris-aslan/">https://www.steppestravel.com/group-tours/central-asia-group-tour-three-stans-with-chris-aslan/</a>
        </Typography>
        <Typography variant="h3" gutterBottom style={{ marginTop: '20px' }}>September</Typography>
        <Typography variant="body1" paragraph>
        Tour of Uzbekistan and Tajikistan with ACE cultural tours: <a href="https://www.aceculturaltours.co.uk/tours/uzbekistan-and-tajikistan-traversing-the-silk-road-uzt2-26">https://www.aceculturaltours.co.uk/tours/uzbekistan-and-tajikistan-traversing-the-silk-road-uzt2-26</a>
        </Typography>
        <Typography variant="h2" gutterBottom style={{ marginTop: '30px' }}>Upcoming Tours 2027</Typography>
        <Typography variant="h3" gutterBottom style={{ marginTop: '20px' }}>April</Typography>
        <Typography variant="body1" paragraph>
        Turkmenistan, Uzbekistan and Tajikistan with Steppes Travel: Contact Jim Davies for enquiries: <a href="mailto:jim@steppestravel.com">jim@steppestravel.com</a>
        </Typography>
        <Typography variant="h3" gutterBottom style={{ marginTop: '20px' }}>May</Typography>
        <Typography variant="body1" paragraph>
        Uzbekistan and Kyrgyzstan with ACE cultural tours. Contact Megan Lewis for enquiries: <a href="mailto:megan@aceculturaltours.co.uk">megan@aceculturaltours.co.uk</a>
        </Typography>
        <Typography variant="h3" gutterBottom style={{ marginTop: '20px' }}>August/September</Typography>
        <Typography variant="body1" paragraph>
        5 -stan tour of Central Asia with Academy travel: <a href="https://academytravel.com.au/eoi-the-five-stans-tour-august-2027">https://academytravel.com.au/eoi-the-five-stans-tour-august-2027</a>
        </Typography>
        <Typography variant="h3" gutterBottom style={{ marginTop: '20px' }}>September/October</Typography>
        <Typography variant="body1" paragraph>
        Uzbekistan, Kyrgyzstan, China, Pakistan and India, with Aahilya Holidays: <a href="https://www.aahilyaholidays.com/tour/aa5e/footprints-of-mughal---a-journey-through-the-silk-route-with-chris-aslan-2027">https://www.aahilyaholidays.com/tour/aa5e/footprints-of-mughal---a-journey-through-the-silk-route-with-chris-aslan-2027</a>
        </Typography>
        <Gallery images={images} />  {/* Gallery component to display images */}
      </Paper>
    </Container>
  );
}

export default Tours;
