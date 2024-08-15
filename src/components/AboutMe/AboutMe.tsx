import Image from 'next/image';
export const AboutMe = () => (
   <div className='flex justify-around gap-8'>
  <div>
    <Image src="/me.png" alt="About Me" width={400} height={400} />
    
  </div>
  <div>
    <h2 className='text-3xl font-bold  text-secondary-100'>About Me</h2>

  </div>
  </div>

);

