import './scss/style.scss';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Brand from './components/Brand';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Brand/>
      <Features/>
      <Portfolio/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
