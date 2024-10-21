<?php

namespace App\Interface;

interface BusinessRepositoryInterface
{
    public function getAllBusinesses();

    public function getBusinessById($id);

    public function createBusiness(array $data);

    public function updateBusiness($id, array $data);

    public function deleteBusiness($id);
    
    public function findNearbyBusinesses($latitude, $longitude);

    public function searchBusinessSuggestions($name);
}
