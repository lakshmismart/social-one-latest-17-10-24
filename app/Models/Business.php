<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Review;
// use Illuminate\Database\Eloquent\SoftDeletes;

class Business extends Model
{
    // use HasFactory, SoftDeletes;

    protected $table = 'businesses';
    protected $guarded =[];

    public function reviews(){
        return $this->hasMany(Review::class);
    }
}
