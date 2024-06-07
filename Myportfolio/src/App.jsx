import styles from "./App.module.css";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Navbar/Hero/Hero";
import About from "./component/Navbar/About/About";
import Experience from "./component/Navbar/Experience/Experience";
import Project from "./component/Navbar/Projects/Project";
import Contact from "./component/Contact/Contact";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
