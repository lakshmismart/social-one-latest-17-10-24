import React, { useState } from 'react';
import mail from '../../../images/mail.png';
import facebook from '../../../images/facebook.png';
import more from '../../../images/icons/more.png';
import down from '../../../images/icons/down.png';

import Dashboard from '../Dashboard';
import Business from '../Business';
import { BASE_URL } from "../../../App";

// Import other necessary icons here...

const Sidebar = () => {
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleSubmenu = (submenu) => {
        console.log("before : ",openSubmenu, submenu)
        setOpenSubmenu(openSubmenu === submenu ? null : submenu);
        console.log("after :",openSubmenu, submenu)
    };
    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span>Menu</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href={`${BASE_URL}`+"/#/dashboard"} className="nav-link align-middle px-0">
                            <img src={facebook} alt="contact" className="img-fluid" /> 
                            <span className="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href={`${BASE_URL}`+"/#/dashboard"} onClick={() => toggleSubmenu('submenu1')} className="nav-link px-0 align-middle">
                            <img src={mail} alt="contact" className="img-fluid" />
                            <span className="ms-1 d-none d-sm-inline">Dashboard</span>                          
                            <img src={openSubmenu === 'submenu1' ? more : down} alt="Toggle submenu" className="ms-2" width="10"/>                           
                        </a>
                        <ul className={`collapse nav flex-column ms-1 ${openSubmenu === 'submenu1' ? 'show' : ''}`} id="submenu1">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href={`${BASE_URL}`+"/#/dashboard"} onClick={() => toggleSubmenu('submenu2')} className="nav-link px-0 align-middle">
                            <img src={mail} alt="contact" className="img-fluid" />
                            <span className="ms-1 d-none d-sm-inline">Business</span>                          
                            <img src={openSubmenu === 'submenu2' ? more : down} alt="Toggle submenu" className="ms-2"  data-toggle="collapse" data-target="#submenu1" width="10"/>                           
                        </a>
                        {/* ${openSubmenu === 'submenu2' ? 'show' : ''} */}
                        <ul className={`collapse nav flex-column ms-1`} id="submenu1">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">View Business</span> 1 </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
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
    );
};

export default Sidebar;
