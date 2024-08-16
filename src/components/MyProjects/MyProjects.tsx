import React, { useState } from 'react';

import Image from 'next/image';

const projectsData = [
  {
    category: 'Web Design',
    title: 'AirCalling Landing Page Design',
    image: '/air-project.png',
  },
  {
    category: 'Web Design',
    title: 'Business Landing Page Design',
    image: '/business-project.png',
  },
  {
    category: 'Web Design',
    title: 'Ecom Web Page Design',
    image: '/ecom-project.png',
  },
];

const categories = ['All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'];

export const MyProjects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projectsData.filter((project) =>
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <div className="flex flex-col items-center text-secondary-100 dark:text-primary-300 py-16">
      <h2 className="text-4xl font-bold">My Projects</h2>
      <p className="text-lg text-center mt-4 max-w-2xl">
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus.
        Phasellus consequat urna tellus
      </p>

      <div className="flex gap-4 mt-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-semibold border ${
              activeCategory === category
                ? 'bg-primary-100 text-primary-300 border-primary-300'
                : 'bg-primary-600 dark:bg-primary-300 text-secondary-100 border-secondary-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4 md:px-16">
        {filteredProjects.map((project, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={400}
                className="w-full object-cover"
              />
            </div>
            <p className="text-sm text-primary-100 mt-4">{project.category}</p>
            <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
