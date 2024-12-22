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
    <Box className="video-gallery" sx={{ marginBottom: 4, overflowX: 'hidden' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 4 }}>
        <Box
          sx={{
            width: '100%',
            maxWidth: '900px',
            height: '500px',
            position: 'relative',
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
        <Box key={index} className="gallery-section" sx={{ marginTop: 4, marginLeft: 2 }}>
          <Typography variant="h4" gutterBottom sx={{textDecoration: 'underline'}}>
            {gallery.heading}
          </Typography>
          <Gallery images={gallery.images || []} />
        </Box>
      ))}
    </Box>
  );
};

export default VideoGallery;
