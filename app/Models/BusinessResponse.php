<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BusinessResponse extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'business_responses';

    protected $primaryKey = 'id';

    protected $fillable = [
        'business_id',
        'linked_review_id',
        'response_text',
        'status',
        'response_visibility',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $casts = [
        'status' => 'string',
        'response_visibility' => 'string',
    ];
}
