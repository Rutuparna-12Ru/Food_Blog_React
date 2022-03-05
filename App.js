import React from "react";
import "./App.css";
import About from "./pages/About";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          
          <Route path="/about" exact component={About} />
          
        </Switch>
        <Footer />
      </Router>
    
   
    </div>
  );
}

export default App;
