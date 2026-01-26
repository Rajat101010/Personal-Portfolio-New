import './App.css';
import React from "react";
import ScrollToTop from "./features/ScrollToTop";


//routers(page changing)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//assets
import './assets/fonts.css';

//pages
import Home from './main_pages/home/home';
import About from './main_pages/about/about';
import Portfolio from './main_pages/portfolio/portfolio';
import Services from './main_pages/services/services';
import Blogs from './main_pages/blogs/blogs';
import ContactMe from './main_pages/contact_me/contact_me';

import Experience from './main_pages/experience/experience';
import Education from './main_pages/education/education';

import Projects from './main_pages/projects/projects';
import Certificates from './main_pages/certificates/certificates';

function App() {

  return (
    <main>

      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/contact-me' element={<ContactMe />} />

          <Route path='/experience' element={<Experience />} />
          <Route path='/education' element={<Education />} />

          <Route path='/projects' element={<Projects />} />
          <Route path='/certificates' element={<Certificates />} />
        </Routes>
      </Router>

    </main>
  );
}

export default App;
