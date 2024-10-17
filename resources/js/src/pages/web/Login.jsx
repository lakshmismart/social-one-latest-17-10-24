import React,{useState} from "react";

import { Grid, Box, Typography, Button } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import axios from "axios";
import { BASE_URL } from "../../App";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import login_image from "../../images/login_left_image.png";
import camera_white from '../../images/camera-white.png';


import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Loader from "../layouts/loader";

import "../../css/login.css";

const Login = ()=>{

    const [imageError,setImageError]= useState(false);
    const handleImageError = ()=>{
        console.log("image not loaded")
        setImageError = true;
    }

    const [value, setValue] = useState('1');
    const [isLoading, setIsLoading] = useState(false);
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        email : "",
        password :"",
    });

    const [error, setError] = useState(null);

    const handleChange = (event) => {
        const { name, value, type, files } = event.target;

        setInputs({ ...inputs, [event.target.name]: event.target.value });

        if (type === "file") {
            setInputs({ ...inputs, [name]: files[0] }); // Store the file object
        } else {
            setInputs({ ...inputs, [name]: value });
        }
    };

 
    const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); 
    const formData = new FormData(); // Create a FormData object

    // Append all fields to the FormData object
    for (const key in inputs) {
        console.log(inputs[key]);
        formData.append(key, inputs[key]);
    }
    console.log(formData)

    axios
        .post(BASE_URL + "/api/register", formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Set the appropriate header
            },
        })
        .then((res) => {
            setIsLoading(false);
            console.log("res : ",res)
            if (res.status === 200) {
                console.log("success :",res.data.message)               
                toast.success(res.data.message);
                setTimeout(() => {
                    navigate("/login?tab=login")
                }, 3000);
            }else{
                console.log("error:",res.data.message)
                toast.error(res.data.message);
            }
           
        })
        .catch((error) => {
            // Handle errors here
            setIsLoading(false);

            if (error.response && error.response.data.errors) {
                setError(error.response.data.errors.business_profile[0]); // Show specific error
            } else {
                setError("Unable to create post. Please check the database connection.");
            }
        });
    };

    const handleLoginFormSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData(); // Create a FormData object
    
        // Append all fields to the FormData object
        for (const key in inputs) {
            console.log(inputs[key]);
            formData.append(key, inputs[key]);
        }
        console.log(formData)
    
        axios
            .post(BASE_URL + "/api/login", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set the appropriate header
                },
            })
            .then((res) => {
                setIsLoading(false);
                console.log("res : ",res)
                if (res.data.status == 200) {
                    console.log("success :",res.data.message) 
                    const token = res.data.token; 
                    console.log("token :", token);
                    sessionStorage.setItem('authToken', token);

                    toast.success(res.data.message);
                    setTimeout(()=>{
                        navigate("/");
                    },3000);                    
                }else{
                    console.log("error:",res.data.message)
                    toast.error(res.data.message);
                }
               
            })
            .catch((error) => {
                setIsLoading(false);
                // Handle errors here
                
    
                if (error.response && error.response.data.errors) {
                    setError(error.response.data.errors.business_profile[0]); // Show specific error
                } else {
                    setError("Unable to create post. Please check the database connection.");
                }
            });
        };
  
    return(
        <>
            <Header/>
            <Box className='start-section-margin '>
                <Grid container spacing={2} className="h-100 w-75 mx-auto">
                    <Grid item sm={6} xs={12} className="left-login-container"> 
                        
                        {!imageError ?
                            (
                                <div className="business-fixed-container h-100">
                                    <div className="image-container"> 
                                        <img src={login_image} className="img-fluid" onError={handleImageError}/>
                                    </div>                            
                                </div> 
                            ):(
                                <div className="business-fixed-container bg-secondary border border-info py-5">
                                <div className="image-container image-container-small mx-auto d-flex justify-content-center pt-3">
                                    <img src={camera_white} alt="shop1" className="img-fluid" />
                                </div>
                                <p className="text-center text-white">Business Image Unavailable</p>
                            </div> 
                            )                        
                        }                            
                                              
                    </Grid>

                    <Grid item md={6} xs={12} p={3}>                       
                        {/* <h4 className="text-primary text-center">SIGN IN</h4> */}
                      
                        
                        <div className="tab-titles">
                            <TabContext value={value} className="mx-auto">
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleTabChange}  className="mx-auto" aria-label="lab API tabs example">
                                    <Tab label="SIGN IN" value="1" />
                                    <Tab label="SIGN UP" value="2" />                                   
                                </TabList>
                                </Box>
                                <TabPanel label="login" id="login" value="1">
                                    <p className="text-center text-secondary my-2">FIND TOP-RATED BUSINESSES IN YOUR AREA OR ADD YOUR OWN.</p>

                                    <form onSubmit={handleLoginFormSubmit}>
                                        <div className="form-group  mt-4">
                                            <input name="email" onChange={handleChange} className="form-control login-input-bg"  placeholder="Enter Email" />
                                        </div>
                                        <div className="form-group mt-4">
                                            <input type="password" name="password" onChange={handleChange} className="form-control login-input-bg" placeholder="Enter Password" />
                                        </div>
                                        <div className="mt-4" >
                                            <button className="bg bg-primary text-white w-75 border-0 p-2 fs-4 rounded" disabled={isLoading}>
                                                    {isLoading ? <Loader /> : "Sign In"}
                                            </button>                                        
                                        </div>
                                        <p className="mt-3">Don't have an account? <a href="" className="text-decoration-none text-primary">Sign Up</a></p>
                                    </form>
                                </TabPanel>
                                <TabPanel value="2">
                                    <p className="text-center text-secondary my-2">FIND TOP-RATED BUSINESSES IN YOUR AREA OR ADD YOUR OWN.</p>
                                    <form onSubmit={handleFormSubmit}>
                                        <div className="form-group  mt-4">
                                            <input name="email" onChange={handleChange} className="form-control login-input-bg"  placeholder="Enter Email" />
                                        </div>
                                        <div className="form-group mt-4">
                                            <input type="password" name="password" onChange={handleChange} className="form-control login-input-bg" placeholder="Enter Password" />
                                        </div>
                                        <div className="mt-4" >
                                            <button className="bg bg-primary text-white w-75 border-0 p-2 fs-4 rounded" disabled={isLoading}>
                                                    {isLoading ? <Loader /> : "Sign Up"}
                                            </button>                                        
                                        </div>
                                    </form>
                                </TabPanel>
                               
                            </TabContext>
                        </div>

                        
                       
                    </Grid>

                </Grid>


            </Box>
            <Footer/>        
            <ToastContainer />
        </>
        
    );


}

export default Login;