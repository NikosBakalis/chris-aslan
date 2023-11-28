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
    <Box sx={{ m: 2 }}>
      <Typography variant="h4" gutterBottom>
        Interview for {title}
      </Typography>
      <Grid container spacing={2}>
        {interviewQuestion.map((question, index) => (
          <Grid item xs={12} key={index}>
            <Box>
              <Typography variant="h6">{question}</Typography>
              <Typography variant="body1">{interviewAnswer[index]}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Interview;
