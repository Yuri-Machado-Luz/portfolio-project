import { AnimatedBackground } from "@components";
import { About, Contact, Footer, Hero, Navbar, Projects } from "@layout";
import "@styles/index.css";

function App() {
  return (
    <>
      <AnimatedBackground />
      <header className="flex w-full justify-center pt-6">
        <Navbar />
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
