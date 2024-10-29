import { Component } from 'react';
import React from 'react';
import Button from '@mui/material/Button';
import { Grid, Box, Paper, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';

import Slider from "react-slick";

import shop1 from '../../images/shops/shop-img-1.png';
import shop1_logo from '../../images/shops/shop1-logo.png';
import camera_white from '../../images/camera-white.png';
import location_icon from '../../images/location_icon.png';

import search from '../../images/search.png';
import Group_1260 from '../../images/Group 1260.png';
import top_rated from '../../images/top-rated.png';
import listings from '../../images/listings.png';
import review from '../../images/review.png';
import free from '../../images/free.png';

import offer_image from '../../images/offer_image.png';
import one from '../../images/1.png';
import two from '../../images/2.png';
import three from '../../images/3.png';
import Group_1274 from '../../images/Group 1274.png';

import Frame from '../../images/Frame.png';
import range from '../../images/range.png';
import location_pic from '../../images/location-pic.png';
import explore from '../../images/explore.png';

import Group_1280 from '../../images/Group 1280.png';
import logo from '../../images/logo.png';
import vertical_line from '../../images/vertical line.png';
import mail from '../../images/mail.png';
import facebook from '../../images/facebook.png';
import instagram from '../../images/instagram.png';
import x from '../../images/x.png';

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import  { useState, useEffect } from 'react';
import { BASE_URL } from "../../App";

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            location: '',
            relatedShops: [],
            suggestions : [],

        };
    }

    componentDidMount() {
        this.getLocation();
        this.setupFAQ();
        this.setupHamburgerMenu();
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition.bind(this), this.showError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    showPosition(position) {
        // const { latitude, longitude } = position.coords;
        // this.fetchLocationDetails(latitude, longitude);
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("Latitude: " + latitude + ", Longitude: " + longitude);
        this.fetchLocationDetails(latitude, longitude);
    }

    fetchLocationDetails(latitude, longitude) {
        console.log("Latitude: " + latitude + ", Longitude: " + longitude);
        const apiKey = '6caf98b6bc8c4231be6aeb8c5e0505b9'; // Replace with your API key
        // const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
        const url =`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data && data.features && data.features.length > 0) {
                //if (data.status === "OK") {
                    // const address = data.results[0].formatted_address;
                    const address = data.features[0].properties.formatted;
                    console.log("address :", address);
                    this.setState({ location: `Your Location: ${address}` });
                    this.sendCurrentLocation(latitude, longitude, address);
                } else {
                    console.error('Error fetching location details:', data.status);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    sendCurrentLocation(latitude, longitude, address) {
        console.log("inside function : ",latitude, longitude, address);
        const url = "http://127.0.0.1:8000/api/get-related-business";
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ latitude, longitude, address }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network Response Is Not OK');
            }
            return response.json();
        })
        .then(data => {
            const related_address = data.message;
            const actual_address = data.address;
            console.log("actualAddress : ", actual_address);
            console.log('response_data : ', related_address);
            this.setState({ relatedShops: related_address });

            const shopsWithImageError = data.shops.map(shop => ({
                ...shop,
                imageError: false // Initialize imageError for each shop
            }));
            this.setState({ relatedShops: shopsWithImageError });
        })
        .catch(error => {
            console.error('Error :', error);
        });
    }

    showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    }

    setupFAQ() {
        document.querySelectorAll('.faq-item').forEach(item => {
            item.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');

                document.querySelectorAll('.faq-item').forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('open');
                        otherItem.querySelector('.faq-answer').style.display = 'none';
                        otherItem.querySelector('.toggle-symbol').textContent = '+';
                    }
                });

                item.classList.toggle('open', !isOpen);

                const answer = item.querySelector('.faq-answer');
                const symbol = item.querySelector('.toggle-symbol');
                if (isOpen) {
                    answer.style.display = 'none';
                    symbol.textContent = '+';
                } else {
                    answer.style.display = 'block';
                    symbol.textContent = '-';
                }
            });
        });
    }

    setupHamburgerMenu() {
        document.querySelector('.hamburger-menu').addEventListener('click', function() {
            document.querySelector('nav ul').classList.toggle('show');
        });
    }

    fetchSuggestions = (query) => {
        console.log('inside fetch function : ', query);
        if (query.length > 1) {
            fetch(`http://127.0.0.1:8000/api/search-suggestions/${query}`)
                .then(response => response.json())
                .then(data => {
                    console.log('Data :',data.message)
                    document.getElementById('suggest-contain').style.display ='block';
                    this.setState({ suggestions: data.message });
                })
                .catch(error => {
                    console.error('Error fetching suggestions:', error);
                });
        } else {
            this.setState({ suggestions: [] });
        }
    };

    handleChange = (event) => {
        const query = event.target.value;
        console.log(query)
        this.setState({ search_field: query });
        this.fetchSuggestions(query); // Call the API with the query
    };

    handleImageError = (index) => {
        console.log("Image failed to load for shop index:", index);

        const updatedShops = [...this.state.relatedShops];

        if (updatedShops[index]) {
            updatedShops[index].imageError = true;
            console.log("Updated Shops : ",updatedShops)
            this.setState({ relatedShops: updatedShops });
        } else {
            console.error(`Shop at index ${index} does not exist.`);
        }
    };

    render(){
        const { location, relatedShops, suggestions} = this.state;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
        <div>
            <Header />
            <section className="hero">
                <div className="container">
                    <div className="d-lg-flex d-sm-block justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" w-50>
                            <div className="search-box">
                            <h1>Discover The <span className="text-primary">Best Local <br/>Businesses</span> And Share <br />Your Experiences.</h1>
                        </div>
                        <br />
                        <div className="fsd d-flex jusitfy-content-between justify-content-between">
                            <div className="input-container">
                                <input type="text" name="search_field" onChange={this.handleChange} placeholder="Search The Shops" />

                                <div className="image-container image-container-small d-flex">
                                    <img src={search} alt="Business Image" className="img-fluid" />
                                </div>
                            </div>
                            <Button variant="" className="manage-button" href="/#/create-business">Manage Business</Button>
                        </div>
                        <div id="suggest-contain" className="suggestion-container">
                            <ul className="suggest">
                                {suggestions.map((suggest , index)=>(
                                    <a href={`${BASE_URL}/#/business-info/${suggest.id}`} className='text-decoration-none'>
                                        <li className="suggestion-list" key={index}>{suggest.business_name}</li>
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="image-container image-container-large col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <img src={Group_1260} alt="Business Image" className="img-fluid" />
                    </div>
                    </div>
                </div>
            </section>

            <section className="nearbyshops mt-3">
                <div className="container">
                    <p className='h4 fw-bold text-primary my-3'>Top Picks For You</p>
                        <Slider {...settings} className="border shadow p-3">
                        {relatedShops.map((shop, index) => (
                            <a href={`${BASE_URL}/#/business-info/${shop.id}`} className='text-decoration-none'>
                                <div className="shop-card p-3" key={index}>
                                    {shop.business_profile ? (
                                        <div className="business-fixed-container">
                                            <div className="image-container rounded h-100">

                                                {!shop.imageError ? (
                                                    <img
                                                    src={`${BASE_URL}/Business_images/${shop.business_profile}`} class="img-fluid-contain"
                                                    onError={ ()=>this.handleImageError(index)} // Handle error when image fails to load
                                                    alt="Image description"
                                                    />
                                                ):(
                                                    <div className="business-fixed-container bg-secondary py-5">
                                                        <div className="image-container image-container-small mx-auto d-flex justify-content-center pt-3">
                                                            <img src={camera_white} alt="shop1" className="img-fluid" />
                                                        </div>
                                                        <p className="text-center text-white">Business Image Unavailable</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        ): (
                                        <div className="business-fixed-container bg-secondary border border-info py-5">
                                            <div className="image-container image-container-small mx-auto d-flex justify-content-center pt-3">
                                                <img src={camera_white} alt="shop1" className="img-fluid" />
                                            </div>
                                            <p className="text-center text-white">Business Image not Unavailable</p>
                                        </div>
                                    )}
                                    <Box className="shoplist-details mx-auto" xs={12} sm={4} sx={{ display: 'flex', alignItems: 'flex-start', margin:'5% auto'}}>
                                        <Box className="image-container image-container-small">
                                            <img src={shop1_logo} alt="shop_logo" className="img-fluid" />
                                        </Box>
                                        <Box xs={12} sm={4} className="shoplist-rightcontentbox m-0 text-left">
                                            <p className="overflow-hidden m-0 shoplist-shop-heading heading-color medium-font-width">
                                                {shop.business_name ? shop.business_name : 'Business Name Not Available'}
                                            </p>
                                            <Stack spacing={1}>
                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly
                                                sx={{ color: '#83C7EC' }} />
                                            </Stack>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                            <div className="image-container image-container-xsmall">
                                                <img src={location_icon} alt="location_icon" className="m-0 img-fluid"/>
                                            </div>
                                            <Typography variant="body2" className="overflow-hidden shoplist-shop-location content-color">
                                                {shop.address ? shop.address : 'Address is not available'}
                                            </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </div>
                            </a>
                        ))}
                        </Slider>
                </div>
            </section>

            <section className="top-rated">
                <div className="container ">
                    <div className="row custom-flex-wrapper">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 content-left">
                            <h2 className="lites">Find Top-Rated Businesses <br/>
                            In Your Area Or Add Your Own.</h2>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 content-right">
                            <div className="image-container image-container-large justify-content-center">
                                <img src={top_rated} className="img-fluid" alt="Top Rated Businesses" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="community">
                <div className="container">
                    <h2 className="jhs">Join Our Community</h2>
                    <div className="community-icons d-lg-flex d-md-flex">
                        <div className="icon">
                            <img src= {listings} alt="Listings" className="img-fluid" />
                            <p className="community-sub-heading">Listings</p>
                            <p className="community-content">Explore A Wide Range Of Businesses In Your Area.</p>
                        </div>
                        <div className="icon">
                            <img src={review} alt="Reviews" />
                            <p className="community-sub-heading">Reviews</p>
                            <p className="community-content">Trustworthy Reviews From Real Customers.</p>
                        </div>
                        <div className="icon">
                            <img src={free} alt="Free" />
                            <p className="community-sub-heading">Free</p>
                            <p className="community-content">No Hidden Fees For Users Or Business Owners.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="offers-reviews">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-12 image-container">
                            <img src={offer_image} alt="Offers and Reviews" className="img-fluid" />
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12 mns">
                            <p className='now'>Now Its Easy to</p>
                            <h2>Get Offers And Reviews About The Stores</h2>
                            <p>Discover Exclusive Deals And Read Authentic Reviews <br /> About Your Favorite Stores, Helping You Shop Smarter <br /> And Save More.</p>
                            <button className="theme-blue text-white border-0 rounded p-2 col-md-6">Know More</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="steps">
                <div className="container">
                    <h2 className="steps-heading">Simple Steps To Manage Your Business<br/> Accounts</h2>
                    <div className="lite">
                        <div className="step">
                            <div className="row">
                                <div className="col-md-6 position-relative">

                                <div className="step d-flex align-items-start">
                                    <div className="step-number">
                                    <div className="circl">
                                        <img src={one} className="img-fluid" alt="Step 3" />
                                    </div>
                                    </div>
                                    <div className="step-content">
                                    <h4>Create Account With Us</h4>
                                    <p>Discover Exclusive Deals And Read Authentic <br /> Reviews About Your Favorite Stores, Helping You..</p>
                                    </div>
                                </div>


                                <div className="step d-flex align-items-start">
                                    <div className="step-number">
                                    <div className="circl"> <img src={two} className="img-fluid" alt="Step 3" /></div>
                                    </div>
                                    <div className="step-content">
                                    <h4>Add Business Details</h4>
                                    <p>Discover Exclusive Deals And Read Reviews About Your Favorite Stores, Helping You Shop Smarter.</p>
                                    </div>
                                </div>


                                <div className="step d-flex align-items-start">
                                    <div className="step-number">
                                    <div className="circl">
                                        <img src={three} className="img-fluid" alt="Step 3" />
                                    </div>
                                    </div>
                                    <div className="step-content">
                                    <h4>Maintain Your Profile</h4>
                                    <p>Discover Exclusive Deals And Read Authentic Reviews About Your Favorite Stores.</p>
                                    </div>
                                </div>
                                </div>

                                <div className="col-md-6">
                                    <img src= {Group_1274} className="img-fluid" alt="Step 3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="shop-details">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-container image-container-large" >
                            <img src={Frame} alt="Shop Details" className="img-fluid4" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 shop-right text-md-left">
                            <h2>Get The Exact And Updated <br/> Details Of The Shop.</h2>
                            <div className="justify-content-center flex-wrap gap-5 d-lg-flex d-md-flex">
                                <div className="d-block">
                                    <div className="image-container justify-content-center">
                                        <img src={range} alt="Shop Details" />
                                    </div>
                                    <p className="text-white">Cover More Range</p>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <div className="image-container mb-2">
                                        <img src={location_pic} alt="Location Updates" />
                                    </div>
                                    <p className="text-white">Location Updates</p>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <div className="image-container mb-2">
                                        <img src={explore} alt="Explore Shop By Yourself" />
                                    </div>
                                    <p className="text-white">Explore Shop By Yourself</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="offers-reviews">
                <div className="container">
                    <div className="row justify-content-evenly">
                        <div className="col-lg-6 col-md-6 col-sm-12 image-container image-container-large">
                            <img src={Group_1280} alt="Offers and Reviews" className="img-fluid" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mns">
                            <h2 className="mns-offer-heading">Manage Your All Business In <br /> One Platformer</h2>
                            <p>Easily Manage All Your Businesses From A Single Platform. <br /> Simplify Operations, Track Performance, And Boost <br /> Efficiency With Seamless Tools Designed To Support Your <br /> Growth And Success.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq">
                <div className="container faq-container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-item">
                        <h3>How to create the business account ?
                            <span className="toggle-symbol">+</span>
                        </h3>
                        <p className="faq-answer">Why our clients Love Us. A good reputation is more valuable than money. Taken together, they get another reason to love your clients. The client who does not value his own client gives up this opportunity, recreates, and strives to do great work. Do great work gives clients more trust and makes the client happy.</p>
                    </div>
                    <div className="faq-item">
                        <h3>How to add the location in my business ?
                            <span className="toggle-symbol">+</span>
                        </h3>
                        <p className="faq-answer">Why our clients Love Us. A good reputation is more valuable than money. Taken together, they get another reason to love your clients. The client who does not value his own client gives up this opportunity, recreates, and strives to do great work. Do great work gives clients more trust and makes the client happy.</p>
                    </div>
                    <div className="faq-item">
                        <h3>How the review helps the user get the right description ?
                            <span className="toggle-symbol">+</span>
                        </h3>
                        <p className="faq-answer">Why our clients Love Us. A good reputation is more valuable than money. Taken together, they get another reason to love your clients. The client who does not value his own client gives up this opportunity, recreates, and strives to do great work. Do great work gives clients more trust and makes the client happy.</p>
                    </div>
                </div>
            </section>
            <Footer />
             </div>



            )


    }
}

// Custom next arrow for slider
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "#0d6efd", // Set your color here
                borderRadius: "50%", // Make it circular
                width: "30px",       // Customize size
                height: "30px",
                zIndex: 1,           // Ensure it is above other elements
                right: "-10px",      // Position it relative to the right
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'blue',      // Arrow color
                fontSize: '30px',    // Adjust the size of the arrow
                cursor: 'pointer',
                boxshadow :'0px 2px 5px rgba(0,0,0,0.1)',   // Make it clickable
                top :'55%',
            }}
            onClick={onClick}
        >
            {/* &#10095; HTML code for right arrow (>) */}
        </div>
    );
}

// Custom previous arrow for slider
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "#0d6efd",   // Set your color here
                borderRadius: "50%", // Make it circular
                width: "30px",       // Customize size
                height: "30px",
                zIndex: 1,           // Ensure it is above other elements
                left: "-10px",       // Position it relative to the left
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'blue',      // Arrow color
                fontSize: '30px',    // Adjust the size of the arrow
                cursor: 'pointer',
                boxshadow :'0px 2px 5px rgba(0,0,0,0.1)',   // Make it clickable
                top :'55%',  // Make it clickable
            }}
            onClick={onClick}
        >
            {/* &#10094; HTML code for left arrow (<) */}
        </div>
    );
}

export default Home;


