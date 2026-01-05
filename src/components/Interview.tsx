import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface InterviewProps {
  id?: string;
  title?: string;
  interviewQuestion: string[];
  interviewAnswer: string[];
}

const Interview: React.FC<InterviewProps> = ({ title, interviewQuestion, interviewAnswer }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{
          mb: 4,
          fontWeight: 600,
          color: 'primary.main',
          pb: 2,
          borderBottom: '2px solid',
          borderColor: 'divider',
        }}
      >
        Interview for {title}
      </Typography>
      <Grid container spacing={3}>
        {interviewQuestion.map((question, index) => (
          <Grid item xs={12} key={index}>
            <Box
              sx={{
                mb: 3,
                p: 2,
                backgroundColor: 'background.default',
                borderRadius: 2,
              }}
            >
              <Typography 
                variant='h6' 
                fontWeight='600'
                sx={{
                  mb: 2,
                  color: 'text.primary',
                }}
              >
                {question}
              </Typography>
              <Typography 
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  whiteSpace: 'pre-line',
                }}
              >
                {interviewAnswer[index]}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Interview;
