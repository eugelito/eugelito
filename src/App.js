/** SCSS */
import "./App.scss";
/** Components */
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <div className="content">
        <About/>
        <Projects/>
        <Contact/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
