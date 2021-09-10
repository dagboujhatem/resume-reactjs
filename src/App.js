import './scss/style.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// component imports
import Header from './components/Header';
import Footer from './components/Footer';
// page imports 
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Elements from './pages/Elements';
import PortfolioDetails from './pages/PortfolioDetails';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/single-blog">
            <SingleBlog />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/portfolio-details">
            <PortfolioDetails />
          </Route>
          <Route path="/elements">
            <Elements />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
