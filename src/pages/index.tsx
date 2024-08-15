import { AboutMe, Footer, Header, Home, Services } from "@/components";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="flex-grow w-full max-w-6xl p-4 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center w-full space-y-16">
          <Home />
          <AboutMe />
          <Services />
        </div>
      </main>
      <Footer />
    </div>
  );
}
