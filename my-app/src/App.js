import './App.css';
import './css/Navbar.css';
import Nav from './components/navbar'
import About from './components/about'
import Contact from './components/contact'
import Testimonials from './components/testimonials';
import Home from './components/home'
import Services from './components/services'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reviews from './components/review'
import Copyright from './components/copyright';

function App() {
  return (
    <div className='web'>


<meta name="viewport" content="width=device-width, initial-scale=1.0" />

    
  <Nav/>
<div className='nav-compensation'></div>
<Home/>
 <About/> 
<Services/> 
<Testimonials/> 
<Reviews/>
<Contact/>
<Copyright/>



    </div>
  );
}

export default App;
