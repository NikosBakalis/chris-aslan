import React from 'react';
import { Container, Typography, Paper, Grid, Card, CardContent, CardMedia } from '@mui/material';
import Carpet_Ride_to_Khiva from '../assets/images/lectures/Carpet Ride to Khiva.jpg'
import How_to_get_down_from_a_Yak from '../assets/images/lectures/How to get down from a Yak.jpg'
import Unravelling_the_Silk_Road from '../assets/images/lectures/Unravelling the Silk Road.png'
import Cotton_pickers_and_Cosmonauts from '../assets/images/lectures/Cotton-pickers and Cosmonauts.jpg'
import Banned_Savitsky from '../assets/images/lectures/Banned Savitsky.jpg'

const lecturesData = [
  {
    title: 'A CARPET RIDE TO KHIVA',
    description: 'This narrative lecture recounts the birth of the Khiva Silk Carpet Workshop, unpacking some of the themes from Chris’s first book, including his arrival in Khiva, Uzbekistan, and how the idea first came about for a silk carpet workshop. He explains his research into 15th century illuminated manuscripts to find forgotten carpet designs to be woven into life once more and explores the challenges of sourcing natural dyes in neighbouring Afghanistan, as well as the impact of corruption on the workshop and, ultimately, his forced departure from the country.',
    image: Carpet_Ride_to_Khiva
  },
  {
    title: 'HOW TO GET DOWN FROM A YAK – ADVENTURES IN CENTRAL ASIAN NOMADIC TEXTILES',
    description: 'Houses made from wool that warm in the depths of winter, carpets that tell stories, woven bands that appease ancestors, embroideries that ward off evil, and kilims that store kitchenware, with everything ready to be packed and carried on yak, or camel at a moment’s notice; the little-known nomadic textile cultures of the Kyrgyz, Turkoman and Karakalpak are explored in this lecture, along with Stalin’s destruction of nomadism and the few places where nomads still live in post-Soviet Central Asia. Chris talks about his own experience of working with nomadic yak herders in the High Pamirs, and the challenges of teaching them to comb their yaks for their cashmere-like down.',
    image: How_to_get_down_from_a_Yak
  },
  {
    title: 'UNRAVELLING THE SILK ROAD: A SERIES OF 3 ONE-HOUR LECTURES',
    description: 'Three textile roads tangle their way across Central Asia. There’s the best-known Silk Road, opening trade routes between east and west with a commodity more valuable than gold, and ushering in the first age of globalism. Older, is the Wool Road, with houses made from felted wool, allowing nomads to traverse some of the most inhospitable regions of the planet. Great nomadic cultures went on to dominate Middle Asia, and their textile legacy is breath-taking. Most recent is the Cotton Road, which has killed a sea and led to the colonisation of Central Asia by Russia and then the Soviets. A lecture on each of these roads blends artistry with politics, history and an assertion that textiles have utterly transformed the region.',
    image: Unravelling_the_Silk_Road
  },
  {
    title: 'COTTON-PICKERS AND COSMONAUTS – SOVIET CENTRAL ASIAN MOSAICS AND THE USE OF PUBLIC ART AS PROPAGANDA',
    description: 'This lecture explores the birth of the Soviet mosaic from its roots in Islamic mosaics and Communist propagandist posters through to the question of preservation in post-Soviet Central Asia. We explore why Soviet thinking was so keen to bring art out of galleries and into public spaces, and how, in an era when Socialist Realism was the only permitted artistic expression, every public artwork came with a message, a value and an agenda. How did Soviet artists deal with the uncomfortable reality that Muslim Central Asia was a Russian colonial conquest? In what ways were gender, race, work, leisure and achievement important when it came to shaping Central Asians’ ideas of their own identity within the wider Soviet family, and what agency did Central Asians have in portraying themselves in art?',
    image: Cotton_pickers_and_Cosmonauts
  },
  {
    title: 'BANNED; SAVITSKY AND THE SECRET HOARD OF AVANTE GARDE ART',
    description: 'Despite the flourishing of Russian Avante Garde Art during the first 30 years of the 20th Century, as Stalin rose to power, he banned all but Socialist Realist expressions of art. To own anything else was dangerous enough but to start collecting it was unthinkable. And yet this is what Igor Savitsky did. He travelled throughout the Soviet Union, buying, bribing and cajoling until he’d amassed the second largest collection of Russian Avante Garde art in the world. The State Museum of Karakalpakstan, situated near the south shores of the Aral Sea is now a Mecca for art lovers. It’s remote location in the desert oasis of Khorezm, meant that Savitsky was able to get away with such subversive activity, because even the authorities in Moscow were a little hazy as to where exactly Karakalpakstan was. Savitsky promoted Russian artists sent to Central Asia in exile and the works of the first Central Asian artists to paint their own people and landscapes.',
    image: Banned_Savitsky
  }
];

const Lectures: React.FC = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
        <Typography variant="h1" gutterBottom>Lectures</Typography>
        <Typography variant="body1" paragraph>
          Chris lectures both online and in-person. Most of his lectures are done through the Art society...
        </Typography>
        <Grid container spacing={4}>
          {lecturesData.map((lecture, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={lecture.title}
                  height="400vh"
                  image={lecture.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {lecture.title}
                  </Typography>
                  <Typography variant="body2">
                    {lecture.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}

export default Lectures;
