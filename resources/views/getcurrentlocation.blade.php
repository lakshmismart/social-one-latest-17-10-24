<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get Location Details</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
    <div>
        <button onclick="getLocation()">Get Location Details</button>
        <br><br>
        <div id="location-details"></div>
    </div>

    <script>
        function getLocation() {
          console.log(navigator.geolocation)
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }

        function showPosition(position) {
          console.log('position : ', position)
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            console.log('Latitude', latitude)
            console.log('Longitude', longitude)

            // Call the geocoding API to get location details
            fetchLocationDetails(latitude, longitude);
        }

        function fetchLocationDetails(latitude, longitude) {
            const apiKey = 'AIzaSyC7LSch3_cgUqDdOh2zS29R9-3NvvdscE8'; 
          
            const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.status === "OK") {
                        const address = data.results[0].formatted_address;
                        console.log('Address : ', address)
                        document.getElementById('location-details').innerText = `Your Location: ${address}`;
                    } else {
                        console.error('Error fetching location details:', data.status);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }

        function showError(error) {
            switch(error.code) {
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
        }
    </script>
</body>
</html>
