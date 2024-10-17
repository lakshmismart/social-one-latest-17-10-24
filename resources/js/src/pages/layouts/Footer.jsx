import { Component } from 'react';
import React from 'react';
import logo from '../../images/logo.png';
import vertical_line from '../../images/vertical line.png';
import mail from '../../images/mail.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import twitter from '../../images/x.png';

const Footer = () => {
  return (
    <div>
        <footer className="py-4 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 mb-4">
                        <div className="d-flex flex-column align-items-center">
                            <img src={logo} alt="Offers and Reviews" className="img-fluid mb-2" />
                            <p className="text-center">Why our clients Love Us.<br />A good reputation is more valuable than money.</p>
                        </div>
                    </div>
        
                    <div className="col-md-3 col-sm-6 mb-4">
                        <ul className="list-unstyled">
                            <li className="font-weight-bold">Menu</li>
                            <li className="my-2">
                                <img src={vertical_line} alt="contact" className="img-fluid" />
                            </li>
                        </ul>
                        <div className="align-items-center">
                            <h6 className="text-white mb-0">Business Solution</h6>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 mb-4">
                        <ul className="list-unstyled">
                            <li className="font-weight-bold">Contact Us</li>
                            <li className="my-2">
                                <img src={vertical_line} alt="contact" className="img-fluid" />
                            </li>
                        </ul>
                        <div className="d-flex align-items-center">
                            <a href="mailto:staroneindia@gomaplegroup.com" className="text-white text-decoration-none d-flex align-items-center">
                                <img src={mail} alt="contact" className="img-fluid me-3" />
                                <h6 className="mb-0">
                                    staroneindia@gomaplegroup.com
                                </h6>
                            </a>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-6 mb-4">
                        <ul className="list-unstyled text-center">
                            <li className="font-weight-bold">Connect with Us</li>
                            <li className="my-2">
                                <img src={vertical_line} alt="contact" className="img-fluid" />
                            </li>
                        </ul>
                        <div className="d-flex flex-column align-items-center">
                            <div className="d-flex align-items-center mb-3">
                                <a href="#" className="me-2">
                                    <img src={facebook} alt="facebook" className="img-fluid" />
                                </a>
                                <h6 className="mb-0">
                                    <a href="#" className="text-white text-decoration-none">Facebook</a>
                                </h6>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <a href="#" className="me-2">
                                    <img src={instagram} alt="instagram" className="img-fluid" />
                                </a>
                                <h6 className="mb-0">
                                    <a href="#" className="text-white text-decoration-none">Instagram</a>
                                </h6>
                            </div>
                            <div className="d-flex align-items-center">
                                <a href="#" className="me-2">
                                    <img src={twitter} alt="x" className="img-fluid" />
                                </a>
                                <h6 className="mb-0">
                                    <a href="#" className="text-white text-decoration-none">Twitter</a>
                                </h6>
                            </div>
                        </div>
                    </div>         
                </div>
            </div>
        </footer>
    </div>
  );
};

export default Footer;
