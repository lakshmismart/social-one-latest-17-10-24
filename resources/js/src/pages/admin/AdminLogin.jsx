import React from 'react';


import '../../css/main.css';
import './admin-css/login.css';

const AdminLogin = ()=>{

    return(
        <div class="card center-element">
        <div class="">
            <div class="p-4 border rounded">
                <h4 class="large-font-width text-center">LOGIN</h4>
                <form class="row g-3 justify-content-center needs-validation" novalidate>
                    <div class="col-10">
                        <label for="validationCustom01" class="form-label login-label">User Name</label>
                        <input type="text" class="form-control" id="validationCustom01" placeholder="Your email" value="" required />
                        <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-10">
                        <label for="validationCustom02" class="form-label login-label">Password</label>
                        <input type="text" class="form-control" id="validationCustom02" placeholder="Password" value="" required />
                        <div class="valid-feedback">Looks good!</div>
                    </div>                                        
                    <div class="col-10">
                        <button class="btn btn-primary" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
</div>
    );

}

export default AdminLogin;