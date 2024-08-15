'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-4 text-secondary-100 dark:text-primary-300 w-full">
      <nav className="flex justify-between items-center max-w-7xl mx-auto w-full px-4">
        {/* Logo on the left */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png" 
            alt="Mumair Logo"
            width={40}
            height={40}
          />
          <span className="text-4xl font-semibold text-secondary-200 dark:text-primary-300 font-montserrat">
            M
            <span className="text-secondary-300 dark:text-primary-300 text-xl font-normal tracking-widest">
              umair
            </span>
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="#home" className="block px-4 py-2">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="block px-4 py-2">
              About Me
            </Link>
          </li>
          <li>
            <Link href="#services" className="block px-4 py-2">
              Services
            </Link>
          </li>
          <li>
            <Link href="#projects" className="block px-4 py-2">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="block px-4 py-2">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="#contact" className="block px-4 py-2">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side: Download CV and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <Link
            href="/Brijesh Kumar resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-primary-100 text-white py-2 px-4 rounded-md"
            download
          >
            Download CV
          </Link>
          <ThemeToggle />
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            &#9776; {/* Hamburger icon */}
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <ul
          className={`fixed top-16 left-0 w-full bg-white dark:bg-gray-900 z-20 md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="border-b">
            <Link href="#home" className="block px-4 py-2">
              Home
            </Link>
          </li>
          <li className="border-b">
            <Link href="#about" className="block px-4 py-2">
              About Me
            </Link>
          </li>
          <li className="border-b">
            <Link href="#services" className="block px-4 py-2">
              Services
            </Link>
          </li>
          <li className="border-b">
            <Link href="#projects" className="block px-4 py-2">
              Projects
            </Link>
          </li>
          <li className="border-b">
            <Link href="#testimonials" className="block px-4 py-2">
              Testimonials
            </Link>
          </li>
          <li className="border-b">
            <Link href="#contact" className="block px-4 py-2">
              Contact
            </Link>
          </li>
          <li className="mt-4">
            <Link
              href="/Brijesh Kumar resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-primary-100 text-white py-2 px-4 rounded-md text-center"
              download
            >
              Download CV
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
