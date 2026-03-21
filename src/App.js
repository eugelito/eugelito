/** Components */
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-transparent text-[var(--color-text)]">
      <Navbar />
      <Header />
      <main className="mx-4 my-6 flex min-h-[calc(100vh-85px)] flex-1 flex-wrap sm:mx-6 sm:my-8 md:mx-8">
        <div className="mx-auto mb-20 mt-2 w-full max-w-[70rem] text-left [&>div:not(:first-of-type)]:mt-24">
          <About />
          <Projects />
        </div>
      </main>
      <ScrollToTop />
    </div>
  );
};

export default App;
