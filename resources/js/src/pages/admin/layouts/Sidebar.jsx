import React, { useState } from 'react';
import mail from '../../../images/mail.png';
import facebook from '../../../images/facebook.png';
import more from '../../../images/icons/more.png';
import down from '../../../images/icons/down.png';
import logo from '../../../images/logo.png';

import Dashboard from '../Dashboard';
import Business from '../Business';
import { BASE_URL } from "../../../App";



const Sidebar = () => {
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const toggleSubmenu = (submenu) => {
        // Toggle submenu state
        setOpenSubmenu(openSubmenu === submenu ? null : submenu);
    };
    return (
        <div className='col-auto col-md-3 col-xl-2 sidebar-theme side-border'>
             <div className="px-sm-2 px-0 ">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <div className='d-flex justify-content-center align-items-center border-bottom w-100'>
                    <a href="/" className="mx-auto pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span> <img src={logo} alt="contact" className="img-fluid" /> </span>
                    </a>

                    <i id="nav-bar-toggle-icon" class="bx bx-arrow-to-left"></i>
                </div>
                
                <ul className="nav nav-pills mt-3 flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="my-2 mt-1 w-100  menu-link">
                        <a href={`${BASE_URL}`+"/#/dashboard"} className="nav-link  menu-link d-flex align-items-center px-0">
                            <span class="flat bx bxs-dashboard"></span>
                            <span className="px-3 d-none d-sm-inline medium-font-size">Dashboard</span>
                        </a>
                    </li>

                    <li className="my-2 w-100  menu-link">
                        <a href={`${BASE_URL}`+"/#/dashboard"} className="nav-link menu-link  d-flex align-items-center px-0">
                            <span class="flat bx bxs-user"></span>
                            <span className="px-3 d-none d-sm-inline menu-theme medium-font-size">Users Details</span>
                        </a>
                    </li>

                    <li className="my-2 w-100  menu-link">
                        <a href={`${BASE_URL}`+"/#/business"} className="nav-link   menu-link d-flex align-items-center px-0">
                            <span class="flat bx bxs-dashboard"></span>
                            <span className="px-3 d-none d-sm-inline menu-theme medium-font-size">Business </span>
                        </a>
                    </li>

                    <li className="nav-item p-2">
                <a href={`${BASE_URL}` + "/#/dashboard"} onClick={() => toggleSubmenu('submenu1')} className="nav-link px-0 align-middle">
                    <img src={mail} alt="contact" className="img-fluid" />
                    <span className="ms-3 d-none d-sm-inline menu-theme">Dashboard</span>

                    {/* Right arrow icon that rotates when submenu opens */}
                    <img src={more}  
                        style={{ 
                            transform: openSubmenu === 'submenu1' ? 'rotate(90deg)' : 'rotate(0deg)', 
                            transition: 'transform 0.3s ease-in-out' 
                        }}  
                        alt="Toggle submenu" className="ms-2" width="10" />
                </a>

                {/* Submenu items */}
                <ul className={`nav flex-column ms-1 ${openSubmenu === 'submenu1' ? 'show' : 'collapse'}`} id="submenu1" style={{ transition: 'all 0.3s ease-in-out' }}>
                    <li className="w-100">
                        <a href="#" className="nav-link px-0"> 
                            <span className="d-none d-sm-inline menu-theme">Item</span> 1 
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0"> 
                            <span className="d-none d-sm-inline menu-theme">Item</span> 2 
                        </a>
                    </li>
                </ul>
            </li>
                    <li className="nav-item p-2">
                        <a href={`${BASE_URL}`+"/#/dashboard"} onClick={() => toggleSubmenu('submenu2')} className="nav-link px-0 align-middle">
                            <img src={mail} alt="contact" className="img-fluid" />
                            <span className="ms-3 d-none d-sm-inline menu-theme">Business</span>
                            <img src={openSubmenu === 'submenu2' ? more : down} alt="Toggle submenu" className="ms-2"  data-toggle="collapse" data-target="#submenu1" width="10"/>
                        </a>
                       
                        <ul className={`collapse nav flex-column ms-3 ${openSubmenu === 'submenu2' ? 'show' : ''}`} id="submenu1">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline menu-theme">View Business</span> 1 </a>
                            </li>
                            
                        </ul>
                    </li>

                    {/* Other main menu items... */}
                </ul>
                <hr />
                <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="user" width="30" height="30" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>

        </div>
       
    );
};

export default Sidebar;
