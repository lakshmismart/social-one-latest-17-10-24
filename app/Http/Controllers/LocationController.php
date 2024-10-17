<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Business;
use Illuminate\Support\Facades\DB;

class LocationController extends Controller
{
    //
    public static function findNearbyUsers($latitude, $longitude)
    {
        $userLatitude = $latitude;
        $userLongitude = $longitude;
        $radius = 5;
               
        $users = User::select('*')
        ->whereRaw('(6371 * acos(cos(radians(?)) * cos(radians(driver_latitude)) * cos(radians(driver_longitude) - radians(?)) + sin(radians(?)) * sin(radians(driver_latitude)))) < ?', [$userLatitude, $userLongitude, $userLatitude, $radius])
        ->get();
        //dd($users);
   
    }
}
