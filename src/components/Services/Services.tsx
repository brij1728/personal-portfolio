import Image from 'next/image';
export const Services = () => (
  <>
  <div className="flex flex-col justify-center items-center text-secondary-100 dark:text-primary-300">
        <h2 className='text-3xl  font-semibold '>Services</h2>
        <p className="text-base pt-10 ">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>

  </div>
  <div className='flex flex-col md:flex-row md:gap-6 gap-2'>
    <div className='bg-primary-600 dark:bg-primary-300 flex flex-col'>
      <div className='pt-8 pb-2 px-4'>
      <Image src="/ui.png" alt="service1" width={70} height={80} />

      <h3 className='text-2xl text-secondary-100'>UI/UX </h3>
      <p className='text-base text-secondary-100 '>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      </div>
    </div>
    <div className='bg-primary-600 dark:bg-primary-300 flex flex-col'>
      <div className='pt-8 pb-2 px-4'>
      <Image src="/web.png" alt="service1" width={70} height={80} />

      <h3 className='text-2xl text-secondary-100'>Web Design</h3>
      <p className='text-base text-secondary-100 '>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      </div>
    </div>
    <div className='bg-primary-600 dark:bg-primary-300 flex flex-col'>
      <div className='pt-8 pb-2 px-4'>
      <Image src="/app.png" alt="service1" width={70} height={80} />

      <h3 className='text-2xl text-secondary-100'>App Design</h3>
      <p className='text-base text-secondary-100 '>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      </div>
    </div>
    <div className='bg-primary-600 dark:bg-primary-300 flex flex-col '>
      <div className='pt-8 pb-2 px-4'>
      <Image src="/graphic.png" alt="service1" width={70} height={80} />

      <h3 className='text-2xl text-secondary-100'>Graphic Design</h3>
      <p className='text-base text-secondary-100 '>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
      </div>
    </div>
  </div>
  </>
);

