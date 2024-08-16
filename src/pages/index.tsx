import { AboutMe, Contact, Footer, Header, Home, MyProjects, Services, Testimonials } from "@/components";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-primary-300 dark:bg-secondary-200 text-secondary-100 dark:text-primary-300">
      <Header />
      <main className="flex-grow w-full max-w-6xl p-4 mx-auto flex flex-col justify-center">
        <section id="home" className="flex-grow flex flex-col items-start space-y-16">
          <Home />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <MyProjects />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
