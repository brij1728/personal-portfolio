import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export const Footer = () => {
  const { theme } = useTheme(); 

  return (
    <div className='mt-10 bg-primary-600 dark:bg-secondary-200 pt-10'>
      <div className="flex flex-col justify-center items-center gap-10">
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

        <div>
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
        </div>

        <div className="flex justify-center items-center gap-4 pt-4 pb-6">
          <div className="p-2 rounded-full">
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

      <footer className="p-4 bg-secondary-300 dark:bg-secondary-400 text-primary-300 flex w-full justify-center items-center">
        <p className="text-sm font-light">
          &copy; 2023 <span className="text-primary-100 font-semibold">Mumair</span> All Rights Reserved, Inc.
        </p>
      </footer>
    </div>
  );
};
