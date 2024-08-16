import { Box, Stack, Typography } from '@mui/material';

import Image from 'next/image';
import React from 'react';
import { SkillBar } from '../ui';

export const AboutMe = () => (
  <div className="flex flex-col md:flex-row justify-around items-center gap-8 w-full p-8">
    <div>
      <Image src="/me.png" alt="About Me" width={400} height={400} className="rounded-full" />
    </div>

    <div className="max-w-lg">
      <h2 className="text-3xl font-bold text-secondary-100 dark:text-primary-300 mb-4">About Me</h2>
      <p className="text-secondary-100 dark:text-primary-300 text-base mb-6">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
        Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
      </p>

    <Stack spacing={3}>
        <SkillBar skill="UX" value={90} />
        <SkillBar skill="Website Design" value={80} />
        <SkillBar skill="App Design" value={85} />
        <SkillBar skill="Graphic Design" value={70} />
      </Stack>
    </div>
  </div>
);