import Header from './Header';
import React from 'react';
import Sidebar from './Sidebar';

import '../admin-css/sidebar.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">                
                <Header />        
                <div className="content-area py-3">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
