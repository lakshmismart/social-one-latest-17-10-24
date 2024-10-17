// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

// export default function LabTabs() {
//   const [value, setValue] = useState('1');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="Item One" value="1" />
//             <Tab label="Item Two" value="2" />
//             <Tab label="Item Three" value="3" />
//           </TabList>
//         </Box>
//         <TabPanel value="1">Item One</TabPanel>
//         <TabPanel value="2">Item Two</TabPanel>
//         <TabPanel value="3">Item Three</TabPanel>
//       </TabContext>
//     </Box>
//   );
// }


// import React, { useState } from 'react';
// import { Box, Grid, Button, Typography } from '@mui/material';

// const YourComponent = () => {
//   const [activeTab, setActiveTab] = useState(1);

//   const handleNext = () => {
//     if (activeTab < 3) {
//       setActiveTab(activeTab + 1);
//     }
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <div className="tab-titles">
//         <Typography
//           className={`tab-title ${activeTab === 1 ? 'active' : ''}`}
//         >
//           Profile Creation
//         </Typography>
//         <Typography
//           className={`tab-title ${activeTab === 2 ? 'active' : ''}`}
//         >
//           Basic Details
//         </Typography>
//         <Typography
//           className={`tab-title ${activeTab === 3 ? 'active' : ''}`}
//         >
//           Add Location
//         </Typography>
//       </div>

//       <div className="tab-content">
//         {activeTab === 1 && (
//           <form>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <input
//                   type="text"
//                   className='form-control'
//                   placeholder='Business Name'
//                 />
//               </Grid>
//               {/* Other input fields */}
//               <Grid item xs={12} className="text-start mt-3">
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={handleNext}
//                 >
//                   Next
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         )}

//         {activeTab === 2 && (
//           <form>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <input
//                   type="text"
//                   className='form-control'
//                   placeholder='Business Started Year'
//                 />
//               </Grid>
//               {/* Other input fields */}
//               <Grid item xs={12} className="text-start mt-3">
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={handleNext}
//                 >
//                   Next
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         )}

//         {activeTab === 3 && (
//           <form>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <input
//                   type="text"
//                   className='form-control'
//                   placeholder='State'
//                 />
//               </Grid>
//               {/* Other input fields */}
//               <Grid item xs={12} className="text-start mt-3">
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                 >
//                   Submit
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         )}
//       </div>
//     </Box>
//   );
// };

// export default YourComponent;


import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Grid, Typography, Stack, Rating } from '@mui/material';

import { Component } from 'react';
import Button from '@mui/material/Button';
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
import location from '../../images/location-pic.png';
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



const rate = ({ relatedShops }) => {
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
        <section className="nearbyshops mt-3">
            <div className="container">
                <p className='h4 fw-bold text-primary my-3'>Top Picks For You</p>
                <Slider {...settings}>                
                   
                {/* <Grid container spacing={2} className="d-flex">
                  <Grid item xs={12} md={4}>                       */}
                    <div className="image-container image-container-medium medium-shopimage-container">
                        <img
                            src={shop1}
                            alt='shop_name'
                            className="img-fluid-contain"
                        />
                    </div>
                  {/* </Grid>

                  <Grid item xs={12} md={4}>                       */}
                    <div className="image-container image-container-medium medium-shopimage-container">
                        <img
                            src={shop1}
                            alt='shop_name'
                            className="img-fluid-contain"
                        />
                    </div>
                  {/* </Grid>
                  <Grid item xs={12} md={4}>                       */}
                    <div className="image-container image-container-medium medium-shopimage-container">
                        <img
                            src={shop1}
                            alt='shop_name'
                            className="img-fluid-contain"
                        />
                    </div>
                    <div className="image-container image-container-medium medium-shopimage-container">
                        <img
                            src={shop1}
                            alt='shop_name'
                            className="img-fluid-contain"
                        />
                    </div>
                    <div className="image-container image-container-medium medium-shopimage-container">
                        <img
                            src={shop1}
                            alt='shop_name'
                            className="img-fluid-contain"
                        />
                    </div>
                    <div className="image-container image-container-medium medium-shopimage-container">
                        <img
                            src={shop1}
                            alt='shop_name'
                            className="img-fluid-contain"
                        />
                    </div>
                    
                  {/* </Grid>
                 

                </Grid> */}
                   
                </Slider>
            </div>
        </section>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "blue" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "blue" }}
            onClick={onClick}
        />
    );
}

export default rate;

