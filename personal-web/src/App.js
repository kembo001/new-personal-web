import './App.css';
import Header from './componenets/Header';
import Banner from './componenets/Banner';
import About from './componenets/About';


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

    </div>
  );
}

export default App;
