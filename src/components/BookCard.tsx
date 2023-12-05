import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

interface BookCardProps {
  image: string;
  title: string;
  id: string;
}

const BookCard: React.FC<BookCardProps> = ({ image, title }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={image}
          title={title}
          sx={{ height: '50vh' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BookCard;
