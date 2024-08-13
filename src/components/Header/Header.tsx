import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle';

export const Header = () => (
  <header className="p-4  text-secondary-100 dark:text-primary-300">
    <nav className="flex justify-between items-center max-w-7xl mx-auto">
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

      <ul className="flex space-x-8 nav-links">
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#about">About Me</Link>
        </li>
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#testimonials">Testimonials</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>

      <ThemeToggle/>

      <Link
        href="/Brijesh Kumar resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary-100 text-white py-2 px-4 rounded-md"
        download
      >
        Download CV
      </Link>

    </nav>
  </header>
);
