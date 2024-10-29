import React from 'react';
import Stack from '@mui/material/Stack';
import Sidebar from './layouts/Sidebar';
import Layout from './layouts/Layout';

const Dashboard = ()=>{

    return(
        <>
        <Layout>
            <div class="container">            
                <div class="page-breadcrumb d-none d-sm-flex align-items-center my-4">
                    <div class="breadcrumb-title pe-3">All</div>
                    <div class="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0 p-0">
                               <li> 
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                            </ol>
                        </nav>
                    </div>
                    
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3'>
                            <div className="col">
                                <div className="card shadow radius-10 border-start border-0 border-3 border-info">
                                    <div className='card-body'>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <p className="mb-0 text-secondary small-font-width">Today Users</p>
                                                <h4 className='my-1 text-info'>0</h4>
                                                <p className="mb-0 text-secondary small-font-width">Today's Users Count</p>
                                            </div>
                                            <div class="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
                                                <i class="bx bxs-group"></i>
                                            </div>
                                        </div>
                                    </div>                                   
                                </div>
                            </div>

                            <div className="col">
                                <div className="card shadow radius-10 border-start border-0 border-3 border-info">
                                    <div className='card-body'>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <p className="mb-0 text-secondary small-font-width">Today Users</p>
                                                <h4 className='my-1 text-info'>0</h4>
                                                <p className="mb-0 text-secondary small-font-width">Today's Users Count</p>
                                            </div>
                                            <div class="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
                                                <i class="bx bxs-group"></i>
                                            </div>
                                        </div>
                                    </div>                                   
                                </div>
                            </div>

                            <div className="col">
                                <div className="card shadow radius-10 border-start border-0 border-3 border-info">
                                    <div className='card-body'>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div>
                                                <p className="mb-0 text-secondary small-font-width">Today Users</p>
                                                <h4 className='my-1 text-info'>0</h4>
                                                <p className="mb-0 text-secondary small-font-width">Today's Users Count</p>
                                            </div>
                                            <div class="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
                                                <i class="bx bxs-group"></i>
                                            </div>
                                        </div>
                                    </div>                                   
                                </div>
                            </div>


                        </div>                         
                    </div>
                </div>
            </div>
        </Layout>
        </>
    );
};
export default Dashboard;
