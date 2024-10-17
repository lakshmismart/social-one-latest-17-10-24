import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../App";
import { useNavigate, useParams, Link } from "react-router-dom";

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Get the ID from the URL

    const [inputs, setInputs] = useState({
        user_id: "",
        business_owner_name: "",
        business_name: "",
        contact_email: "",
        contact_phone: "",
        business_role: "Owner", // Default value can be Owner or Manager
        address: "",
        profile_picture: "",
    });

    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the current data of the business profile to be edited
        axios
            .get(`${BASE_URL}/api/post/${id}`)
            .then((response) => {
                setInputs(response.data);
            })
            .catch(() => {
                setError(
                    "Failed to fetch data. Please check the database connection."
                );
            });
    }, [id]);

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        axios
            .put(`${BASE_URL}/api/post/${id}`, inputs) // Update the data
            .then(() => {
                navigate("/");
            })
            .catch(() => {
                setError(
                    "Unable to update the post. Please check the database connection."
                );
            });
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h3 className="card-title mb-4">Edit Business Profile</h3>
                    <Link to="/" className="btn btn-secondary mb-3">
                        Back
                    </Link>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="user_id" className="form-label">
                                User ID
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="user_id"
                                value={inputs.user_id}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="business_owner_name"
                                className="form-label"
                            >
                                Business Owner Name
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="business_owner_name"
                                value={inputs.business_owner_name}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="business_name"
                                className="form-label"
                            >
                                Business Name
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="business_name"
                                value={inputs.business_name}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="contact_email"
                                className="form-label"
                            >
                                Contact Email
                            </label>
                            <input
                                className="form-control"
                                type="email"
                                onChange={handleChange}
                                name="contact_email"
                                value={inputs.contact_email}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="contact_phone"
                                className="form-label"
                            >
                                Contact Phone
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="contact_phone"
                                value={inputs.contact_phone}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="business_role"
                                className="form-label"
                            >
                                Business Role
                            </label>
                            <select
                                className="form-control"
                                onChange={handleChange}
                                name="business_role"
                                value={inputs.business_role}
                            >
                                <option value="Owner">Owner</option>
                                <option value="Manager">Manager</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">
                                Address
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="address"
                                value={inputs.address}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="profile_picture"
                                className="form-label"
                            >
                                Profile Picture URL
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="profile_picture"
                                value={inputs.profile_picture}
                            />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <button className="btn btn-success">Update</button>
                            {error && (
                                <p className="text-danger mb-0">{error}</p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;
