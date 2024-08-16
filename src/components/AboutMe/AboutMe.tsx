import { Box, Stack, Typography } from '@mui/material';

import Image from 'next/image';
import React from 'react';
import {SkillBar} from '../ui';

export const AboutMe = () => (
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 8, p: 4 }}>
    <Box>
      <Image src="/me.png" alt="About Me" width={400} height={400} className="rounded-full" />
    </Box>

    <Box sx={{ maxWidth: '600px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        About Me
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
        Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
      </Typography>

      <Stack spacing={3}>
        <SkillBar skill="UX" value={90} />
        <SkillBar skill="Website Design" value={80} />
        <SkillBar skill="App Design" value={85} />
        <SkillBar skill="Graphic Design" value={70} />
      </Stack>
    </Box>
  </Box>
);
