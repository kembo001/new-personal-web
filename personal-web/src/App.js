import './App.css';
import Header from './componenets/Header';
import Banner from './componenets/Banner';
import About from './componenets/About';
import Skills from './componenets/Skills';
import Projects from './componenets/Projects';
import Contact from './componenets/Contact';


function App() {
  return (
    <div className="App">
      <Header />
    <section>
      <Banner />
    </section>

    <section>
      <About/>
    </section>

    <section>
      <Skills />
    </section>

    <section>
      <Projects />
    </section>

    <section>
      <Contact />
    </section>
    </div>
  );
}

export default App;
