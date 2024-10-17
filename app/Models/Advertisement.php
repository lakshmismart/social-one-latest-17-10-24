<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Advertisement extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'advertisements';

    protected $primaryKey = 'ad_id';

    protected $fillable = [
        'business_id',
        'ad_title',
        'ad_content',
        'target_audience',
        'budget',
        'start_date',
        'end_date',
        'ad_status',
        'performance_metrics',
    ];

    protected $dates = [
        'date_created',
        'start_date',
        'end_date',
        'deleted_at',
    ];

    protected $casts = [
        'budget' => 'decimal:2',
        'ad_status' => 'string',
    ];
}
