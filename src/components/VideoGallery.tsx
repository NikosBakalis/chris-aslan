import React from 'react';
import Gallery from './Gallery'; // Make sure the path is correct
import { Box, Typography } from '@mui/material';

interface VideoGalleryProps {
  videoUrl: string;
  galleries: {
    heading: string;
    images?: string[];
  }[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videoUrl, galleries }) => {
  return (
    <Box className="video-gallery" sx={{ width: '100%', marginBottom: 4, overflowX: 'hidden' }}>
      <Box component="video" controls sx={{ width: '100%' }}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
      {galleries.map((gallery, index) => (
        <Box key={index} className="gallery-section" sx={{ marginTop: 4 }}>
          <Typography variant="h5" gutterBottom>
            {gallery.heading}
          </Typography>
          <Gallery images={gallery.images} />
        </Box>
      ))}
    </Box>
  );
};

export default VideoGallery;
