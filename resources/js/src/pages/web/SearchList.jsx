import * as React from 'react';
import  {Component} from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Grid, Paper, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';


import search from '../../images/search.png';
import shop1 from '../../images/shops/shop-img-1.png';
import shop1_logo from '../../images/shops/shop1-logo.png';
import shop2 from '../../images/shops/shop-img-2.png';
import shop3 from '../../images/shops/shop-img-3.png';
import location_icon from '../../images/location_icon.png';
// import Grid from '@material-ui/core/Grid';

const commonPaperStyles = {
    // textAlign: 'center',
    // borderRadius: 2,
    // width: '80%', 
     margin: '0 auto',
    // color : '#807E7E',
  };

class SearchList extends Component {  
  render() {
    return (
      <div>
        <Header />
        <section className="hero p-5">
          <div className="container">
            <p>Hello Search list page.</p>
            <div className="fsd">
              <div className="input-container">
                <input type="text" placeholder="Search The Shops" />
                <div className="image-container image-container-small d-flex">
                  <img src={search} alt="Business Image" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="filter-menus">
              <div className="fsd">
                <div className="input-container">
                  <h6 className='p-2 menu-content-color'>Petrol</h6>
                </div>
              </div>
              <div className="fsd">
                <div className="input-container">
                <h6 className='p-2 menu-content-color'>Bus Stand</h6>
                </div>
              </div>
              <div className="fsd">
                <div className="input-container">
                <h6 className='p-2 menu-content-color'>Restaurant</h6>
                </div>
              </div>
              <div className="fsd">
                <div className="input-container">
                <h6 className='p-2 menu-content-color'>Temples</h6>
                </div>
              </div>
              <div className="fsd">
                <div className="input-container">
                <h6 className='p-2 menu-content-color'>Shops</h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4">
          <div className="container">
            <div className='fsd'>
            
              <Grid container spacing={2} className="justify-content-evenly">
                  <Grid item  xs={12} sm={4}  className="shop-grid-item">
                    <Box>
                    <Box>
                      <img src={shop1} alt="shop1" className="img-fluid" />                     
                    </Box>  
                    <Box className="shoplist-details" xs={12} sm={4} sx={{ display: 'flex', alignItems: 'flex-start', margin:'5% auto'}}>
                      <Box className="image-container image-container-small">
                        <img src={shop1_logo} alt="shop_logo" className="img-fluid" />
                      </Box>
                      <Box xs={12} sm={4} className="shoplist-rightcontentbox m-0 text-left">
                        <Typography variant="h6"  className="overflow-hidden m-0 shoplist-shop-heading heading-color">
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
                  
                  <Grid item  xs={12} sm={4}  className="shop-grid-item">
                    <Box>
                    <Box>
                      <img src={shop1} alt="shop1" className="img-fluid" />                     
                    </Box>  
                    <Box className="shoplist-details" xs={12} sm={4} sx={{ display: 'flex', alignItems: 'flex-start', margin:'5% auto'}}>
                      <Box className="image-container image-container-small">
                        <img src={shop1_logo} alt="shop_logo" className="img-fluid" />
                      </Box>
                      <Box xs={12} sm={4} className="shoplist-rightcontentbox m-0 text-left">
                        <Typography variant="h6"  className="overflow-hidden m-0 shoplist-shop-heading heading-color">
                          Bhuvanesh Vegetable Shops
                        </Typography>
                        <Stack spacing={1}>
                          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly
                            sx={{ color: '#83C7EC' }} /> 
                        </Stack>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                          <div className="image-container image-container-small">
                            <img src={location_icon} alt="location_icon" className="m-0 img-fluid" 
                            style={{ width: '30px', height: '30px'}} />
                          </div>
                          <Typography variant="body2" className="overflow-hidden shoplist-shop-location content-color">
                            Anna Salai, Angalaaman Kovil, Chennai.
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    </Box>
                  </Grid>

                  <Grid item  xs={12} sm={4}  className="shop-grid-item">
                    <Box>
                    <Box>
                      <img src={shop1} alt="shop1" className="img-fluid" />                     
                    </Box>  
                    <Box className="shoplist-details" xs={12} sm={4} sx={{ display: 'flex', alignItems: 'flex-start', margin:'5% auto'}}>
                      <Box className="image-container image-container-small">
                        <img src={shop1_logo} alt="shop_logo" className="img-fluid" />
                      </Box>
                      <Box xs={12} sm={4} className="shoplist-rightcontentbox m-0 text-left">
                        <Typography variant="h6"  className="overflow-hidden m-0 shoplist-shop-heading heading-color">
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
              </Grid>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default SearchList;
