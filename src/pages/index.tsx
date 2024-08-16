import { AboutMe, Contact, Footer, Header, Home, MyProjects, Services, Testimonials } from "@/components";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-primary-300 dark:bg-secondary-200 text-secondary-100 dark:text-primary-300">
      <Header />
      <main className="flex-grow w-full max-w-6xl p-4 mx-auto flex flex-col justify-center">
        <div className="flex justify-between items-start w-full">
          <div className="flex-grow flex flex-col items-start space-y-16">
            <Home />
            <AboutMe />
            <Services />
            <MyProjects />
            <Testimonials />
            <Contact />
          </div>
          <div className="flex-grow flex justify-end items-start">
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
