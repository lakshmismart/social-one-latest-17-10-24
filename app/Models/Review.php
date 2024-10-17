<?php

// app/Models/Review.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Review extends Model
{
    use SoftDeletes;

    protected $table = 'reviews';

    protected $fillable = [
        'business_id', 'reviewer_user_id', 'rating', 'review_text', 'review_title',
        'photos_or_videos', 'verification_status', 'review_status', 'response_from_business_owner'
    ];

    protected $casts = [
        'rating' => 'integer',
        'verification_status' => 'string',
        'review_status' => 'string',
    ];

    public $timestamps = true; // Ensure timestamps are managed by Laravel

    // Optional: Define any relationships here, e.g., User or Business relationship
    public function reviewer()
    {
        return $this->belongsTo(User::class, 'reviewer_user_id');
    }

    public function business()
    {
        return $this->belongsTo(Business::class, 'business_id');
    }
}

