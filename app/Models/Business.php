<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;

class Business extends Model
{
    // use HasFactory, SoftDeletes;

    protected $table = 'businesses';
    protected $guarded =[];

    // protected $fillable = [
    //     'business_id',
    //     'user_id',
    //     'business_name',
    //     'business_description',
    //     'business_category',
    //     'address',
    //     'city',
    //     'state',
    //     'postal_code',
    //     'country',
    //     'contact_email',
    //     'contact_phone',
    //     'website_url',
    //     'social_media_links',
    //     'business_hours',
    //     'logo_url',
    //     'verification_status',
    // ];

    // protected $dates = [
    //     'created_at',
    //     'updated_at',
    //     // 'deleted_at',
    // ];

    // protected $casts = [
    //     'verification_status' => 'string',
    // ];
}
