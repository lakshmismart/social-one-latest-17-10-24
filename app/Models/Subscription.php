<?php

// app/Models/Subscription.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Subscription extends Model
{
    use SoftDeletes;

    protected $table = 'subscriptions';

    protected $fillable = [
        'user_id', 'plan_type', 'billing_information', 'subscription_start_date',
        'subscription_end_date', 'renewal_status', 'payment_history', 'invoice_id', 'status'
    ];

    protected $casts = [
        'plan_type' => 'string',
        'renewal_status' => 'string',
        'status' => 'string',
    ];

    public $timestamps = true; // Ensure timestamps are managed by Laravel

    // Optional: Define any relationships here, e.g., User relationship
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

