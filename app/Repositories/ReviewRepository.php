<?php
namespace App\Repositories;

use App\Models\Review;
use App\Interface\ReviewRepositoryInterface;

class ReviewRepository implements ReviewRepositoryInterface
{
    public function create(array $data)
    {
        return Review::create($data);
    }
}
