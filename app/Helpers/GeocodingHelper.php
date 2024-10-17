<?php
namespace App\Helpers;

use App\Models\Business;
use Faker\Core\Coordinates;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;
use Illuminate\Http\Client\RequestException;


Class GeocodingHelper{
    // private static $apiKey = 'AIzaSyC7LSch3_cgUqDdOh2zS29R9-3NvvdscE8';
    private static $apiKey = '6caf98b6bc8c4231be6aeb8c5e0505b9';
//Google map for getting latitude and longitude by giving location
    // public static function getCoordinates($location)
    // {
    //     $url = "https://maps.googleapis.com/maps/api/geocode/json?address=" . urlencode($location) . "&key=" . self::$apiKey;
      
    //     $response = file_get_contents($url);
    //     $data = json_decode($response, true);
       
    //     if ($data && $data['status'] === "OK") {
    //         $result = $data['results'][0];
               
    //         $city = null;
    //         $latitude = null;
    //         $longitude = null;
    
    //         foreach ($result['address_components'] as $component) {
    //             if (in_array('locality', $component['types'])) {
    //                 $city = $component['long_name'];
    //             }
    //         }
    
    //         if (isset($result['geometry']['location']['lat'])) {
    //             $latitude = $result['geometry']['location']['lat'];
    //         }
    
    //         if (isset($result['geometry']['location']['lng'])) {
    //             $longitude = $result['geometry']['location']['lng'];
    //         }
    
    //         return [
    //             'city' => $city,
    //             'latitude' => $latitude,
    //             'longitude' => $longitude,
    //         ];
    //     }
    
    //     return null;
    // }

    
    public static function getCoordinates($location)
    {
        $url = "https://api.geoapify.com/v1/geocode/search?text=".urlencode($location)."&apiKey=" . self::$apiKey;
      
        $response = file_get_contents($url);
        $data = json_decode($response, true);
       
       
        if ($data) {
            // dd($data['query'].city);

            $result = $data['features'][0];               
            $city = null;
            $latitude = null;
            $longitude = null;
    
            foreach ($result['address_components'] as $component) {
                if (in_array('locality', $component['types'])) {
                    $city = $component['long_name'];
                }
            }
    
            if (isset($data['features'][0]['geometry']['coordinates'][0])) {
                $latitude = $data['features'][0]['geometry']['coordinates'][0];
            }
    
            if (isset($data['features'][0]['geometry']['coordinates'][1])) {
                $longitude = $data['features'][0]['geometry']['coordinates'][1];
            }
    
            return [
                'city' => $city,
                'latitude' => $latitude,
                'longitude' => $longitude,
            ];
        }
    
        return null;
    }

    public static function getPlaceDetails($lat, $lng)
    {
        $apiKey = self::$apiKey;
        // $url = "https://maps.googleapis.com/maps/api/geocode/json?latlng={$lat},{$lng}&key={$apiKey}";
        $url = "https://api.geoapify.com/v1/geocode/reverse?lat={$lat}&lon={$lng}&apiKey={$apiKey}";
        $client = new Client();
        $response = $client->get($url);
        $data = json_decode($response->getBody(), true);        
        if ($data['status'] === 'OK' && isset($data['results'][0])) {
            $placeDetails = $data['results'][0];
            return $placeDetails;
        }
        return null;
    }

    public static function findNearbyUsers($latitude, $longitude)
    {
        $userLatitude = $latitude;
        $userLongitude = $longitude;
        $radius = 5;
        $businesses = Business::selectRaw("*, 
        (6371 * acos(cos(radians(?)) 
        * cos(radians(latitude)) 
        * cos(radians(longitude) - radians(?)) 
        + sin(radians(?)) 
        * sin(radians(latitude)))) AS distance", 
        [$userLatitude, $userLongitude, $userLatitude])
        ->having('distance', '<', 5)
        ->orderBy('distance')
        ->get();

        return $businesses;
   
    }
}