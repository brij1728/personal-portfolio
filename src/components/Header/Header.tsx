import Image from 'next/image';
import Link from 'next/link';

export const Header = () => (
  <header className="p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <nav className="flex justify-between items-center max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <Image
          src="/logo.png" 
          alt="Mumair Logo"
          width={40}
          height={40}
        />
        <span className="text-4xl font-semibold text-secondary-200 font-montserrat">
            M
         <span className="text-secondary-300 text-xl font-normal tracking-widest">
            umair
          </span>
        </span>

      </div>

      <ul className="flex space-x-8">
        <li><Link href="#home" className="hover:text-primary">Home</Link></li>
        <li><Link href="#about" className="hover:text-primary">About Me</Link></li>
        <li><Link href="#services" className="hover:text-primary">Services</Link></li>
        <li><Link href="#projects" className="hover:text-primary">Projects</Link></li>
        <li><Link href="#testimonials" className="hover:text-primary">Testimonials</Link></li>
        <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
      </ul>

    
      <Link href="/Brijesh Kumar resume.pdf"  target="_blank" rel="noopener noreferrer" className="bg-primary text-white py-2 px-4 rounded-md hover:bg-orange-600" download>
        Download CV
      </Link>
    </nav>
  </header>
);

