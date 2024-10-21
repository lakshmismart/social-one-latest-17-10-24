<?php

namespace App\Repositories;

use App\Interface\BusinessRepositoryInterface;
use App\Models\Business;
use App\Helpers\GeocodingHelper;

class BusinessRepository implements BusinessRepositoryInterface
{
    public function getAllBusinesses()
    {
        return Business::all();
    }

    public function getBusinessById($id)
    {
        return Business::find($id);
    }

    public function createBusiness(array $data)
    {
        return Business::create($data);
    }

    public function updateBusiness($id, array $data)
    {
        $business = Business::find($id);
        if ($business) {
            $business->update($data);
            return $business;
        }
        return null;
    }

    public function deleteBusiness($id)
    {
        $business = Business::find($id);
        if ($business) {
            $business->delete();
            return true;
        }
        return false;
    }

    public function findNearbyBusinesses($latitude, $longitude)
    {
        return GeocodingHelper::findNearbyUsers($latitude, $longitude);
    }

    public function searchBusinessSuggestions($name)
    {
        return Business::select('id', 'business_id', 'business_name')
            ->where('business_name', 'like', '%' . $name . '%')
            ->get();
    }
}
