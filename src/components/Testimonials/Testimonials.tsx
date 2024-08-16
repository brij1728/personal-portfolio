import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

const testimonialsData = [
  {
    name: 'John Doe',
    role: 'CEO',
    image: '/testimonials1.png',
    quote:
      'Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum.',
  },
  {
    name: 'Jane Smith',
    role: 'Product Manager',
    image: '/testimonials1.png',
    quote:
      'Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.',
  },
  {
    name: 'Alex Johnson',
    role: 'Developer',
    image: '/testimonials1.png',
    quote:
      'Lorem ipsum dolor sit amet consectetur. Id leo urna velit neque mattis id tellus arcu condimentum.',
  },
];

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="py-16 flex flex-col justify-center items-center w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary-100 dark:text-primary-300">Testimonials</h2>
        <p className="text-base text-secondary-100 dark:text-primary-300 mt-4 max-w-2xl mx-auto font-poppins">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          Aliquet donec morbi convallis pretium
        </p>
      </div>

      <div className="max-w-4xl mx-auto w-full"> {/* Ensure full width and centered */}
        <Slider {...settings} className="slick-custom">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="px-8">
              <div className="flex flex-col md:flex-row items-center bg-primary-600 p-8 rounded-lg shadow-lg">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div className="md:ml-8 mt-4 md:mt-0 text-center md:text-left">
                  <p className="text-base text-secondary-500 font-poppins">
                    {testimonial.quote}
                  </p>
                  <p className="mt-4 font-bold text-secondary-100">{testimonial.name}</p>
                  <p className="text-sm text-secondary-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
