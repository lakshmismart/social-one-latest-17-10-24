import React from "react";
import { useState, useEffect} from "react";
import axios from "axios";
import { BASE_URL } from "../App";
import { useNavigate, Link } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        user_id: "",
        business_owner_name: "",
        business_name: "",
        contact_email: "",
        contact_phone: "",
        business_role: "Owner", // Default value can be Owner or Manager
        address: "",
       business_profile: "",
    });

    const [error, setError] = useState(null);

    const handleChange = (event) => {
        const { name, value, type, files } = event.target;

        setInputs({ ...inputs, [event.target.name]: event.target.value });

        if (type === "file") {
            setInputs({ ...inputs, [name]: files[0] }); // Store the file object
        } else {
            setInputs({ ...inputs, [name]: value });
        }
    };

   const handleFormSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData(); // Create a FormData object

    // Append all fields to the FormData object
    for (const key in inputs) {
        formData.append(key, inputs[key]);
    }

    axios
        .post(BASE_URL + "/api/store", formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Set the appropriate header
            },
        })
        .then((res) => {
            if (res.status === 200) {
                toast.success(res.statusText, {
                    id: toastId,
                    position: "top-center",
                });
            }
            navigate("/");
        })
        .catch((error) => {
            // Handle errors here
            if (error.response && error.response.data.errors) {
                setError(error.response.data.errors.business_profile[0]); // Show specific error
            } else {
                setError("Unable to create post. Please check the database connection.");
            }
        });
    };

    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = sessionStorage.getItem("authToken");
        if (!token) {
            navigate("/login"); // Redirect to login if token is missing
        }
    }, [navigate]);
    

    return (
        <div className="container mt-5">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h3 className="card-title mb-4">Create Business Profile</h3>
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
                            <label htmlFor="contact_email" className="form-label"> Contact Email</label>
                            <input className="form-control" type="email" onChange={handleChange} name="contact_email"
                                value={inputs.contact_email}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact_phone" className="form-label"> Contact Phone </label>
                            <input className="form-control" type="text" onChange={handleChange} name="contact_phone" value={inputs.contact_phone} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="business_role" className="form-label"> Business Role </label>
                            <select className="form-control" onChange={handleChange} name="business_role" value={inputs.business_role}>
                                <option value="Owner">Owner</option>
                                <option value="Manager">Manager</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input className="form-control" type="text" onChange={handleChange}
                                name="address" value={inputs.address}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="profile_picture" className="form-label"> Profile Picture URL </label>
                            <input className="form-control" type="file" onChange={handleChange} name="business_profile"
                                value={inputs.profile_picture}/>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <button className="btn btn-success" type="submit">Save</button>
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

export default Create;
