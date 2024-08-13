export const Services = () => (
  <section className="p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <h2 className="text-2xl font-bold">Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="service-card">
        <h3 className="font-semibold">UI/UX Design</h3>
        <p>Creating visually appealing user interfaces.</p>
      </div>
      <div className="service-card">
        <h3 className="font-semibold">Web Design</h3>
        <p>Modern and responsive web design services.</p>
      </div>
      <div className="service-card">
        <h3 className="font-semibold">App Design</h3>
        <p>Designing intuitive and user-friendly apps.</p>
      </div>
      <div className="service-card">
        <h3 className="font-semibold">Graphic Design</h3>
        <p>Stunning graphic design for branding purposes.</p>
      </div>
    </div>
  </section>
);

