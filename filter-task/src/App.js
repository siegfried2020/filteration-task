import {React, useState} from 'react';
import RoundRock from './RoundRock';
import AboutUsWhere from './AboutUsWhere';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact_Us from './ContactUs';
import './index.css';
import './queries.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





function App() {
  return (
    <div className="App">
      <RoundRock/>
      <AboutUsWhere/>
      <Services/>
      <Testimonials/>
      <Contact_Us/>
    </div>
  );
}




export default App;
