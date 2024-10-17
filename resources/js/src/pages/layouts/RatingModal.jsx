// src/RatingModal.js
import React, { useState } from 'react';
import '../../css/RatingModal.css'; // Import CSS for styling
import ratingreview from '../../images/rating-img.png';
import axios from 'axios'; // Make sure to import axios
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../../App";

const RatingModal = ({ isOpen, onClose, businessId }) => {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    if (!isOpen) return null; // Don't render if not open

    const handleRatingChange = (value) => {
        setRating(value);
    };

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = sessionStorage.getItem("authToken");
        const business_id = businessId
        console.log(token, business_id)
        axios.post(`${BASE_URL}/api/reviews`, {
            business_id,
            rating,
            review,
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            console.log("Rating submitted: ", response.data);
            onClose(); // Close the modal after submission
        })
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                toast.error(error.response.data.message);
                console.error("Error data:", error.response.data);
                console.error("Error status:", error.response.status);
                console.error("Error headers:", error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                toast.error(error.request);
                console.error("Request data:", error.request);
            } else {
                // Something happened in setting up the request that triggered an error
                toast.error(error.message);
                console.error("Error message:", error.message);
            }
        });
        
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>✖</button>
                <div className="row">
                    <div className="col-md-6">
                        <div className='image-container image-container-medium'>
                            <img src={ratingreview} className='img-fluid' alt="rating-img"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p className="content-color large-font-width">Rate Your Experience</p>
                        <div className="star-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    className={`star ${star <= rating ? 'selected' : ''}`}
                                    onClick={() => handleRatingChange(star)}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        <p className="content-color medium-font-width">Write A Detailed Review</p>
                        <form onSubmit={handleSubmit}>
                            <textarea
                                className='review-textarea'
                                value={review}
                                onChange={handleReviewChange}
                            />
                            <br/>
                            <button className='btn btn-info' type="submit">Submit</button>
                        </form>                        
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
       
    );
};

export default RatingModal;
