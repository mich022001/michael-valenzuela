import Sidebar from "./components/Sidebar";
import Home from "./sections/Home";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "./index.css";

function App() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="content">
        <div style={{ flex: 1, padding: "20px" }}>
	  <section id="home" className="content-section">
	    <Home />
	  </section>
	  <section id="experience" className="content-selection">
	    <Experience />
	  </section>
	  <section id="projects" className="content-section">
	    <Projects />
	  </section>
	  <section id="contact" className="content-section">
	    <Contact />
	  </section>
        </div>
      </main>
    </div>
  );
}

export default App;
