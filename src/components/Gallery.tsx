import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Gallery.css';
import {Box, Typography} from '@mui/material';

interface GalleryProps {
  images?: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Ensure that images are available and there's more than one image
  if (!images || images.length <= 1) {
    return (
      <Typography variant="h6" component="div">
        No images to display
      </Typography>
    );
  }

  return (
    <Box className="gallery" sx={{width: 'auto', height: '44vh', overflow: 'hidden'}}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} className="gallery-item" sx={{marginBottom: '2vh'}}>
            <Box component="img" src={image} alt={`Slide ${index + 1}`} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Gallery;
