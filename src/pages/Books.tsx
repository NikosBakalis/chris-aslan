import React, { useState } from 'react';
import { Container, Grid, Typography, Dialog, Paper } from '@mui/material';
import BookCard from '../components/BookCard';
import Gallery from '../components/Gallery';
import Interview from '../components/Interview';
import VideoGallery from '../components/VideoGallery'
import Unravelling_the_Silk_Road from '../assets/images/book-covers/Unravelling the Silk Road/Unravelling_the_Silk_Road.jpg'
import A_Carpet_Ride_to_Khiva from '../assets/images/book-covers/A Carpet Ride to Khiva/paperback cover.jpg'
import Alabaster from '../assets/images/book-covers/Alabaster/ALABASTER cover art.jpg'
import Manacle from '../assets/images/book-covers/Manacle/Manacle front cover.jpg'
import Mosaic from '../assets/images/book-covers/Mosaic/no border.jpg'
import image1 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/5 kunya kizlar.jpg'
import image2 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/73189534_10162372029460593_5622516226627469312_o.jpg';
import image3 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Aina and bag.jpg';
import image4 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Alti Buchek close-up.jpg';
import image5 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Beating the weft.jpg';
import image6 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Benaki blue border.jpg';
import image7 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/day to day life.jpg';
import image8 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/different colours.jpg';
import image9 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/from ferris wheel.jpg';
import image10 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/GC jan 2004 Jean 067.jpg';
import image11 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/girls at work.jpg';
import image12 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/girls weaving2.jpg';
import image13 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Girls.jpg';
import image14 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Humayan girls.jpg';
import image15 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/IMG_20220512_123215.jpg';
import image16 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/IMG_20220512_123405.jpg';
import image17 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/IMG_20220512_153727.jpg';
import image18 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/IMG_20220516_115216.jpg';
import image19 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/IMG_7504.jpg';
import image20 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Jahongir.jpg';
import image21 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Joi Namaz Pakhlavan.jpg';
import image22 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Khan frame.jpg';
import image23 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Latest Pictures 004.jpg';
import image24 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/loom.jpg';
import image25 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/madder root.jpg';
import image26 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Madrim Dyeing.jpg';
import image27 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Mirza Borg girls.jpg';
import image28 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Mongol trimming.jpg';
import image29 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Olma Gul Closeup.jpg';
import image30 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Ota Darvasa - cream.jpg';
import image31 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Our house and the old city.jpg';
import image32 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Rusmat and surunai.jpg';
import image33 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/sajda gul.jpg';
import image34 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Sayara and mates.jpg';
import image35 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Selection1.jpg';
import image36 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Stitching.jpg';
import image37 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Stringing the loom.jpg';
import image38 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Tamchi Gul and girls.jpg';
import image39 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Tea-stained Tolkin.jpg';
import image40 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Tolkin trimming.jpg';
import image41 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Tosh Hauli.jpg';
import image42 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/uzbekistan 062.jpg';
import image43 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Washing Shah Rukh.jpg';
import image44 from '../assets/images/book-covers/A Carpet Ride to Khiva/Carpet Ride to Khiva gallery/Weaving close up.jpg';
import the_wool_road_image_1 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/1.jpg';
import the_wool_road_image_2 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/2.jpg';
import the_wool_road_image_3 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/3.jpg';
import the_wool_road_image_4 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/4.jpg';
import the_wool_road_image_5 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/5.jpg';
import the_wool_road_image_6 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/6.jpg';
import the_wool_road_image_7 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/7.jpg';
import the_wool_road_image_8 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/8.jpg';
import the_wool_road_image_9 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/9.jpg';
import the_wool_road_image_10 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/10.jpg';
import the_wool_road_image_11 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/11.jpg';
import the_wool_road_image_12 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/12.jpg';
import the_wool_road_image_13 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/13.jpg';
import the_wool_road_image_14 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/14.jpg';
import the_wool_road_image_15 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/15.jpg';
import the_wool_road_image_16 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/16.jpg';
import the_wool_road_image_17 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/17.jpg';
import the_wool_road_image_18 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/18.jpg';
import the_wool_road_image_19 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/19.jpg';
import the_wool_road_image_20 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/20.jpg';
import the_wool_road_image_21 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/21.jpg';
import the_wool_road_image_22 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/22.jpg';
import the_wool_road_image_23 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/23.jpg';
import the_wool_road_image_24 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/24.jpg';
import the_wool_road_image_25 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/25.jpg';
import the_wool_road_image_26 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/26.jpg';
import the_wool_road_image_27 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/27.jpg';
import the_wool_road_image_28 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/28.jpg';
import the_wool_road_image_29 from '../assets/images/book-covers/Unravelling the Silk Road/The Wool Road/29.jpg';
import the_silk_road_image_1 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/1.jpg';
import the_silk_road_image_2 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/2.jpg';
import the_silk_road_image_3 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/3.jpg';
import the_silk_road_image_4 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/4.jpg';
import the_silk_road_image_5 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/5.jpg';
import the_silk_road_image_6 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/6.jpg';
import the_silk_road_image_7 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/7.jpg';
import the_silk_road_image_8 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/8.jpg';
import the_silk_road_image_9 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/9.jpg';
import the_silk_road_image_10 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/10.jpg';
import the_silk_road_image_11 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/11.jpg';
import the_silk_road_image_12 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/12.jpg';
import the_silk_road_image_13 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/13.jpg';
import the_silk_road_image_14 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/14.jpg';
import the_silk_road_image_15 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/15.jpg';
import the_silk_road_image_16 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/16.jpg';
import the_silk_road_image_17 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/17.jpg';
import the_silk_road_image_18 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/18.jpg';
import the_silk_road_image_19 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/19.jpg';
import the_silk_road_image_20 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/20.jpg';
import the_silk_road_image_21 from '../assets/images/book-covers/Unravelling the Silk Road/The Silk Road/21.jpg';
import the_cotton_road_image_1 from '../assets/images/book-covers/Unravelling the Silk Road/The Cotton Road/1.jpg';
import the_cotton_road_image_2 from '../assets/images/book-covers/Unravelling the Silk Road/The Cotton Road/1.jpg';
import the_cotton_road_image_3 from '../assets/images/book-covers/Unravelling the Silk Road/The Cotton Road/1.jpg';
import the_cotton_road_image_4 from '../assets/images/book-covers/Unravelling the Silk Road/The Cotton Road/1.jpg';
import the_cotton_road_image_5 from '../assets/images/book-covers/Unravelling the Silk Road/The Cotton Road/1.jpg';
import the_cotton_road_image_6 from '../assets/images/book-covers/Unravelling the Silk Road/The Cotton Road/1.jpg';
import the_cotton_road_image_7 from '../assets/images/book-covers/Unravelling the Silk Road/The Cotton Road/1.jpg';
import the_cotton_road_image_8 from '../assets/images/book-covers/Unravelling the Silk Road/The Cotton Road/1.jpg';
import the_cotton_road_image_9 from '../assets/images/book-covers/Unravelling the Silk Road/The Cotton Road/1.jpg';
import the_cotton_road_image_10 from '../assets/images/book-covers/Unravelling the Silk Road/The Cotton Road/1.jpg';
import the_cotton_road_image_11 from '../assets/images/book-covers/Unravelling the Silk Road/The Cotton Road/1.jpg';
import the_cotton_road_image_12 from '../assets/images/book-covers/Unravelling the Silk Road/The Cotton Road/1.jpg';
import the_cotton_road_image_13 from '../assets/images/book-covers/Unravelling the Silk Road/The Cotton Road/1.jpg';
import the_cotton_road_image_14 from '../assets/images/book-covers/Unravelling the Silk Road/The Cotton Road/1.jpg';
import the_cotton_road_image_15 from '../assets/images/book-covers/Unravelling the Silk Road/The Cotton Road/1.jpg';
import the_cotton_road_image_16 from '../assets/images/book-covers/Unravelling the Silk Road/The Cotton Road/1.jpg';

