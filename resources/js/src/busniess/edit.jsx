import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../App";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditBusiness = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        business_id: "",
        user_id: "",
        business_name: "",
        business_description: "",
        business_category: "",
        address: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
        contact_email: "",
        contact_phone: "",
        website_url: "",
        social_media_links: "",
        business_hours: "",
        logo_url: "",
        verification_status: "Pending", // Default value
    });

    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the business data for the given ID
        axios
            .get(`${BASE_URL}/api/business/${id}`)
            .then((response) => {
                setInputs(response.data);
            })
            .catch(() => {
                setError("Failed to fetch business data. Please check the database connection.");
            });
    }, [id]);

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        axios
            .put(`${BASE_URL}/api/business/${id}`, inputs)
            .then(() => {
                navigate("/");
            })
            .catch(() => {
                setError("Unable to update business. Please check the database connection.");
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
                            <label htmlFor="business_id" className="form-label">Business ID</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="business_id"
                                value={inputs.business_id}
                                required
                                maxLength="255"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="user_id" className="form-label">User ID</label>
                            <input
                                className="form-control"
                                type="number"
                                onChange={handleChange}
                                name="user_id"
                                value={inputs.user_id}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="business_name" className="form-label">Business Name</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="business_name"
                                value={inputs.business_name}
                                required
                                maxLength="255"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="business_description" className="form-label">Business Description</label>
                            <textarea
                                className="form-control"
                                onChange={handleChange}
                                name="business_description"
                                value={inputs.business_description}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="business_category" className="form-label">Business Category</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="business_category"
                                value={inputs.business_category}
                                maxLength="255"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="address"
                                value={inputs.address}
                                maxLength="255"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">City</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="city"
                                value={inputs.city}
                                maxLength="100"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="state" className="form-label">State</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="state"
                                value={inputs.state}
                                maxLength="100"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="postal_code" className="form-label">Postal Code</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="postal_code"
                                value={inputs.postal_code}
                                maxLength="20"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="country" className="form-label">Country</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="country"
                                value={inputs.country}
                                maxLength="100"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact_email" className="form-label">Contact Email</label>
                            <input
                                className="form-control"
                                type="email"
                                onChange={handleChange}
                                name="contact_email"
                                value={inputs.contact_email}
                                maxLength="255"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact_phone" className="form-label">Contact Phone</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="contact_phone"
                                value={inputs.contact_phone}
                                maxLength="20"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="website_url" className="form-label">Website URL</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="website_url"
                                value={inputs.website_url}
                                maxLength="255"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="social_media_links" className="form-label">Social Media Links</label>
                            <textarea
                                className="form-control"
                                onChange={handleChange}
                                name="social_media_links"
                                value={inputs.social_media_links}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="business_hours" className="form-label">Business Hours</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="business_hours"
                                value={inputs.business_hours}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="logo_url" className="form-label">Logo URL</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={handleChange}
                                name="logo_url"
                                value={inputs.logo_url}
                                maxLength="255"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="verification_status" className="form-label">Verification Status</label>
                            <select
                                className="form-control"
                                onChange={handleChange}
                                name="verification_status"
                                value={inputs.verification_status}
                            >
                                <option value="Pending">Pending</option>
                                <option value="Verified">Verified</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <button className="btn btn-primary">Update</button>
                            {error && <p className="text-danger mb-0">{error}</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditBusiness;
