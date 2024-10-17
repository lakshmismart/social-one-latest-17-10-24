<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, HasApiTokens;

    protected $table = 'users';
    protected $guarded = [];
    // protected $fillable = [
    //   'email',
    //   'password',
    // ];

    // protected $dates = [
    //     'date_of_registration',
    //     'last_login',
    //     'created_at',
    //     'updated_at',
    //     'deleted_at',
    // ];

    // protected $casts = [
    //     'business_role' => 'string',
    // ];
}
