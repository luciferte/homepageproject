import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Intro/Intro";
import Services from "./Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works"
import Projects from "./Components/Projects/Projects"
import Testimonial from "./Components/Testinomials/Testinomials";
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services />
      <Experience />
      <Works />
      <Projects />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;