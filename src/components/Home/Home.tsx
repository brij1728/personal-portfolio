import { Button } from '../ui';
import Image from 'next/image';
import React from 'react';

export const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full p-8">
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

      <div className="relative mt-8 md:mt-0 md:ml-16 flex flex-col items-center">
        <Image
          src="/me.png"
          alt="Muhammad Umair"
          width={400}
          height={400}
          className="rounded-full"
        />
        <div className="flex justify-center items-center gap-4 pt-4">
          <Image
            src="/facebook.png"
            alt="Facebook"
            width={30}
            height={30}
          />
          <Image
            src="/twitter.png"
            alt="Twitter"
            width={30}
            height={30}
          />
          <Image
            src="/instagram.png"
            alt="Instagram"
            width={30}
            height={30}
          />
          <Image
            src="/linkedin.png"
            alt="Linkedin"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
};
