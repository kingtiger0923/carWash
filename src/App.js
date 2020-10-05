import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Loader from './views/components/Loader';
import MenuBar from './views/components/MenuBar';
import Home from './views/Home';
import AboutSection from './views/components/About';
import ContactUS from './views/components/ContactUS';
import GoogleMap from './views/components/GoogleMap';
import Footer from './views/components/Footer';
import BackToTop from './views/components/BackToTop';
import Section2 from './views/Section2';
import Section3 from './views/Section3';
import BubbleEffect from './views/components/BubbleEffect';

function App() {
  return (
    <div className="App">
      <Loader />
      <MenuBar />
      <Route exact path="/" component={BubbleEffect} />
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={Section2} />
      <Route exact path="/" component={Section3} />
      <Route exact path="/" component={AboutSection} />
      <Route exact path="/" component={GoogleMap} />
      <ContactUS />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;