import React from 'react';
import Layout from './layouts/Layout';

const Business = ()=>{

    return(
        <Layout>
            <h1>Business Contents</h1>
            <div class="container">
                <h2>Basic Table</h2>
                <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>            
                <table class="table">
                    <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                    </tr>
                    <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>july@example.com</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    );

};

export default Business;