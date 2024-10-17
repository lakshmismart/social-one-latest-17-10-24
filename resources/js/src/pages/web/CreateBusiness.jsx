import React, { useState, useEffect } from 'react';
import { Box, TextField, Grid, Button, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { BASE_URL } from '../../App';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../layouts/loader";  
// Importing images
import create_business_login from '../../images/create-business-login1.png';
import top_rated from '../../images/top-rated.png';
import blue_ring from '../../images/blue_ring.png';
import info_transparent from '../../images/info-transparent.png';
import info_transparent1 from '../../images/info-transparent1.png';

const CreateBusiness = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('1');
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    user_id: "",
    business_owner_name: "",
    business_name: "",
    contact_email: "",
    contact_phone: "",
    business_role: "Owner",
    address: "",
    business_profile: "",
  });
  const [error, setError] = useState(null);
  const token = sessionStorage.getItem("authToken");
  console.log("inside business :", token)

  // Handle tab change
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  // Handle input changes
  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === "file") {
      setInputs((prevInputs) => ({ ...prevInputs, [name]: files[0] }));
    } else {
      setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    }
  };

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); 
    const formData = new FormData();
    for (const key in inputs) {
      formData.append(key, inputs[key]);
    }
    const token = sessionStorage.getItem("authToken");
    console.log("token",token)
    axios
      .post(BASE_URL + "/api/businesses/store", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization' : `Bearer ${token}`
        },
      })
      .then((res) => {
        setIsLoading(false); 
        if (res.status === 200) {
          toast.success("Business created successfully!");
        }
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        setIsLoading(false); 
        if (error.response && error.response.data.errors) {
          toast.error(error.response.data.errors.business_profile[0]);
        } else {
          toast.error("Unable to create business. Please check the database connection.");
        }
      });
  };

  useEffect(() => {
   
    if (!token) {
        navigate("/login"); // Redirect to login if token is missing
    }
  }, [navigate]);

  return (
    <div>
      <Header />
      <Box className='start-section-margin'>
        <Box className='card-height mx-auto' style={{ width: '85%', margin: '5%' }}>
          <div className='card card-height mx-auto' style={{ width: '100%', margin: '5%' }}>
            <div className="image-container blue-div">
              <img src={blue_ring} className='img-fluid' alt="banner" />
            </div>
            <div className="image-container trans-div" style={{ left: '8%' }}>
              <img src={info_transparent} className='img-fluid' alt="banner" />
            </div>
            <div className="image-container image-container-medium trans-div2" style={{ left: '0%', top: '0%', zIndex: '1' }}>
              <img src={info_transparent1} className='img-fluid' alt="banner" />
            </div>
            <div className="image-container image-container-medium top-rated-img" style={{ left: '69%', top: '-15%' }}>
              <img src={top_rated} className='img-fluid' alt="banner" />
            </div> 

            <div className='card-container'>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <img src={create_business_login} className='img-fluid' alt="banner" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                      <TabList onChange={handleChangeTab} aria-label="tabs example">
                        <Tab label="Basic Details" value="1" />
                        <Tab label="Location" value="2" />
                        <Tab label="Profile " value="3" />
                      </TabList>
                      <form onSubmit={handleFormSubmit}>
                        <TabPanel value="1">
                          <h2 className="form-title">Add Your Business In SocialOne</h2>
                          
                            <Grid container spacing={2}>
                              <Grid item xs={12}>
                                <TextField
                                  label="User ID"
                                  variant="standard"
                                  fullWidth
                                  name="user_id"
                                  value={inputs.user_id}
                                  onChange={handleChange}
                                  required
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField
                                  label="Business Owner Name"
                                  variant="standard"
                                  fullWidth
                                  name="business_owner_name"
                                  value={inputs.business_owner_name}
                                  onChange={handleChange}
                                  required
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField
                                  label="Business Name"
                                  variant="standard"
                                  fullWidth
                                  name="business_name"
                                  value={inputs.business_name}
                                  onChange={handleChange}
                                  required
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField
                                  label="Contact Email"
                                  variant="standard"
                                  fullWidth
                                  name="contact_email"
                                  type="email"
                                  value={inputs.contact_email}
                                  onChange={handleChange}
                                  required
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField
                                  label="Contact Phone"
                                  variant="standard"
                                  fullWidth
                                  name="contact_phone"
                                  value={inputs.contact_phone}
                                  onChange={handleChange}
                                  required
                                />
                              </Grid>
                            

                            
                            
                            </Grid>
                        
                        </TabPanel>

                        <TabPanel value="2">
                        <h2 className="form-title">Add Your Business Address</h2>
                        <Grid item xs={12}>
                                <TextField
                                  label="Address"
                                  variant="standard"
                                  fullWidth
                                  name="address"
                                  value={inputs.address}
                                  onChange={handleChange}
                                  required
                                />
                              </Grid>

                        </TabPanel>

                        <TabPanel value="3">
                          <h2 className="form-title">Add Your Business Profile Picture</h2>
                            <Grid item xs={12} className='my-3 py-3 border-bottom'>
                                <Grid container spacing={2}>                             
                                  <Grid item xs={6}>
                                    <Button
                                      variant="contained"
                                      component="label"
                                      fullWidth
                                      sx={{
                                        backgroundColor: "#6c63ff",
                                        color: "#fff",
                                        padding: "10px",
                                        textTransform: "none",
                                        '&:hover': {
                                          backgroundColor: "#5a54d1"
                                        }
                                      }}
                                    >
                                      Upload Profile Picture
                                      <input
                                        type="file"
                                        hidden
                                        name="business_profile"
                                        onChange={handleChange}
                                        accept="image/*"
                                      />
                                    </Button>                                    
                                  </Grid>                              
                                  <Grid item xs={6} className='mt-3'>
                                    {inputs.business_profile ? (
                                      <Typography variant="body1" sx={{ paddingTop: '10px', color: '#333' }}>
                                        {inputs.business_profile.name}
                                      </Typography>
                                    ) : (
                                      <Typography variant="body1" sx={{ paddingTop: '10px', color: '#999' }}>
                                        No file selected
                                      </Typography>
                                    )}
                                  </Grid>
                                </Grid>
                            </Grid>

                              <Grid item xs={12}>
                                <Button variant="contained" color="primary" type="submit" disabled={isLoading} sx={{ minWidth: 100 }}>
                                  {isLoading ? <Loader /> : "Save"}
                                </Button>
                              </Grid>
                            


                        </TabPanel>
                      </form>
                    </TabContext>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </div>
        </Box>
      </Box>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default CreateBusiness;
