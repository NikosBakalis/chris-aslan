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
        Why not join Chris Aslan on a Silk Road adventure? Chris leads two-week tours to Uzbekistan and also multi-country tours of Central Asia or the Caucasus, and has decades of experience within the region. Whether booking Chris for a private tour, or joining one of his small group tours, travelling with him is never just a matter of sight-seeing. Expect an immersive experience; eating in local homes/yurts, picking cotton, feeding silkworms, haggling in bazaars, and visiting hammams or banyas for a good steam and a soak. Chris also includes informal talks as part of every tour to help you scratch beneath the surface and discover more about the places you’re visiting. Accommodation is either luxury or boutique and small groups are a maximum of 15 people.
        </Typography>
        <Typography variant="body1" paragraph>
        <strong>All tours for 2025 are full booked, except a few places on Lands of Fire and Wine.</strong> This tour begins in Baku, Azerbaijan and works through Azerbaijan and a large chunk of Georgia, taking in breath-taking scenery and churches, wine-tasting and hot-springs, before finishing in North East Turkey in the tea plantations and the jaw-dropping Sumela Monastery. More details here: <a href="https://www.indusexperiences.co.uk/tours/land-of-fire-and-wine-2025">https://www.indusexperiences.co.uk/tours/land-of-fire-and-wine-2025</a>
        </Typography>
        <Typography variant="body1" paragraph>
        For tours of Uzbekistan and Tajikistan in 2026, (spring and autumn) contact:
        </Typography>
        <Typography variant="body1" paragraph>
        <a href="https://www.aceculturaltours.co.uk">https://www.aceculturaltours.co.uk</a> and <a href="https://www.indusexperiences.co.uk">https://www.indusexperiences.co.uk</a> and ask for information about tours with Chris Aslan
        </Typography>
        <Typography variant="body1" paragraph>
        <strong>For a summer tour of Kazakhstan, Kyrgyzstan and Uzbekistan, contact <a href="https://www.steppestravel.com">https://www.steppestravel.com</a> and ask for tours with Chris Aslan.</strong>
        </Typography>
        <Typography variant="body1" paragraph>
        For an epic June trip along the Pamir and Karakorum Highway, across the mountains of Tajikistan, Kyrgyzstan, China and Pakistan, contact: <a href="https://www.mideasttrvl.com">https://www.mideasttrvl.com</a> and ask for tours with Chris Aslan.
        </Typography>
        <Typography variant="body1" paragraph>
        <strong>June 2026: Clash of Empires – the Pamir and Karakorum Highways</strong>
        </Typography>
        <Typography variant="body1" paragraph>
         I’m doing an exclusive trip with Spiekermann Travel Services that will not be a holiday, but it will be a trip of a lifetime and truly unforgettable. We start in Dushanbe, Tajikistan, and work our way up into the high Pamirs, passing Afghan villages, a mere stone’s throw away. We then head into Kyrgyzstan and then Kashgar in China for a few days to relax and explore this Uighur city before heading along the Karakorum Highway over the highest paved mountain border crossing in the world into Pakistan. The Hunza Valley is probably the most beautiful place I’ve ever been, and I can’t wait to return as well as explore the other beautiful mountains and valleys of Northern Pakistan, finishing the trip in Islamabad. For more details follow the link and ask for details of the Clash of Empires tour. <a href="https://www.mideasttrvl.com/">https://www.mideasttrvl.com/</a>
        </Typography>
        <Gallery images={images} />  {/* Gallery component to display images */}
      </Paper>
    </Container>
  );
}

export default Tours;
