import { Button } from '../ui';
import React from 'react';

export const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="text-secondary-100 dark:text-primary-300 flex flex-col justify-center items-center text-center">
        {/* Ensure text-center is applied for multiline centering */}
        <h2 className="text-3xl font-bold">Lets Design Together</h2>
        <p className="text-base font-poppins pt-4 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          Aliquet donec morbi convallis pretium
        </p>
      </div>

      <div className="mt-6">
        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Adjust gap and alignment for responsiveness */}
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-primary-600 text-secondary-600 border border-secondary-700 text-base p-3 rounded-xl mt-4 md:mt-0 w-full md:w-auto"
          />
          <Button className="bg-primary-100 text-primary-300 font-semibold dark:text-primary-300 p-3 rounded-lg mt-4 md:mt-0 w-full md:w-auto">
            Contact Me
          </Button>
        </form>
      </div>
    </div>
  );
};
