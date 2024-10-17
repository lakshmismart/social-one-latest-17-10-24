import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

import { Box } from '@mui/material';
import Button  from '@mui/material/Button';

const Header = () => {
  return (
    <Box>
       <header>
      <div className="container">
        <div className="esd">
          <div className="auth-buttons">
              <div>
                <a href='/#/'>
                  <img src={logo} alt="Maple Business Logo" />
                </a>
              </div>
              <nav>
                  <ul className="mb-2">
                  <li>
                      <NavLink to="/" activlassame="active" className="menu-color">
                      Overview
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/business-solutions" activlassame="active" className="menu-color">
                      Business Solutions
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/resources" activlassame="active" className="menu-color">
                      Resources
                      </NavLink>
                  </li>
                  <li>
                      <NavLink to="/faq" activlassame="active" className="menu-color">
                      FAQ
                      </NavLink>
                  </li>
                  </ul>
              </nav>
          </div>
          <div className="auth-buttons">
            <Button variant="" className="bg-info rounded text-white" href="/#/create-business">Manage Business</Button>
            <Button className="bg-primary rounded text-white border-0 px-4" href="/#/login">Sign In</Button>
            <div className="hamburger-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      
    </header>

    </Box>
   
  );
};

export default Header;
