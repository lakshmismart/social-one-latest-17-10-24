import * as React from 'react';
import  {Component ,useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

// import Grid from '@material-ui/core/Grid';
import {Grid, Paper, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';

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
import { useDropzone } from 'react-dropzone';

import '../../css/main.css';
import '../../css/create-business-profile.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

    const BusinessInfo = ()=>{
        const [posts, setPosts] = useState([]);
        const {id} = useParams();
        const navigate = useNavigate();

        const loadPosts = () => {
            console.log('id:',id)
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

        useEffect(()=>{
            loadPosts();
        },[id])

        const post = posts[0];
        console.log("posstos",posts.business_name)

        const [imageError, setImageError] = useState(false);

        // This handler triggers if the image fails to load
        const handleImageError = () => {
            console.log("Image failed to load.");
            setImageError(true); // Set error state to show alternative content
        };
        // Check if the image URL is correct
        const imageUrl = `${BASE_URL}/Business_images/${posts.business_profile}`;


        // const [selectedImage, setSelectedImage] = useState(null);
       // Dropzone configuration
        // const { getRootProps, getInputProps, isDragActive } = useDropzone({
        //     accept: 'image/*',
        //     onDrop: (acceptedFiles) => {
        //     const file = acceptedFiles[0];
        //     if (file) {
        //         const reader = new FileReader();
        //         reader.onload = () => {
        //         setSelectedImage(reader.result); // Display the image immediately after dropping
        //         var drag = document.getElementById('drag-content');
        //         drag.style.display = "none";
        //         };
        //         reader.readAsDataURL(file);
        //     }
        //     },
        // });
       
        const [selectedImage1, setSelectedImage1] = useState(null);
        const [selectedImage2, setSelectedImage2] = useState(null);
        const { getRootProps: getRootProps1, getInputProps: getInputProps1, isDragActive: isDragActive1 } = useDropzone({
            accept: 'image/*',
            onDrop: (acceptedFiles) => {
              const file = acceptedFiles[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  setSelectedImage1(reader.result);
                  const dragContent1 = document.getElementById('drag-content-1');
                  if (dragContent1) {
                    dragContent1.style.display = 'none';
                  }
                };
                reader.readAsDataURL(file);
              }
            },
          });
        
        const { getRootProps: getRootProps2, getInputProps: getInputProps2, isDragActive: isDragActive2 } = useDropzone({
            accept: 'image/*',
            onDrop: (acceptedFiles) => {
              const file = acceptedFiles[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  setSelectedImage2(reader.result);
                  const dragContent2 = document.getElementById('drag-content-2');
                  if (dragContent2) {
                    dragContent2.style.display = 'none';
                  }
                };
                reader.readAsDataURL(file);
              }
            },
          });


        return(
            <div>         
                <Header />
                <div className="custom-section">      
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={10}>
                            {/* Section start */}
                            <div className="start-section-margin">                                
                                <Box className="px-3"> 
                                    {posts.business_profile ? (
                                        <div className="business-fixed-container overflow-hidden">
                                            <div className="image-container">                                                
                                                {!imageError ? (
                                                    <img
                                                        src={`${BASE_URL}/Business_images/${posts.business_profile}`}
                                                        alt="Business"
                                                        className="img-fluid-contain rounded"
                                                        onError={handleImageError} 
                                                    />
                                                ) : (
                                                    <div className="business-fixed-container bg-secondary border border-info py-5">
                                                        <div className="image-container image-container-small mx-auto d-flex justify-content-center pt-3">
                                                            <img src={camera_white} alt="shop1" className="img-fluid" />
                                                        </div>
                                                        <p className="text-center text-white">Drag And Drop An Image For Profile, Or Browse</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="business-fixed-container bg-secondary border border-info py-5">
                                            <div className="image-container image-container-small mx-auto d-flex justify-content-center pt-3">
                                                <img src={camera_white} alt="shop1" className="img-fluid" />
                                            </div>
                                            <p className="text-center text-white">Drag And Drop An Image For Profile, Or Browse </p>
                                        </div>
                                    )}                                      

                                    <Box className="" sx={{ display: 'flex', alignItems: 'flex-start',justifyContent:'left',margin: '5% auto'}}>
                                        <Box className="image-container image-container-small">
                                            <img src={shop1_logo} alt="shop_logo" className="mt-2 img-fluid" />
                                        </Box>
                                        <Box className="m-0 text-left shop-info-content">                                            
                                            <div className="justify-cus-between">
                                                <Typography variant="h6"  className="large-font-width text-wrap text-start mx-2 shoplist-shop-heading heading-color">
                                                {posts ? posts.business_name : 'Loading...'}
                                                </Typography>                                               

                                                <Stack direction="row" className="align-items-center gap-2">
                                                    <div className="image-container image-container-xsmall">
                                                        <img src={heart_outline} className='img-fluid img-responsive'/>
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
{/* 
                            <div>                               
                                <Stack direction="row" xs={12} md={12} >
                                    <div className="Business-rate-section d-flex align-items-center bg-primary p-2 mx-1" >
                                        <div className="image-container image-container-small">
                                            <img src={rate_now} alt="rating-img" className="img-fluid"/>                                                        
                                        </div>
                                        <Typography variant="h6"  className="small-font-width text-white">
                                                Rate Now
                                        </Typography>
                                    </div>                                    
                                    <Box direction="row" sx={{ bgcolor: '#D1EFFF' }} className="Business-rate-section d-flex align-items-center mx-1 px-2" >
                                        <div className="image-container image-container-xsmall">
                                            <img src={contact} alt="rating-img" className="img-fluid"/>                                                        
                                        </div>
                                        <Typography variant="h6"  className="small-font-width content-color content-grey">
                                            {posts ? posts.contact_phone : 'contact_phone'}    
                                        </Typography>
                                    </Box>
                                    <Box direction="row" sx={{ bgcolor: '#D1EFFF' }} className="Business-rate-section d-flex align-items-center mx-1 px-2" >
                                        <div className="image-container image-container-xsmall">
                                            <img src={time} alt="rating-img" className="img-fluid"/>                                                        
                                        </div>
                                        <Typography variant="h6"  className="small-font-width content-color content-grey">
                                            9am -10pm
                                        </Typography>
                                    </Box>
                                </Stack>                                        
                            </div> */}

                            {/* <div>                              
                                <Stack direction="column" className="my-3">
                                    <Stack direction="row" sx={{my :'3'}}>
                                        <Typography variant="h6">On Going Offers</Typography>
                                        <div className="image-container image-container-large">
                                            <img src={Horizontal_line} alt="horizontalline" className='img-fluid'/>
                                        </div>
                                    </Stack>
                                    <Stack direction="row">
                                        <div className="image-container image-container-medium">
                                            <img src={shop_banner_1} alt="horizontalline" className='img-fluid'/>
                                        </div>
                                        <div className="image-container image-container-medium">
                                            <img src={shop_banner_1} alt="horizontalline" className='img-fluid'/>
                                        </div>
                                    </Stack>
                                    <p className="text-end content-grey px-4">View All</p>
                                </Stack>                                  
                            </div> */}
                            <div>
                                <Stack direction="column" className="my-3">
                                    <Stack direction="row">
                                        <Typography variant="h6">Add Business Photos </Typography>
                                        <div className="image-container image-container-large">
                                            <img src={Horizontal_line} alt="horizontalline" className='img-fluid'/>
                                        </div>
                                    </Stack>
                                    <Grid container spacing={2} className="mx-auto">
                                

                                        <Grid item xs={6} md={4} className="px-2">
        <div className="business-pictures-container bg-secondary py-3">
          <div
            {...getRootProps1()}
            style={{ border: '2px dashed #ccc', margin: '20px', color: 'white', padding: '10px', textAlign: 'center' }}
          >
            <input {...getInputProps1()} />
            {isDragActive1 ? (
              <p>Drop the image here...</p>
            ) : (
              <p id="drag-content-1">Drag & drop an image here, or click to select one</p>
            )}

            {/* Display the first selected image */}
            {selectedImage1 && (
              <div style={{ marginTop: '20px' }}>
                <img src={selectedImage1} className="img-fluid" alt="Selected 1" />
              </div>
            )}
          </div>
        </div>
      </Grid>

      {/* Second Drag and Drop Area */}
      <Grid item xs={6} md={4} className="px-2">
        <div className="business-pictures-container bg-secondary py-3">
          <div
            {...getRootProps2()}
            style={{ border: '2px dashed #ccc', margin: '20px', color: 'white', padding: '10px', textAlign: 'center' }}
          >
            <input {...getInputProps2()} />
            {isDragActive2 ? (
              <p>Drop the image here...</p>
            ) : (
              <p id="drag-content-2">Drag & drop an image here, or click to select one</p>
            )}

            {/* Display the second selected image */}
            {selectedImage2 && (
              <div style={{ marginTop: '20px' }}>
                <img src={selectedImage2} className="img-fluid" alt="Selected 2" />
              </div>
            )}
          </div>
        </div>
      </Grid>
                                        <Grid item xs={6} md={4} className="px-2">
                                            <div className="business-pictures-container bg-secondary py-3">
                                                <div className="image-container image-container-small mx-auto d-flex justify-content-center pt-3">
                                                    <img src={camera_white} alt="shop1" className="img-fluid" />
                                                </div>
                                                <p className="text-center text-white">Drag And Drop An Image For Profile, Or Browse</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} md={4} className="px-2">
                                            <div className="business-pictures-container bg-secondary py-3">
                                                <div className="image-container image-container-small mx-auto d-flex justify-content-center pt-3">
                                                    <img src={camera_white} alt="shop1" className="img-fluid" />
                                                </div>
                                                <p className="text-center text-white">Drag And Drop An Image For Profile, Or Browse</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} md={4} className="px-2">
                                            <div className="business-pictures-container bg-secondary py-3">
                                                <div className="image-container image-container-small mx-auto d-flex justify-content-center pt-3">
                                                    <img src={camera_white} alt="shop1" className="img-fluid" />
                                                </div>
                                                <p className="text-center text-white">Drag And Drop An Image For Profile, Or Browse</p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} md={4} className="px-2">
                                            <div className="business-pictures-container bg-secondary py-3">
                                                <div className="image-container image-container-small mx-auto d-flex justify-content-center pt-3">
                                                    <img src={camera_white} alt="shop1" className="img-fluid" />
                                                </div>
                                                <p className="text-center text-white">Drag And Drop An Image For Profile, Or Browse</p>
                                            </div>
                                        </Grid>
                                    </Grid>                               
                                    <a href="" className="text-decoration-none text-end text-info mt-2 px-4">ADD MORE</a>
                                </Stack>                                    
                            </div>

                            {/* address section */}
                            {/* <div>                               
                                <Stack direction="column" className="my-3">
                                    <Stack direction="row" sx={{my :'3'}}>
                                        <Typography variant="h6" className="">Details </Typography>
                                        <div className="image-container image-container-large">
                                            <img src={Horizontal_line} alt="horizontalline" className='img-fluid'/>
                                        </div>
                                    </Stack>
                                    <Grid container spacing={2} sx={{p:2}}>                                       
                                        <Grid item xs={12} sm={12} md={7} className="">
                                            <div className="address-card p-3 ">
                                                <h6 className="text-white text-heading-content large-font-width text-start my-2">Address </h6>
                                                <Typography className="text-heading-content text-wrap overflow-hidden text-white text-start my-2" sx={{'height' :'55%'}}>{posts ? posts.address : 'Your Address...'}</Typography>
                                                <Stack direction="row">
                                                    <div className="image-container image-container-xsmall me-1 my-1">
                                                        <img src={white_location_icon} alt="horizontalline" className='img-fluid'/>
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
                            </div> */}

                            {/* logo section */}
                            <div className='my-4 d-flex gap-5'>
                                <div className="add-logo-container business-theme">                                
                                    <div
                                        {...getRootProps2()}
                                        style={{ border: '2px dashed #ccc', margin: '20px', color: 'white', padding: '10px', textAlign: 'center' }}
                                    >
                                        <input {...getInputProps2()} />
                                        {isDragActive2 ? (
                                        <p>Drop the image here...</p>
                                        ) : (
                                        <p id="drag-content-2">Drag & drop an image here, or click to select one</p>
                                        )}

                                        {/* Display the second selected image */}
                                        {selectedImage2 && (
                                        <div style={{ marginTop: '20px' }}>
                                            <img src={selectedImage2} className="img-fluid" alt="Selected 2" />
                                        </div>
                                        )}
                                    </div>    
                                </div>
                                <div className='my-auto'>
                                    <p className='large-font-width content-color'>Add Logo Image</p>
                                </div>
                            </div>   

                            
                            {/* UPdate */}
                            <div className='my-4 d-flex gap-5'>                              
                                <button className='btn btn-info btn-lg text-white'>Update Profile</button>
                            </div>                          
                        </Grid>
                        {/* <Grid item xs={12} md={4}>
                            <div className="start-section-margin related-section">
                                <div className='related-search-container' >
                                    <p className='content-color p-4'>Related Searches</p>
                                    <Grid container spacing={2} className="justify-content-evenly">
                                        <Grid item  xs={12} sm={12}  className="shop-grid-item">
                                            <Box className="mx-auto">
                                                <Box className="image-container image-container-medium mx-auto">
                                                    <img src={shop1} alt="shop1" className="img-fluid" />                     
                                                </Box>  
                                                <Box className="shoplist-details mx-auto" xs={12} sm={4} sx={{ display: 'flex', alignItems: 'flex-start', margin:'5% auto'}}>
                                                    <Box className="image-container image-container-xsmall">
                                                        <img src={shop1_logo} alt="shop_logo" className="img-fluid" />
                                                    </Box>
                                                    <Box xs={12} sm={4} className="shoplist-rightcontentbox m-0 text-left">
                                                        <Typography variant="h6"  className="overflow-hidden m-0 shoplist-shop-heading heading-color">
                                                        Bhuvanesh Vegetable Shops
                                                        </Typography>
                                                        <Stack spacing={1}>
                                                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly
                                                            sx={{color:'#83C7EC' }} /> 
                                                        </Stack>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                                        <div className="image-container image-container-xsmall">
                                                            <img src={location_icon} alt="location_icon" className="m-0 img-fluid"/>
                                                        </div>
                                                        <Typography variant="body2" className="overflow-hidden shoplist-shop-location content-color">
                                                            Anna Salai, Angalaaman Kovil, Chennai.
                                                        </Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        
                                        <Grid item  xs={12} sm={12}  className="shop-grid-item">
                                            <Box className="mx-auto">
                                            <Box className="image-container image-container-medium">
                                            <img src={shop2} alt="shop1" className="mx-auto img-fluid" />                     
                                            </Box>  
                                            <Box className="shoplist-details mx-auto" xs={12} sm={4} sx={{ display: 'flex', alignItems: 'flex-start', margin:'5% auto'}}>
                                            <Box className="image-container image-container-xsmall">
                                                <img src={shop1_logo} alt="shop_logo" className="img-fluid" />
                                            </Box>
                                            <Box xs={12} sm={4} className="shoplist-rightcontentbox m-0 text-left">
                                                <Typography variant="h6"  className="overflow-hidden m-0 shoplist-shop-heading heading-color">
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

                                        <Grid item  xs={12} sm={12}  className="shop-grid-item">
                                            <Box className="mx-auto">
                                                <Box className="image-container image-container-medium ">
                                                    <img src={shop3} alt="shop1" className="mx-auto img-fluid" />                     
                                                </Box>  
                                                <Box className="shoplist-details mx-auto" xs={12} sm={4} sx={{ display: 'flex', alignItems: 'flex-start', margin:'5% auto'}}>
                                                    <Box className="image-container image-container-xsmall">
                                                        <img src={shop1_logo} alt="shop_logo" className="img-fluid" />
                                                    </Box>
                                                    <Box xs={12} sm={4} className="shoplist-rightcontentbox m-0 text-left">
                                                        <Typography variant="h6"  className="overflow-hidden m-0 shoplist-shop-heading heading-color">
                                                            Grace Super Market
                                                        </Typography>
                                                        <Stack spacing={1}>
                                                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly
                                                            sx={{ color: '#83C7EC' }} /> 
                                                        </Stack>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                                        <div className="image-container image-container-xsmall">
                                                            <img src={location_icon} alt="location_icon" className="m-0 img-fluid"/>
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
                                    <Typography variant="h6"  className="search-tags">Departmental Store</Typography>
                                    <Typography variant="h6" className="search-tags">Hotels near me</Typography>
                                    <Typography variant="h6" className="search-tags">Departmental Store</Typography>
                                </Box>                                
                            </div> 

                            <div className="ade_section">
                                <div className='image-container image-container-medium mx-auto' >
                                    <img src={ad1} alt="banner-image" className='img-fluid'/>
                                </div>
                                
                            </div>                        
                        </Grid> */}
                    </Grid>  
                           
                </div> 
                <Footer />         
            </div>
        );
    };

export default BusinessInfo;