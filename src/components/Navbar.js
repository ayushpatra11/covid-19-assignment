import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import logo from '../images/logo.png'
import './Navbar.css';
import {Link as Links, animateScroll as scroll} from 'react-scroll';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar]=useState(false);
  const [link, setLink]=useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  
  const pathname= useLocation();
  const getLink= ()=>{
  console.log(pathname);
  pathname.pathname.localeCompare('/')===0?setLink(true): setLink(false);
  console.log(link);
  }

useEffect(() => {
  getLink();
}, [])

  useEffect(() => {
    showButton();
    
  }, []);

  window.addEventListener('resize', showButton);

  function handleNavbar(){
    if(window.scrollY>=120){
        setNavbar(true);
        setClick(false);
    }else if(window.scrollY<120){
        setNavbar(false);
    }
    // console.log(window.scrollY);
}

window.addEventListener('scroll', handleNavbar);



//

const toggleHome= () =>{
  scroll.scrollToTop();
}

// const scrollWithOffset = (el) => {
//   const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
//   const yOffset = -120; 
//   window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
// }

  return (
    <>
      <nav className={navbar ? 'navbar active': 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={toggleHome}>
            <img src={logo} alt="LOGO" className='logo' /> COVID-19
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className="home">
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Links  to='overview' className='nav-links' 
                spy={true} smooth={true} offset={-120} duration={500} exact='true'
                activeClass='nav-links-active' 
                >
                
                  Overview
                
                </Links>
            </li>
            <li className='nav-item'>
              <Links
              activeClass='nav-links-active'
              spy={true} smooth={true} offset={-120} duration={500} exact='true'
                to='contagion'
                className='nav-links'
                onClick={closeMobileMenu}
                
              >
                Contagion
              </Links>
            </li>
            
            <li className='nav-item'>
              <Links
              activeClass='nav-links-active'
              spy={true} smooth={true} offset={-120} duration={500} exact='true'
                to='symptoms'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Symptoms
              </Links>
            </li>

            <li>
              <Links
              activeClass='nav-links-active'
              spy={true} smooth={true} offset={-120} duration={500} exact='true'
                to='prevention'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Prevention
              </Links>
            </li>
            <li>{!button && <Button buttonStyle='btn--outline'>Contact Us</Button>}</li>
          </ul>
          </div>
            {button && <Button buttonStyle='btn--outline'>Contact Us</Button>}
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;