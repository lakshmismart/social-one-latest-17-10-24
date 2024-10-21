import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="">
            <div className="row flex-nowrap">
                <Sidebar />
                <div className="col py-3">
                    {children}
                </div>
            </div>
        </div>
    );
};
export default Layout;
