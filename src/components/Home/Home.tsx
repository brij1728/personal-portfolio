import { Button } from '../ui';
import Image from 'next/image';
import React from 'react';
import { useTheme } from 'next-themes'; // Hook to detect dark mode in Next.js

export const Home = () => {
  const { theme } = useTheme(); // Get the current theme (light or dark)

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full p-8">
      {/* Left Side: Text Content */}
      <div className="flex flex-col space-y-4 max-w-lg">
        <h1 className="text-xl font-medium text-secondary-100 dark:text-primary-300">
          Hi I am
        </h1>
        <p className="text-2xl font-semibold text-primary-100">
          Muhammad Umair
        </p>
        <div className="text-5xl font-bold text-black dark:text-primary-300 leading-tight">
          <h2 className="text-left">UI & UX</h2>
          <h2 className="text-left md:pl-8">Designer</h2>
        </div>
        <p className="text-base text-secondary-100 dark:text-primary-300 mt-4">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
        </p>
        <Button className="bg-primary-100 text-white text-base py-2 px-4 rounded-md mt-6 md:w-[150px] w-full">
          Hire Me
        </Button>
      </div>

      {/* Right Side: Image and Social Media Icons */}
      <div className="relative mt-8 md:mt-0 md:ml-16 flex flex-col items-center">
        <Image
          src="/me.png"
          alt="Muhammad Umair"
          width={400}
          height={400}
          className="rounded-full"
        />
        <div className="flex justify-center items-center gap-4 pt-4">
          {/* Social Media Icons with Theme Handling */}
          <div className="p-2 rounded-full ">
            <Image
              src={theme === 'dark' ? '/dark-facebook.png' : '/facebook.png'}
              alt="Facebook"
              width={20}
              height={20}
            />
          </div>
          <div className="p-2 rounded-full">
            <Image
              src={theme === 'dark' ? '/dark-twitter.png' : '/twitter.png'}
              alt="Twitter"
              width={20}
              height={20}
            />
          </div>
          <div className="p-2 rounded-full">
            <Image
              src={theme === 'dark' ? '/dark-instagram.png' : '/instagram.png'}
              alt="Instagram"
              width={20}
              height={20}
            />
          </div>
          <div className="p-2 rounded-full">
            <Image
              src={theme === 'dark' ? '/dark-linkedin.png' : '/linkedin.png'}
              alt="LinkedIn"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
