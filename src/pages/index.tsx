import { AboutMe, Footer, Header, Services } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="flex-grow p-4">
        <section >
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4">Here is a showcase of my work and skills.</p>
        </section>
        <AboutMe />
        <Services />
        {/* Add other sections here like Projects, Testimonials, etc. */}
      </main>
      <Footer />
    </div>
  );
}
