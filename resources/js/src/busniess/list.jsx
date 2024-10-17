import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../App";
import { Link } from "react-router-dom";

const ListBusiness = () => {
    const [businesses, setBusinesses] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the list of businesses
        axios
            .get(`${BASE_URL}/api/businesses`)
            .then((response) => {
                setBusinesses(response.data);
            })
            .catch(() => {
                setError(
                    "Failed to fetch businesses. Please check the database connection."
                );
            });
    }, []);

    return (
        <div className="container mt-5">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h3 className="card-title mb-4">Business List</h3>
                    <Link
                        to="/create-business"
                        className="btn btn-primary mb-3"
                    >
                        Create New Business
                    </Link>
                    {error && <p className="text-danger">{error}</p>}
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Business ID</th>
                                <th>Business Name</th>
                                <th>Category</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {businesses.map((business) => (
                                <tr key={business.business_id}>
                                    <td>{business.business_id}</td>
                                    <td>{business.business_name}</td>
                                    <td>{business.business_category}</td>
                                    <td>{business.city}</td>
                                    <td>{business.state}</td>
                                    <td>
                                        <Link
                                            to={`/edit-business/${business.business_id}`}
                                            className="btn btn-warning btn-sm me-2"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            to={`/view-business/${business.business_id}`}
                                            className="btn btn-info btn-sm"
                                        >
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ListBusiness;
