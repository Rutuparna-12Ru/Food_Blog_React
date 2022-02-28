import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipe" exact component={Recipe} />
          <Route path="/reviews" exact component={Reviews} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>    
    </div>
    
  );
}

export default App;
