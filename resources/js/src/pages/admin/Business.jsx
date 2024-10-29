import React, { useEffect } from "react";
import Layout from "./layouts/Layout";

import $ from "jquery"; // Import jQuery directly
import 'datatables.net-dt/css/dataTables.dataTables.css';
import 'datatables.net';
// import { BASE_URL } from "../../../App";

import './admin-css/main.css';

const Business = () => {
    useEffect(() => {
        const dataTable = $('#example').DataTable({
            "lengthMenu": [10, 25, 50, 100], // Keeping the dropdown for 10, 25, 50 entries
        });

        // Correct jQuery to hide the "entries per page" text but keep the dropdown
        $('.dt-length label').contents().filter(function() {
            return this.nodeType === 3;  // Target only the text node
        }).remove();
        $('.dt-search input').attr('placeholder', 'Search');

        $('#dt-search-0').focus(function(){
            $(this).css('outline','none');
        });

        return () => {
            dataTable.destroy(true);
        };
    }, []);

    return (
        <Layout>
            <div className="container">
                <div class="page-breadcrumb d-none d-sm-flex align-items-center my-4">
                    <div class="breadcrumb-title pe-3">All</div>
                    <div class="ps-3">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb mb-0 p-0">
                               <li> 
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Business List</li>
                            </ol>
                        </nav>
                    </div>
                    
                </div>
            
               {/* <div className="my-2 d-flex flex-row-reverse">
                    <a href={`${BASE_URL}`+"/#/forms"} className="btn btn-primary text-white">Add Business</a>
               </div> */}
                <div className="card">
                    <div className="card-body">
                        <table id="example" className="display border table-responsive table-striped" style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011-04-25</td>
                                    <td>$320,800</td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>Tokyo</td>
                                    <td>63</td>
                                    <td>2011-07-25</td>
                                    <td>$170,750</td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>Tokyo</td>
                                    <td>63</td>
                                    <td>2011-07-25</td>
                                    <td>$170,750</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
              
            </div>
        </Layout>
    );
};

export default Business;
