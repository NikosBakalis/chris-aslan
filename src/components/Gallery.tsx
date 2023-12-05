import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Gallery.css';
import { Box, Typography, Link } from '@mui/material';

interface GalleryProps {
  images?: string[];
  link?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, link }) => {
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
    <Box className="gallery" sx={{ width: 'auto', height: '46vh', overflow: 'hidden' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} className="gallery-item" sx={{ marginBottom: '2vh' }}>
            <Box component="img" src={image} alt={`Slide ${index + 1}`} />
          </Box>
        ))}
      </Slider>
      {link && (
        <Typography variant="body1" sx={{ margin: 2 }}>
          <Link href={link} color="inherit" target="_blank" rel="noopener noreferrer">
            More Information
          </Link>
        </Typography>
      )}
    </Box>
  );
}

export default Gallery;
