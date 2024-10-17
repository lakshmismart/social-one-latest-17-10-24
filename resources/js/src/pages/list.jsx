import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../App";
import { Link } from "react-router-dom";

const List = () => {
    const [profiles, setProfiles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the list of business profiles
        axios
            .get(`${BASE_URL}/api/post`)
            .then((response) => {
                setProfiles(response.data);
            })
            .catch(() => {
                setError(
                    "Failed to fetch data. Please check the database connection."
                );
            });
    }, []);

    const handleDelete = (id) => {
        axios
            .delete(`${BASE_URL}/api/post/${id}`)
            .then(() => {
                setProfiles(profiles.filter((profile) => profile.id !== id));
            })
            .catch(() => {
                setError(
                    "Unable to delete the profile. Please check the database connection."
                );
            });
    };

    return (
        <div className="container mt-5">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h3 className="card-title mb-4">Business Profiles</h3>
                    <Link to="/create" className="btn btn-primary mb-3">
                        Add New Profile
                    </Link>
                    {error && <p className="text-danger mb-3">{error}</p>}
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Business Owner</th>
                                <th>Business Name</th>
                                <th>Contact Email</th>
                                <th>Contact Phone</th>
                                <th>Role</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {profiles.length > 0 ? (
                                profiles.map((profile) => (
                                    <tr key={profile.id}>
                                        <td>{profile.user_id}</td>
                                        <td>{profile.business_owner_name}</td>
                                        <td>{profile.business_name}</td>
                                        <td>{profile.contact_email}</td>
                                        <td>{profile.contact_phone}</td>
                                        <td>{profile.business_role}</td>
                                        <td>{profile.address}</td>
                                        <td>
                                            <Link
                                                to={`/edit/${profile.id}`}
                                                className="btn btn-sm btn-warning me-2"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                onClick={() =>
                                                    handleDelete(profile.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">
                                        No business profiles found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default List;
