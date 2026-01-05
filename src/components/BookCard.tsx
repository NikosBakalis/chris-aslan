import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

interface BookCardProps {
  image: string;
  title: string;
  id: string;
}

const BookCard: React.FC<BookCardProps> = ({ image, title }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        },
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <CardActionArea sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <CardMedia
          component="img"
          alt={title}
          image={image}
          title={title}
          sx={{ 
            height: { xs: '400px', sm: '500px', md: '550px' },
            objectFit: 'cover',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
        <CardContent sx={{ flexGrow: 0 }}>
          <Typography 
            gutterBottom 
            variant="h5" 
            component="div"
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              textAlign: 'center',
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BookCard;
