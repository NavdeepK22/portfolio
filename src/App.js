
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes ,Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import Projectportflio from './pages/Projectportfolio';
import Recommendations from './pages/Recommendations';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import DownloadCV from './pages/DownloadCV';
import { Container, Navbar } from 'react-bootstrap';
import {FaLinkedin,FaGithub } from "react-icons/fa";
import Card from "react-bootstrap/Card"; 
const App=()=>{
  return (
<>

<div className='bg-banner cf'>
<Navbar className='navbar navbar-dark  fixed-top  clr'>

<Container className='bckclrnav'>
<ul className="navbar-nav nav-gap nav-menu">
<Link className='nav-item active  nav-link ' to="/"><li>Home</li></Link>
<Link className='nav-item    nav-link ' to="/projectportflio"><li>Project Portflio</li></Link>
<Link className='nav-item  nav-link ' to="/recommendations"><li>Recommendations</li></Link>
<Link className='nav-item nav-link    ' to="/certifications"><li>Certifications</li></Link>
<Link className='nav-item   nav-link  ' to="/contact"><li>Contact</li></Link>
<Link className='nav-item  nav-link   '  to="/downloadCV"><li>DownloadCV</li></Link>
</ul>
</Container>

</Navbar>
<Routes>
  <Route path='/' Component={Home}></Route>
  <Route path='/projectportflio' Component={Projectportflio}></Route>
  <Route path='/recommendations' Component={Recommendations}></Route>
  <Route path='/certifications' Component={Certifications}></Route>
  <Route path='/contact' Component={Contact}></Route>
  <Route path='/downloadCV' Component={DownloadCV}></Route>
</Routes>
</div>


<Container fluid className='bckblk footerclr'>
     <Container>
      <Card.Text>      
          <p>
          <FaLinkedin /> <FaGithub /> 
          </p>
          <footer className=" footerclr">
           @2022 Simranjeet Singh <cite title="Source Title">All Rights Reserved</cite>
          </footer>
     
      </Card.Text>
    </Container>
    </Container>

</>
  );
}

export default App;
