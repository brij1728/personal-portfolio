import { Box, LinearProgress, Typography } from '@mui/material';

import React from 'react';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#FF6B00', 
  },
}));

interface SkillBarProps {
  skill: string;
  value: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill, value }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
        {skill}
      </Typography>
      <BorderLinearProgress variant="determinate" value={value} />
    </Box>
  );
};

