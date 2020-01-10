import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import About from "./containers/About/About";
import Home from "./containers/Home/Home";
import Service from "./containers/Service/Service";
import Portfolio from "./containers/Portfolio/Portfolio";
import Resume from "./containers/Resume/Resume";
import CvPdf from "./containers/CvPDF/CvPDF";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/download/cv" component={CvPdf}></Route>
        <Route path="/" component={MainRoute}></Route>
      </Switch>
    </Router>
  );
}

const MainRoute = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/services" component={Service}></Route>
        <Route path="/portfolio" component={Portfolio}></Route>
        <Route path="/resume" component={Resume}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
