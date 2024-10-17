import React, { useState, useEffect } from 'react';

const GetLocationDetails = () => {

    const [location, setLocation] = useState('');
    useEffect(() => {
        // Fetch location details on component mount
        getLocation();
    }, []);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    const showPosition = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetchLocationDetails(latitude, longitude);
    };

    const fetchLocationDetails = (latitude, longitude) => {
        const apiKey = 'AIzaSyC7LSch3_cgUqDdOh2zS29R9-3NvvdscE8'; // Replace with your API key
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.status === "OK") {
                    const address = data.results[0].formatted_address;
                    setLocation(`Your Location: ${address}`);
                } else {
                    console.error('Error fetching location details:', data.status);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const showError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    };

    return (
        <div>
            <h1>Location Details</h1>
            <div id="location-details">{location}</div>
        </div>
    );
};

export default GetLocationDetails;
