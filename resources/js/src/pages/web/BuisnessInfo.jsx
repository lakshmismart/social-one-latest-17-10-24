import * as React from 'react';
import { Component, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import RatingModal from '../layouts/RatingModal';

// import Grid from '@material-ui/core/Grid';
import { Grid, Paper, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';
// import { Stack, Rating, LinearProgress, Grid } from '@mui/material';

import shop1 from '../../images/shops/shop-img-1.png';
import shop2 from '../../images/shops/shop-img-2.png';
import shop3 from '../../images/shops/shop-img-3.png';

import shop1_logo from '../../images/shops/shop1-logo.png';
import heart_outline from '../../images/shops/heart_outline.png';
import share_outline from '../../images/shops/share_outline.png';
import rate_now from '../../images/shops/rate-now.png';
import contact from '../../images/shops/contact.png';
import time from '../../images/shops/time.png';
import Horizontal_line from '../../images/shops/horizontal_line.png';

import shop_banner_1 from '../../images/banners/shop_banner_1.png';
import shop_product_1 from '../../images/banners/shop_product_photo.png';

import camera_white from '../../images/camera-white.png';
import location_icon from '../../images/location_icon.png';
import white_location_icon from '../../images/white_location_icon.png';
import shop_large from '../../images/shop1-large.png';
import ad1 from '../../images/ad1.png';
import { BASE_URL } from "../../App";


import '../../css/main.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const BusinessInfo = () => {
    const [posts, setPosts] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const loadPosts = () => {
        console.log('id:', id)
        const token = sessionStorage.getItem("authToken");
        console.log("inside business :", token)

        axios.get(`${BASE_URL}/api/businesses/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}` // Assuming you store the token in 'token' variable
            }
        })
            .then(response => {
                const responseData = response.data;
                const posts = responseData.data;
                setPosts(posts);
                console.log("Posts : ", posts);
            })
            .catch(error => {
                console.error("There was an error fetching the posts!", error);
            });
    };

    useEffect(() => {
        loadPosts();
    }, [id])

    const post = posts[0];

    const [imageError, setImageError] = useState(false);

    // This handler triggers if the image fails to load
    const handleImageError = () => {
        console.log("Image failed to load.");
        setImageError(true); // Set error state to show alternative content
    };
    // Check if the image URL is correct
    const imageUrl = `${BASE_URL}/Business_images/${posts.business_profile}`;
    console.log("Image URL: ", imageUrl);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const token = sessionStorage.getItem("authToken");
        if (!token) {
            navigate("/login"); // Redirect to login if token is missing
        }
    }, [navigate]);

    return (
        <div>
            <Header />
            <div className="container">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        {/* Section start */}
                        <div className="start-section-margin">
                            <Box className="px-3">
                                {posts.business_profile ? (
                                    <div className="business-fixed-container business-fixed-height overflow-hidden">
                                        <div className="image-container">
                                            {!imageError ? (
                                                <img
                                                    src={`${BASE_URL}/Business_images/${posts.business_profile}`}
                                                    alt="Business"
                                                    className="img-fluid-contain rounded"
                                                    onError={handleImageError}
                                                />
                                            ) : (
                                                <div className="business-fixed-container business-fixed-height bg-secondary border border-info py-5">
                                                    <div className="image-container image-container-small mx-auto d-flex justify-content-center pt-3">
                                                        <img src={camera_white} alt="shop1" className="img-fluid" />
                                                    </div>
                                                    <p className="text-center text-white">Business Image Unavailable</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="business-fixed-container business-fixed-height bg-secondary border border-info py-5">
                                        <div className="image-container image-container-small mx-auto d-flex justify-content-center pt-3">
                                            <img src={camera_white} alt="shop1" className="img-fluid" />
                                        </div>
                                        <p className="text-center text-white">Business Image Unavailable</p>
                                    </div>
                                )}

                                <Box className="" sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'left', margin: '5% auto' }}>
                                    <Box className="image-container image-container-small">
                                        <img src={shop1_logo} alt="shop_logo" className="mt-2 img-fluid" />
                                    </Box>
                                    <Box className="m-0 text-left shop-info-content">
                                        <div className="justify-cus-between">
                                            <Typography variant="h6" className="large-font-width text-wrap text-start mx-2 shoplist-shop-heading heading-color">
                                                {posts ? posts.business_name : 'Loading...'}
                                            </Typography>

                                            <Stack direction="row" className="align-items-center gap-2">
                                                <div className="image-container image-container-xsmall">
                                                    <img src={heart_outline} className='img-fluid img-responsive' />
                                                </div>
                                                <button type="button" className="d-flex btn bg-secondary text-white">Share
                                                    <div className="image-container image-container-xsmall">
                                                        <img src={share_outline} className="mx-1 img-fluid" />
                                                    </div>
                                                </button>
                                            </Stack>
                                        </div>
                                        <Stack className="mx-1" spacing={1}>
                                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly
                                                sx={{ color: '#83C7EC' }} />
                                        </Stack>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                            <div className="image-container image-container-xsmall">
                                                <img src={location_icon} alt="location_icon" className="m-0 img-fluid" />
                                            </div>
                                            <Typography variant="body2" className="text-wrap shoplist-shop-location medium-font-width content-color">
                                                {posts ? posts.address : 'Your Address...'}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                        {/* Section End */}

                        <div>
                            <Stack direction="row" xs={12} md={12} >
                                <div className="Business-rate-section d-flex align-items-center bg-primary p-2 mx-1" onClick={openModal} >
                                    <div className="image-container image-container-small">
                                        <img src={rate_now} alt="rating-img" className="img-fluid" />
                                    </div>
                                    <button variant="h6" className="btn small-font-width text-white">
                                        Rate Now
                                    </button>

                                </div>

                                <RatingModal isOpen={isModalOpen} onClose={closeModal} businessId={id} />
                                {/* Render business posts or other details here */}

                                <Box direction="row" sx={{ bgcolor: '#D1EFFF' }} className="Business-rate-section d-flex align-items-center mx-1 px-2" >
                                    <div className="image-container image-container-xsmall">
                                        <img src={contact} alt="rating-img" className="img-fluid" />
                                    </div>
                                    <Typography variant="h6" className="small-font-width content-color content-grey">
                                        {posts ? posts.contact_phone : 'contact_phone'}
                                    </Typography>
                                </Box>
                                <Box direction="row" sx={{ bgcolor: '#D1EFFF' }} className="Business-rate-section d-flex align-items-center mx-1 px-2" >
                                    <div className="image-container image-container-xsmall">
                                        <img src={time} alt="rating-img" className="img-fluid" />
                                    </div>
                                    <Typography variant="h6" className="small-font-width content-color content-grey">
                                        9am -10pm
                                    </Typography>
                                </Box>
                            </Stack>
                        </div>

                        <div>
                            <Stack direction="column" className="my-3">
                                <Stack direction="row" sx={{ my: '3' }}>
                                    <Typography variant="h6">On Going Offers</Typography>
                                    <div className="image-container image-container-large">
                                        <img src={Horizontal_line} alt="horizontalline" className='img-fluid' />
                                    </div>
                                </Stack>
                                <Stack direction="row">
                                    <div className="image-container image-container-medium">
                                        <img src={shop_banner_1} alt="horizontalline" className='img-fluid' />
                                    </div>
                                    <div className="image-container image-container-medium">
                                        <img src={shop_banner_1} alt="horizontalline" className='img-fluid' />
                                    </div>
                                </Stack>

                                <p className="text-end content-grey px-4">View All</p>

                            </Stack>
                        </div>

                        <div>
                            <Stack direction="column" className="my-3">
                                <Stack direction="row">
                                    <Typography variant="h6">Photos </Typography>
                                    <div className="image-container image-container-large">
                                        <img src={Horizontal_line} alt="horizontalline" className='img-fluid' />
                                    </div>
                                </Stack>
                                <Grid container spacing={2} className="mx-auto">
                                    <Grid item xs={6} md={4} className="px-2">
                                        <div className='image-container image-container-medium mx-auto'>
                                            <img src={shop_product_1} alt="horizontalline" className='img-fluid' />
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={4} className="px-2">
                                        <div className='image-container image-container-medium mx-auto'>
                                            <img src={shop_product_1} alt="horizontalline" className='img-fluid' />
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={4} className="px-2">
                                        <div className='image-container image-container-medium mx-auto'>
                                            <img src={shop_product_1} alt="horizontalline" className='img-fluid' />
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={4} className="px-2">
                                        <div className='image-container image-container-medium mx-auto'>
                                            <img src={shop_product_1} alt="horizontalline" className='img-fluid' />
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={4} className="px-2">
                                        <div className='image-container image-container-medium mx-auto'>
                                            <img src={shop_product_1} alt="horizontalline" className='img-fluid' />
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} md={4} className="px-2">
                                        <div className='image-container image-container-medium mx-auto'>
                                            <img src={shop_product_1} alt="horizontalline" className='img-fluid' />
                                        </div>
                                    </Grid>
                                </Grid>


                                <p className="text-end content-grey mt-2 px-4">View All</p>

                            </Stack>
                        </div>

                        {/* address section */}
                        <div>
                            <Stack direction="column" className="my-3">
                                <Stack direction="row" sx={{ my: '3' }}>
                                    <Typography variant="h6" className="">Details </Typography>
                                    <div className="image-container image-container-large">
                                        <img src={Horizontal_line} alt="horizontalline" className='img-fluid' />
                                    </div>
                                </Stack>
                                <Grid container spacing={2} sx={{ p: 2 }}>
                                    <Grid item xs={12} sm={12} md={7} className="">
                                        <div className="address-card p-3 ">
                                            <h6 className="text-white text-heading-content large-font-width text-start my-2">Address </h6>
                                            <Typography className="text-heading-content text-wrap overflow-hidden text-white text-start my-2" sx={{ 'height': '55%' }}>{posts ? posts.address : 'Your Address...'}</Typography>
                                            <Stack direction="row">
                                                <div className="image-container image-container-xsmall me-1 my-1">
                                                    <img src={white_location_icon} alt="horizontalline" className='img-fluid' />
                                                </div>
                                                <Typography variant="h6" className="text-white"> Get The Location</Typography>
                                            </Stack>
                                        </div>

                                    </Grid>
                                    <Grid item xs={12} sm={12} md={5} className="">
                                        <div className="address-card p-3">
                                            <h6 className="text-white text-heading-content large-font-width text-start my-2">Social Media </h6>
                                        </div>
                                    </Grid>
                                </Grid>

                            </Stack>
                        </div>

                        {/* Review section */}
                        <div className="reviews">
                            <Stack direction="row" >
                                <Typography variant="h6" className="">Reviews</Typography>
                                <div className="image-container image-container-large" >
                                    <img src={Horizontal_line} alt="horizontalline" className='img-fluid' />
                                </div>
                            </Stack>
                            <div className="d-lg-flex d-sm-block mp-3">
                                <div className="d-lg-flex align-items-center mt-4 mx-0 px-2 d-sm-block" >
                                    <Stack className="mx-1" spacing={1} >
                                        <div className="d-flex justify-content-end gap-2 align-items-center">
                                            <div className="d-flex justify-content-end align-items-center" >
                                                <span class="fa fa-star checked fz-5"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>

                                            </div>
                                            <div>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={100}
                                                    sx={{
                                                        height: '17px',
                                                        borderRadius: '21px',
                                                        width: '210px',
                                                        bgcolor: '#E0E0E0',
                                                        '& .MuiLinearProgress-bar': { bgcolor: '#364FB2' },
                                                    }}
                                                />
                                            </div>
                                            <h4>07</h4>
                                        </div>
                                        <div className="d-flex justify-content-end gap-2 align-items-center">
                                            <div className="d-flex justify-content-end align-items-center" >
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>

                                            </div>
                                            <div>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={80}
                                                    sx={{
                                                        height: '17px',
                                                        borderRadius: '21px',
                                                        width: '210px',
                                                        bgcolor: '#E0E0E0',
                                                        '& .MuiLinearProgress-bar': { bgcolor: '#364FB2' },
                                                    }}
                                                />
                                            </div>
                                            <h4>02</h4>
                                        </div>
                                        <div className="d-flex justify-content-end gap-2 align-items-center">
                                            <div className="d-flex justify-content-end align-items-center" >
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>


                                            </div>
                                            <div>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={60}
                                                    sx={{
                                                        height: '17px',
                                                        borderRadius: '21px',
                                                        width: '210px',
                                                        bgcolor: '#E0E0E0',
                                                        '& .MuiLinearProgress-bar': { bgcolor: '#364FB2' },
                                                    }}
                                                />
                                            </div>
                                            <h4>01</h4>
                                        </div>
                                        <div className="d-flex justify-content-end gap-2 align-items-center">
                                            <div className="d-flex justify-content-end align-items-center" >

                                                <span class="fa fa-star checked"></span>
                                                <span class="fa fa-star checked"></span>


                                            </div>
                                            <div>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={40}
                                                    sx={{
                                                        height: '17px',
                                                        borderRadius: '21px',
                                                        width: '210px',
                                                        bgcolor: '#E0E0E0',
                                                        '& .MuiLinearProgress-bar': { bgcolor: '#364FB2' },
                                                    }}
                                                />
                                            </div>
                                            <h4>01</h4>
                                        </div>
                                        <div className="d-flex justify-content-end gap-2 align-items-center">
                                            <div className="d-flex justify-content-end align-items-center" >
                                                <span class="fa fa-star checked"></span>
                                            </div>
                                            <div>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={20}
                                                    sx={{
                                                        height: '17px',
                                                        borderRadius: '21px',
                                                        width: '210px',
                                                        bgcolor: '#E0E0E0',
                                                        '& .MuiLinearProgress-bar': { bgcolor: '#364FB2' },
                                                    }}
                                                />
                                            </div>
                                            <h4>01</h4>
                                        </div>
                                    </Stack>
                                </div>
                                <div class="d-lg-flex gap-3 align-items-center mt-5 mx-3 px-5 d-sm-block">
                                    <div class="d-flex gap-3 align-items-center">
                                        <h4 class="text-primary percent">4.8</h4>
                                        <div class="percent1"> 
                                            <h4>12 Ratings</h4>
                                            <h4>42 Reviews</h4>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* 
                                            <Grid container alignItems="center" spacing={2}>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked" ></span>
                                                <Grid item xs>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={100}
                                                    sx={{
                                                    height: '17px',
                                                    borderRadius: '21px',
                                                    width: '250px',
                                                    bgcolor: '#E0E0E0',
                                                    '& .MuiLinearProgress-bar': { bgcolor: '#364FB2' },
                                                    }}
                                                />
                                                </Grid>
                                                <Grid item>
                                                <Typography variant="body2" color="text.secondary" sx={{ font:'Montserrat', fontSize:'21.74px', height:'26.5px', fontWeight:'400'}}>
                                                    12
                                                </Typography>
                                                </Grid>
                                            </Grid>

                                            <Grid container alignItems="center" spacing={2}>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked" ></span>
                                                
                                                <Grid item xs>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={80}
                                                    sx={{
                                                    height: '17px',
                                                    borderRadius: '21px',
                                                    width: '250px',
                                                    bgcolor: '#E0E0E0',
                                                    '& .MuiLinearProgress-bar': { bgcolor: '#364FB2' },
                                                    }}
                                                />
                                                </Grid>
                                                <Grid item>
                                                <Typography variant="body2" color="text.secondary" sx={{ font:'Montserrat', fontSize:'21.74px', height:'26.5px', fontWeight:'400'}}>
                                                    8 
                                                </Typography>
                                                </Grid>
                                            </Grid>

                                            <Grid container alignItems="center" spacing={2}>
                                             
                                                <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked" ></span>
                                                
                                                <Grid item xs>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={60}
                                                    sx={{
                                                    height: '17px',
                                                    borderRadius: '21px',
                                                    width: '250px',
                                                    bgcolor: '#E0E0E0',
                                                    '& .MuiLinearProgress-bar': { bgcolor: '#364FB2' },
                                                    }}
                                                />
                                                </Grid>
                                                <Grid item>
                                                <Typography variant="body2" color="text.secondary" sx={{ font:'Montserrat', fontSize:'21.74px', height:'26.5px', fontWeight:'400'}}>
                                                    5
                                                </Typography>
                                                </Grid>
                                            </Grid>

                                            <Grid container alignItems="center" spacing={2}>
                                                
                                                <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked" ></span>
                                                
                                                <Grid item xs>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={40}
                                                    sx={{
                                                    height: '17px',
                                                    borderRadius: '21px',
                                                    width: '250px',
                                                    bgcolor: '#E0E0E0',
                                                    '& .MuiLinearProgress-bar': { bgcolor: '#364FB2' },
                                                    }}
                                                />
                                                </Grid>
                                                <Grid item>
                                                <Typography variant="body2" color="text.secondary" sx={{ font:'Montserrat', fontSize:'21.74px', height:'26.5px', fontWeight:'400'}}>
                                                    3 
                                                </Typography>
                                                </Grid>
                                            </Grid>

                                            <Grid container alignItems="center" spacing={2}>
                                                
                                                <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked" ></span>
                                                
                                                <Grid item xs>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={20}
                                                    sx={{
                                                    height: '17px',
                                                    borderRadius: '21px',
                                                    width: '250px',
                                                    bgcolor: '#E0E0E0',
                                                    '& .MuiLinearProgress-bar': { bgcolor: '#364FB2' },
                                                    }}
                                                />
                                                </Grid>
                                                <Grid item>
                                                <Typography variant="body2" color="text.secondary" sx={{ font:'Montserrat', fontSize:'21.74px', height:'26.5px', fontWeight:'400'}}>
                                                    1
                                                </Typography>
                                                </Grid>
                                            </Grid> */}



                        {/* customer Review section */}
                        <div className='customer-review-section'>
                            <Stack direction="column" className="my-3">
                                <Stack direction="row" >
                                    <Typography variant="h6" className="">Customer Reviews </Typography>
                                    <div className="image-container image-container-large">
                                        <img src={Horizontal_line} alt="horizontalline" className='img-fluid' />
                                    </div>
                                </Stack>
                                {posts && posts.reviews && posts.reviews.length > 0 ? (
                                    posts.reviews.map((review, index) => (
                                        <Box className="mt-4" xs={12} sm={4} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                            <Box className="image-container image-container-xsmall">
                                                <img src={shop1_logo} alt="shop_logo" className="img-fluid" />
                                            </Box>
                                            <Box xs={12} sm={4} className="mx-1 text-left">
                                                <Typography variant="h6" className="overflow-hidden m-0 shoplist-shop-heading heading-color">
                                                    {review.users.business_owner_name ? review.users.business_owner_name : 'Name not available.'}
                                                </Typography>
                                                <Stack spacing={1}>
                                                    <Rating name="half-rating-read" defaultValue={review.rating} precision={0.5} readOnly
                                                        sx={{ color: '#83C7EC' }} />
                                                </Stack>

                                                <Typography key={index} variant="body2" className="text-wrap pe-4 overflow-hidden shoplist-shop-location content-color">
                                                    {review.review_text}.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))
                                )
                                    : (
                                        <Typography variant="body2">No reviews available.</Typography>
                                    )}
                                <p className="text-end content-grey mt-2 px-4">View All</p>
                            </Stack>
                        </div>


                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="start-section-margin related-section">
                            <div className='related-search-container' >
                                <p className='content-color p-4'>Related Searches</p>
                                <Grid container spacing={2} className="justify-content-evenly">
                                    <Grid item xs={12} sm={12} className="shop-grid-item">
                                        <Box className="mx-auto">
                                            <Box className="image-container image-container-medium mx-auto">
                                                <img src={shop1} alt="shop1" className="img-fluid" />
                                            </Box>
                                            <Box className="shoplist-details mx-auto" xs={12} sm={4} sx={{ display: 'flex', alignItems: 'flex-start', margin: '5% auto' }}>
                                                <Box className="image-container image-container-xsmall">
                                                    <img src={shop1_logo} alt="shop_logo" className="img-fluid" />
                                                </Box>
                                                <Box xs={12} sm={4} className="shoplist-rightcontentbox m-0 text-left">
                                                    <Typography variant="h6" className="overflow-hidden m-0 shoplist-shop-heading heading-color">
                                                        Bhuvanesh Vegetable Shops
                                                    </Typography>
                                                    <Stack spacing={1}>
                                                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly
                                                            sx={{ color: '#83C7EC' }} />
                                                    </Stack>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                                        <div className="image-container image-container-xsmall">
                                                            <img src={location_icon} alt="location_icon" className="m-0 img-fluid" />
                                                        </div>
                                                        <Typography variant="body2" className="overflow-hidden shoplist-shop-location content-color">
                                                            Anna Salai, Angalaaman Kovil, Chennai.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12} className="shop-grid-item">
                                        <Box className="mx-auto">
                                            <Box className="image-container image-container-medium">
                                                <img src={shop2} alt="shop1" className="mx-auto img-fluid" />
                                            </Box>
                                            <Box className="shoplist-details mx-auto" xs={12} sm={4} sx={{ display: 'flex', alignItems: 'flex-start', margin: '5% auto' }}>
                                                <Box className="image-container image-container-xsmall">
                                                    <img src={shop1_logo} alt="shop_logo" className="img-fluid" />
                                                </Box>
                                                <Box xs={12} sm={4} className="shoplist-rightcontentbox m-0 text-left">
                                                    <Typography variant="h6" className="overflow-hidden m-0 shoplist-shop-heading heading-color">
                                                        Sandosh Vegetable Shops
                                                    </Typography>
                                                    <Stack spacing={1}>
                                                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly
                                                            sx={{ color: '#83C7EC' }} />
                                                    </Stack>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                                        <div className="image-container image-container-xsmall">
                                                            <img src={location_icon} alt="location_icon" className="m-0 img-fluid" />
                                                        </div>
                                                        <Typography variant="body2" className="overflow-hidden shoplist-shop-location content-color">
                                                            Anna Salai, Angalaaman Kovil, Chennai.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12} className="shop-grid-item">
                                        <Box className="mx-auto">
                                            <Box className="image-container image-container-medium ">
                                                <img src={shop3} alt="shop1" className="mx-auto img-fluid" />
                                            </Box>
                                            <Box className="shoplist-details mx-auto" xs={12} sm={4} sx={{ display: 'flex', alignItems: 'flex-start', margin: '5% auto' }}>
                                                <Box className="image-container image-container-xsmall">
                                                    <img src={shop1_logo} alt="shop_logo" className="img-fluid" />
                                                </Box>
                                                <Box xs={12} sm={4} className="shoplist-rightcontentbox m-0 text-left">
                                                    <Typography variant="h6" className="overflow-hidden m-0 shoplist-shop-heading heading-color">
                                                        Grace Super Market
                                                    </Typography>
                                                    <Stack spacing={1}>
                                                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly
                                                            sx={{ color: '#83C7EC' }} />
                                                    </Stack>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                                        <div className="image-container image-container-xsmall">
                                                            <img src={location_icon} alt="location_icon" className="m-0 img-fluid" />
                                                        </div>
                                                        <Typography variant="body2" className="overflow-hidden shoplist-shop-location content-color">
                                                            Anna Salai, Angalaaman Kovil, Chennai.
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>

                        <div>
                            <Box className="related-search-tags mt-4">
                                <Typography variant="h6" className="search-tags">Departmental Store</Typography>
                                <Typography variant="h6" className="search-tags">Hotels near me</Typography>
                                <Typography variant="h6" className="search-tags">Departmental Store</Typography>
                            </Box>
                        </div>

                        <div className="ade_section">
                            <div className='image-container image-container-medium mx-auto' >
                                <img src={ad1} alt="banner-image" className='img-fluid' />
                            </div>

                        </div>
                    </Grid>
                </Grid>
                {/*Branches */}
                <div className='branches'>
                    <Stack direction="column" className="my-3">
                        <Stack direction="row" >
                            <Typography variant="h6" className="">Branches </Typography>
                            <div className="image-container image-container-large">
                                <img src={Horizontal_line} alt="horizontalline" className='img-fluid' />
                            </div>
                        </Stack>

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Box className="mx-2">
                                    <Box className="image-container image-container-medium medium-shopimage-container">
                                        <img src={shop1} alt="shop1" className="img-fluid" />
                                    </Box>
                                    <Box className="shoplist-details mx-auto" xs={12} sm={4} sx={{ display: 'flex', alignItems: 'flex-start', margin: '5% auto' }}>
                                        <Box className="image-container image-container-small">
                                            <img src={shop1_logo} alt="shop_logo" className="img-fluid" />
                                        </Box>
                                        <Box xs={12} sm={4} className="shoplist-rightcontentbox m-0 text-left">
                                            <Typography variant="h6" className="overflow-hidden m-0 shoplist-shop-heading heading-color">
                                                Bhuvanesh Vegetable Shops
                                            </Typography>
                                            <Stack spacing={1}>
                                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly
                                                    sx={{ color: '#83C7EC' }} />
                                            </Stack>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                                <div className="image-container image-container-small">
                                                    <img src={location_icon} alt="location_icon" className="m-0 img-fluid"
                                                        style={{ width: '30px', height: '30px' }} />
                                                </div>
                                                <Typography variant="body2" className="overflow-hidden shoplist-shop-location content-color">
                                                    Anna Salai, Angalaaman Kovil, Chennai.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box className="mx-2">
                                    <Box className="image-container image-container-medium medium-shopimage-container ">
                                        <img src={shop1} alt="shop1" className="img-fluid" />
                                    </Box>
                                    <Box className="shoplist-details mx-auto" xs={12} sm={4} sx={{ display: 'flex', alignItems: 'flex-start', margin: '5% auto' }}>
                                        <Box className="image-container image-container-small">
                                            <img src={shop1_logo} alt="shop_logo" className="img-fluid" />
                                        </Box>
                                        <Box xs={12} sm={4} className="shoplist-rightcontentbox m-0 text-left">
                                            <Typography variant="h6" className="overflow-hidden m-0 shoplist-shop-heading heading-color">
                                                Bhuvanesh Vegetable Shops
                                            </Typography>
                                            <Stack spacing={1}>
                                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly
                                                    sx={{ color: '#83C7EC' }} />
                                            </Stack>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                                <div className="image-container image-container-small">
                                                    <img src={location_icon} alt="location_icon" className="m-0 img-fluid"
                                                        style={{ width: '30px', height: '30px' }} />
                                                </div>
                                                <Typography variant="body2" className="overflow-hidden shoplist-shop-location content-color">
                                                    Anna Salai, Angalaaman Kovil, Chennai.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box className="mx-2">
                                    <Box className="image-container image-container-medium medium-shopimage-container">
                                        <img src={shop1} alt="shop1" className="img-fluid" />
                                    </Box>
                                    <Box className="shoplist-details mx-auto" xs={12} sm={4} sx={{ display: 'flex', alignItems: 'flex-start', margin: '5% auto' }}>
                                        <Box className="image-container image-container-small">
                                            <img src={shop1_logo} alt="shop_logo" className="img-fluid" />
                                        </Box>
                                        <Box xs={12} sm={4} className="shoplist-rightcontentbox m-0 text-left">
                                            <Typography variant="h6" className="overflow-hidden m-0 shoplist-shop-heading heading-color">
                                                Bhuvanesh Vegetable Shops
                                            </Typography>
                                            <Stack spacing={1}>
                                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly
                                                    sx={{ color: '#83C7EC' }} />
                                            </Stack>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                                <div className="image-container image-container-xsmall">
                                                    <img src={location_icon} alt="location_icon" className="m-0 img-fluid" />
                                                </div>
                                                <Typography variant="body2" className="overflow-hidden shoplist-shop-location content-color">
                                                    Anna Salai, Angalaaman Kovil, Chennai.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        {/* </Stack> */}
                    </Stack>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BusinessInfo;
