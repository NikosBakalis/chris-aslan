import React from 'react';
import Gallery from './Gallery'; // Make sure the path is correct
import { Box, Typography } from '@mui/material';

interface VideoGalleryProps {
  videoUrl: string; // This prop seems unused in your current setup
  galleries: {
    heading: string;
    images?: string[];
  }[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videoUrl, galleries }) => {
  return (
    <Box className="video-gallery" sx={{ width: '100%', marginBottom: 4, overflowX: 'hidden' }}>
      <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative', paddingTop: '56.25%' }}>
        <iframe 
          src={videoUrl}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
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
