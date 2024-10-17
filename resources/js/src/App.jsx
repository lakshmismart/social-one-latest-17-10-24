import { Component } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

export const BASE_URL = "http://127.0.0.1:8000";
import List from "./pages/List";
// import Edit from "./pages/Edit";
import "bootstrap/dist/css/bootstrap.min.css";

//Import Components.. 
import Create from "./pages/Create";
import Home from "./pages/web/Home";
import SearchList from "./pages/web/SearchList";
import BusinessInfo from "./pages/web/BuisnessInfo";
import Rate from "./pages/web/rate";
import CreateBusiness from "./pages/web/CreateBusiness";
import CreateBusinessProfile from "./pages/web/CreateBusinessProfile";
import GetLocationDetails from "./pages/web/GetLocationDetails";
import Login from "./pages/web/login";
import ProtectedRoute from "./pages/web/ProtectedRoute";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/list" element={<List />} />
                    
                    <Route path="/create" element={<ProtectedRoute> <Create /> </ProtectedRoute>} />
                   
                    <Route path="/search-list" element = {<SearchList/>} />
                    <Route path="/business-info/:id" element = {<BusinessInfo/>} />
                    <Route path="/rate" element = {<Rate/>} />
                    <Route path="/get-location" element = {<GetLocationDetails/>} />

                    <Route path="/login" element={<Login/>} /> 
                    <Route path="/create-business" element = {<ProtectedRoute> <CreateBusiness/> </ProtectedRoute>} />
                    <Route path="/create-business-profile/:id" element={<ProtectedRoute> <CreateBusinessProfile /> </ProtectedRoute>} />
                    {/* <Route path="/edit/:id" element={<Edit />} /> */}
                </Routes>
            </HashRouter>
        );
    }
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
