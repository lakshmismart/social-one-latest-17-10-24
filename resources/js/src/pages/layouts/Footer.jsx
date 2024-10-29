import { Component } from "react";
import React from "react";
import logo from "../../images/logo.png";
import vertical_line from "../../images/vertical line.png";
import mail from "../../images/mail.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/x.png";
import whatsapp from "../../images/dashicons_whatsapp.png";

const Footer = () => {
    return (
        <div>
            <footer className="py-4 bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="d-flex flex-column align-items-center">
                                <img
                                    src={logo}
                                    alt="Offers and Reviews"
                                    className="img-fluid mb-2"
                                />
                                <p className="text-center">
                                    Why our clients Love Us.
                                    <br />A good reputation is more valuable
                                    than money.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-4 ms-5 text-start" >
                            <ul className="list-unstyled">
                                < h5 className="font-weight-bold2 text-start">
                                    {" "}
                                    <b>MENU</b>
                                </h5>
                                <li className="my-2 text-start">
                                    <img
                                        src={vertical_line}
                                        alt="contact"
                                        className="img-fluid3"
                                    />
                                </li>
                            </ul>
                            <div className="align-items-center">
                                <h6 className="text-white mb-0">
                                    Business Solution
                                </h6> <br />
                                <h6 className="text-white mb-0">Resore</h6> <br />
                                <h6 className="text-white mb-0">FAQ</h6>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-4">
                            <ul className="list-unstyled">
                                <h5 className="font-weight-bold3 text-start">
                                    {" "}
                                    <b>CONTACT-US</b>
                                </h5>
                                <li className="my-2 text-start">
                                    <img
                                        src={vertical_line}
                                        alt="contact"
                                        className="img-fluid"
                                    />
                                </li>
                            </ul>
                            <div className="d-flex align-items-center">
                                <a
                                    href="mailto:staroneindia@gomaplegroup.com"
                                    className="text-white text-decoration-none d-flex align-items-center"
                                >
                                    <img
                                        src={whatsapp}
                                        alt="contact"
                                        className="img-fluid me-3"
                                    />
                                    <h6 className="mb-0">
                                        +91 9566208543
                                    </h6>
                                </a>
                            </div> <br />
                            <div className="d-flex align-items-center">
                                <a
                                    href="mailto:staroneindia@gomaplegroup.com"
                                    className="text-white text-decoration-none d-flex align-items-center"
                                >
                                    <img
                                        src={mail}
                                        alt="contact"
                                        className="img-fluid me-3"
                                    />
                                    <h6 className="mb-0">
                                        staroneindia@gmail.com
                                    </h6>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-4">
                            <ul className="list-unstyled text-center">
                                <h5 className="font-weight-bold text-start">
                                    {" "}
                                    <b>NEWS LETTER</b>
                                </h5>
                                <li className="my-2 text-start">
                                    <img
                                        src={vertical_line}
                                        alt="contact"
                                        className="img-fluid"
                                    />
                                </li>
                            </ul>

                            <p class="subscri fs-6 text-start" >Subscribe to our new channel to get latest updates</p>

                            {/* <input class="email1" type="text" name="email" placeholder="Enter your email" />
                            <div class="subsc">
                            <button class="email2">SUBSCRIBE</button>
                            </div> */}
                            <div className="d-flex justify-content-start aligin-items-center start">
                                <div className="d-flex flex-column align-items-center me-4">
                                    <a href="#" className="me-2">
                                        <img
                                            src={facebook}
                                            alt="facebook"x
                                            className="img-fluid1"
                                        />
                                    </a>
                                    <h6 className="mb-0">
                                        <a
                                            href="#"
                                            className="text-white text-decoration-none"
                                        >
                                            Facebook
                                        </a>
                                    </h6>
                                </div>
                                <div className="d-flex flex-column align-items-center me-4">
                                    <a href="#" className="me-2">
                                        <img
                                            src={instagram}
                                            alt="instagram"
                                            className="img-fluid1"
                                        />
                                    </a>
                                    <h6 className="mb-0">
                                        <a
                                            href="#"
                                            className="text-white text-decoration-none"
                                        >
                                            Instagram
                                        </a>
                                    </h6>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <a href="#" className="me-2">
                                        <img
                                            src={twitter}
                                            alt="twitter"
                                            className="img-fluid1"
                                        />
                                    </a>
                                    <h6 className="mb-0">
                                        <a
                                            href="#"
                                            className="text-white text-decoration-none"
                                        >
                                            Twitter
                                        </a>
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