enum BookType {
  Gallery = 'Gallery',
  Interview = 'Interview',
  VideoGallery = 'VideoGallery',
}

interface GalleryBook {
  id: string;
  title: string;
  image: string;
  type: BookType.Gallery;
  gallery: string[];
}

interface InterviewBook {
  id: string;
  title: string;
  image: string;
  type: BookType.Interview;
  interviewQuestion: string[];
  interviewAnswer: string[];
}

interface VideoGalleryBook {
  id: string;
  title: string;
  image: string;
  type: BookType.VideoGallery;
  videoUrl: string;
  galleries: {
    heading: string;
    images?: string[];
  }[];
}

type Book = GalleryBook | InterviewBook | VideoGalleryBook;

const Books: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const booksData: Book[] = [
    { id: 'Unravelling the Silk Road', title: 'Unravelling the Silk Road', image: Unravelling_the_Silk_Road, type: BookType.VideoGallery, videoUrl: 'https://www.youtube.com/embed/eykp6WyLmWE',
    galleries: [
      {
        heading: 'The Wool Road',
        images: [
          the_wool_road_image_1,
          the_wool_road_image_2,
          the_wool_road_image_3,
          the_wool_road_image_4,
          the_wool_road_image_5,
          the_wool_road_image_6,
          the_wool_road_image_7,
          the_wool_road_image_8,
          the_wool_road_image_9,
          the_wool_road_image_10,
          the_wool_road_image_11,
          the_wool_road_image_12,
          the_wool_road_image_13,
          the_wool_road_image_14,
          the_wool_road_image_15,
          the_wool_road_image_16,
          the_wool_road_image_17,
          the_wool_road_image_18,
          the_wool_road_image_19,
          the_wool_road_image_20,
          the_wool_road_image_21,
          the_wool_road_image_22,
          the_wool_road_image_23,
          the_wool_road_image_24,
          the_wool_road_image_25,
          the_wool_road_image_26,
          the_wool_road_image_27,
          the_wool_road_image_28,
          the_wool_road_image_29,
        ]
      },
      {
        heading: 'The Silk Road',
        images: [
          the_silk_road_image_1,
          the_silk_road_image_2,
          the_silk_road_image_3,
          the_silk_road_image_4,
          the_silk_road_image_5,
          the_silk_road_image_6,
          the_silk_road_image_7,
          the_silk_road_image_8,
          the_silk_road_image_9,
          the_silk_road_image_10,
          the_silk_road_image_11,
          the_silk_road_image_12,
          the_silk_road_image_13,
          the_silk_road_image_14,
          the_silk_road_image_15,
          the_silk_road_image_16,
          the_silk_road_image_17,
          the_silk_road_image_18,
          the_silk_road_image_19,
          the_silk_road_image_20,
          the_silk_road_image_21,
        ]
      },
      {
        heading: 'The Cotton Road',
        images: [
          the_cotton_road_image_1,
          the_cotton_road_image_2,
          the_cotton_road_image_3,
          the_cotton_road_image_4,
          the_cotton_road_image_5,
          the_cotton_road_image_6,
          the_cotton_road_image_7,
          the_cotton_road_image_8,
          the_cotton_road_image_9,
          the_cotton_road_image_10,
          the_cotton_road_image_11,
          the_cotton_road_image_12,
          the_cotton_road_image_13,
          the_cotton_road_image_14,
          the_cotton_road_image_15,
          the_cotton_road_image_16,
        ]
      },
    ] },
    { id: 'A Carpet Ride to Khiva' , title: 'A Carpet Ride to Khiva', image: A_Carpet_Ride_to_Khiva, type: BookType.Gallery, gallery: [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
      image19,
      image20,
      image21,
      image22,
      image23,
      image24,
      image25,
      image26,
      image27,
      image28,
      image29,
      image30,
      image31,
      image32,
      image33,
      image34,
      image35,
      image36,
      image37,
      image38,
      image39,
      image40,
      image41,
      image42,
      image43,
      image44] },
    { id: 'Alabaster', title: 'Alabaster', image: Alabaster, type: BookType.Interview, interviewQuestion: [
      'Q: Alabaster is your first published novel. Where did the idea come from?',
      'Q: How easy was it to find Maryam’s voice?',
      'Q: Many readers have commented on the twist which they hadn’t seen coming, which is that the time period and location of the story aren’t immediately obvious. They had assumed that Alabaster was set in, perhaps, Afghanistan or somewhere like that.',
      'Q: What message were you hoping to get across through the novel?',
      'Q: Did writing the novel affect you in any way?'],
    interviewAnswer: [
      'A: I happened to be at a church service and the sermon was on the Gospel story of Mary breaking a jar of pure nard over the feet of Jesus, earning a rebuke from Judas, who states that the jar was worth a year’s wages and could have been used to better purposes. I got to thinking; how would a seemingly ordinary family come into possession of something so valuable? I reasoned that perfumed oil must have some kind of sell-by date, so it couldn’t have been a family heirloom. I flicked through my Bible to the different accounts of this family. There was no mention of parents, just the three siblings, in the home of Simon the Leper. I was left with a whole load of questions, and my exploration and speculation about these became the genesis of this novel.',
      'A: Maryam came to me fully formed. She’s a composite of many of the girls I worked with in the carpet workshop in Khiva, who have talent and ambition but are considered too spirited for a patriarchal society and therefore need ‘putting I their place’. I loved giving them a voice.',
      'A: I’ve found that one of the pitfalls of historical novels and particularly ones set in Biblical times, is that they can feel bogged down in attempts by the author to show all their historical research. I wanted to give this story a sense of freshness, and immediacy so, instead of terms such as ‘centurions’, I used, ‘western soldiers’. I also opted to use the original Hebrew/Aramaic names for my characters, not the Hellenised ones that are better-known in the West, as I wanted to ground the story more in its original Middle Eastern context. All this ended up throwing readers off the scent, and often surprising them when they discovered when and where the story is set.',
      'A: Well, the story deals with lots of different issues, which I’ve tried to handle with sensitively and a sense of fairness. With all the novels in this anthology I want to get across how destructive and man-made religion is, and how Jesus brings something different and better – even if Christendom has hugely undermined that message. I also wanted to undo some of the unhelpful Sunday school imagery of people at the time of Jesus walking around in dressing gowns looking happy. First century Palestine was not a nice place to live, and for women in particular, they were both oppressed by Roman occupation, but also by the patriarchal culture and religion around them. It felt important to capture that.\nI also wanted to write a novel – and then a series of novels – that aren’t about Jesus, but rather about the impact of Jesus. So often we read about encounters with Jesus in the gospel accounts, which are so fleeting and yet so life-changing. I wanted to explore some of these and imagine what might have come before and after. I also walked a tightrope of writing for a predominantly English-speaking readership, but wanting the story to have a Middle Eastern feel and worldview. Most followers of Jesus today are not from Western countries, and I wanted to affirm this and to establish that Jesus is for everyone.',
      'A: Very much so. I tend to really imagine myself there as whichever character I’m writing about. So, for the rape scene, for example, it was pretty grim writing that. However, for other scenes, I felt as if I’d had the privilege to hop into a time machine and watch Jesus in action. I remember crying as I wrote the scene where a group of people with leprosy are all getting healed, one after the other, because it felt so worshipful to be there, in a way, and to record the wonders of Jesus. Interestingly, I wrote most of the novel in one relatively quick chunk just before moving to Oxford to study theology. I found this chapter of my life so full of religion, and yet so spiritually barren, and it felt as if my encounters with Jesus through writing Alabaster, were like water in my camel hump, that kept me going through this desert.'] },
    { id: 'Manacle', title: 'Manacle', image: Manacle, type: BookType.Interview, interviewQuestion: [
      'Q: This is a dark story. Why was it one you wanted to write?',
      'Q: Few narratives are written in the second person. Why did you choose this device?',
      'Q: Couldn’t you have given this harrowing tale a happier ending?'],
      interviewAnswer: [
      'A: There are a few moments when reading the eyewitness accounts of Jesus’ life, where I’m left scratching my head in confusion. The story that I based this novel on, is one of them.\nIn the gospel accounts, the story begins with Jesus suddenly announcing to his apprentices that he wants to travel to the other side of the lake – an area of non-Jews and somewhere they would rarely, if ever, venture. En route, a huge storm prevents them from making landfall. It seems clear to me that this storm is not coincidental or simply bad weather, but nor does it prevent Jesus from arriving at his destination, where he comes to liberate a young man in bondage.\nThere are four requests in this story. In the first, the apprentices in the boat beg Jesus to wake up and help them in the storm. He does. The second request, is from the unclean spirits, who beg Jesus to not send them into the abyss. Jesus has mercy on them, too – and you never hear preachers talk about Jesus fulfilling demonic requests as I’m not sure we know what to do with that theologically. Then, thirdly, the townspeople, who have just lost all their savings due to the huge herds of pigs running into the lake to their deaths, beg Jesus to leave. They don’t want anymore trouble. Jesus does as they ask. So far, Jesus has done everything asked of him. Then, finally, the young man who has been spiritually tormented for years and treated as a wild animal by his own community, begs Jesus to let him join him. And Jesus says no. \nI found this so bewildering as this last request seems to me to be the one that most deserves a ‘yes’. Instead, Jesus tells the young man to go back to his family in one gospel account and to go to the Decapolis (the ten cities) in another, to tell everyone about what the Lord had done for him. So, I wanted to explore why Jesus said this, without having any hard and fast answers, and to imagine what might have led up to the young man’s encounter with Jesus, and then what might have come next.',
      'A: The only books I’ve ever read using the second person are ‘choose-your-own-adventure’ style books. ‘You do this, and then you do that’ etc. There’s something uncomfortably directive and even coercive about reading in the second person, and for the section told from the perspective of the unclean spirits, this felt like the right approach. They also speak collectively, so there’s a fair bit of ‘we’ as well. I was quite relieved to reach the second half of the novel and switch to the more familiar first-person.',
      'A: Of course I could, but in some ways the ending of this story is the ultimate happy ending, as Phin sees the a glimpse of the glories to come. Originally, I’d planned for Phin to be filled with the Holy Spirit, which would put an end to his nightmares. Then I realised that Phin had to return to his village, and that there could only be one way that this would end. I actually cried when the ending came to me, perhaps in part because I see a lot of myself in Phin, and I would have loved for things to have worked out better for him. However, as I wrote the novel, I was hearing stories from friends of mine living in countries where followers of Jesus are really persecuted, and I wanted to be true to their experience. For many followers of Jesus, walking in the footsteps of Jesus is good, but it’s also really hard and if we don’t have stories that reflect and perhaps normalise that, it can come as a surprise, whereas Jesus always made it clear that it would happen.'] },
    { id: 'Mosaic', title: 'Mosaic', image: Mosaic, type: BookType.Interview, interviewQuestion: [
      'Q: Mosaic is set in a mountainous village. How easy was it to create the sense of place?',
      'Q: How easy was it to find Tabi’s voice?',
      'Q: With Alabaster, the twist for many readers was that they didn’t realise that the story was set in New Testament times. It’s not a trick you can play twice.',
      'Q: You mentioned that you have more stories planned, can you tell us more?'],
      interviewAnswer: [
      'A: I lived in the mountains of Badakhshan in Tajikistan and then in the Fergana Mountain Range in Kyrgyzstan. Both experiences helped me understand some of the insularity and suspicion of mountain communities, but also how precarious they can be – at the mercies of avalanches, or mudslides – and how tough the people are who live there. So, I drew on those life experiences. However, Tabi’s village isn’t in Central Asia, so I remembered back to my childhood, growing up in Beirut, but escaping the big city at weekends on family drives up to the mountains, and tried to remember what the flora and fauna of the mountains of Lebanon were like as Tabi lives on the southern tip of this range.',
      'A: I tried to capture the way in which Tabi grows up in within the period of the novel, as it’s a coming-of-age story. I really enjoyed writing about the shifting power dynamics that take place amongst a group of children who are stuck together – in this case as the only children of their age in the village – as puberty kicks in and often creates new winners and losers. I think that a lot of young teens have toxic friendships to whom they are doomed to play second fiddle. I loved writing Tabi’s flaws. She can be cruel and unforgiving, including after she’s encountered Jesus. I wanted to ensure that she didn’t become angelic at this point, as that’s certainly not been my own experience! I also loved writing the breadth of other characters, as there is a strong ensemble cast, with a nice mix of different characters. I particularly loved writing the Hand, and the changing family dynamics around Tabi.',
      'A: Well, each of the books in the Alabaster series (and there are more planned) are written as stand-alone novels within the same anthology. So, if someone starts with Mosaic, they may well have the same experience. What I enjoyed with this novel was interlinking several unconnected New Testament stories, and for many readers familiar with these stories, the twist, if you can call it that, was the sudden recognition of, ‘Oh, so we’re here’, as the narrative unfolded.',
      'A: I’ve written a fourth instalment, called Frankincense, which is about a spoilt boy who is told to accompany his grandfather on a long journey to right a previous wrong. The narrative then splits into two timelines and explores aspects of the Nativity story and the trauma and repercussions of what happened in Bethlehem. My previous publishers went bust, so I’m currently looking for alternatives. I’d also like to write a fifth book, where the entire novel takes place over just one week, and would be told from multiple points of view. It would be called Passion, so I’ll leave you to figure out which week we’re talking about!'] },
  ];

  const handleOpen = (book: Book) => {
    setSelectedBook(book);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', margin: '20px 0' }}>
        <Typography variant="h1">Books</Typography>
        <Grid container spacing={2}>
          {booksData.map((book, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} onClick={() => handleOpen(book)}>
              <BookCard {...book} />
            </Grid>
          ))}
        </Grid>
          {selectedBook && (
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
              <Typography variant="h2">{selectedBook.title}</Typography>
              {selectedBook.type === BookType.Gallery ? (
                <Gallery images={selectedBook.gallery} link='http://www.acarpetridetokhiva.com' />
              ) : selectedBook.type === BookType.Interview ? (
                <Interview title={selectedBook.title} interviewQuestion={selectedBook.interviewQuestion} interviewAnswer={selectedBook.interviewAnswer} />
              ) : (
                <VideoGallery videoUrl={selectedBook.videoUrl} galleries={selectedBook.galleries} />
              )}
            </Dialog>
          )}
      </Paper>
    </Container>
  );
}

export default Books;
