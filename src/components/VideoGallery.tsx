import React from 'react';
import Gallery from './Gallery';
import { Box, Typography } from '@mui/material';
import ReactPlayer from 'react-player';

interface VideoGalleryProps {
  videoUrl: string;
  galleries: {
    heading: string;
    images?: string[];
  }[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videoUrl, galleries }) => {
  return (
    <Box className="video-gallery" sx={{ p: 3, overflowX: 'hidden' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Box
          sx={{
            width: '100%',
            maxWidth: '900px',
            height: { xs: '300px', sm: '400px', md: '500px' },
            position: 'relative',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          }}
        >
          <ReactPlayer
            url={videoUrl}
            controls
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: 0, left: 0 }}
            playing={false}
          />
        </Box>
      </Box>
      {galleries.map((gallery, index) => (
        <Box 
          key={index} 
          className="gallery-section" 
          sx={{ 
            mt: 4,
            mb: 4,
            px: { xs: 1, sm: 2 },
          }}
        >
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{
              mb: 3,
              fontWeight: 600,
              color: 'primary.main',
              pb: 2,
              borderBottom: '2px solid',
              borderColor: 'divider',
            }}
          >
            {gallery.heading}
          </Typography>
          <Gallery images={gallery.images || []} />
        </Box>
      ))}
    </Box>
  );
};

export default VideoGallery;
