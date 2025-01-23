import logo from "./logo.svg";
import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGpt,
  Header,
} from "./containers";

import { Cta, Brand, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
