import React, { useState } from 'react';

export const Contact = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Email Submitted: ${email}`);
  };

  return (
    <div className="flex flex-col items-center py-16 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-black">Let&apos;s Design Together</h2>
      <p className="text-lg text-black text-center mt-4 max-w-2xl">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center mt-8 gap-4"
      >
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter Your Email"
          className="px-4 py-3 rounded-lg border border-gray-300 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-100 w-72 md:w-96"
          required
        />
        <button
          type="submit"
          className="bg-primary-100 text-white py-3 px-6 rounded-lg hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-100 transition"
        >
          Contact Me
        </button>
      </form>
    </div>
  );
};
