<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BusinessController;
use App\Http\Controllers\AdvertisementController;
use App\Http\Controllers\BusinessResponseController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('login',[LoginController::class, 'login'])->name('login');
Route::post('register',[LoginController::class, 'register'])->name('register');


Route::post('/get-related-business', [BusinessController::class, 'getRelatedBusiness'])->name('get-related-business');
Route::get('/search-suggestions/{id}',[BusinessController::class, 'searchSuggestions'])->name('search-suggestions');


Route::prefix('users')->name('users.')->group(function () {
    Route::get('/', [UserController::class, 'index'])->name('index');
    Route::get('/{id}', [UserController::class, 'show'])->name('show');
    Route::post('/', [UserController::class, 'store'])->name('store');
    Route::put('/{id}', [UserController::class, 'update'])->name('update');
    Route::delete('/{id}', [UserController::class, 'destroy'])->name('destroy');
});

Route::middleware('auth:sanctum')->prefix('businesses')->group(function () {
    Route::get('/', [BusinessController::class, 'index'])->name('businesses.index');
    Route::post('/store', [BusinessController::class, 'store'])->name('store');
    Route::get('/{id}', [BusinessController::class, 'show'])->name('businesses.show');
    Route::put('/{id}', [BusinessController::class, 'update'])->name('businesses.update');
    Route::delete('/{id}', [BusinessController::class, 'destroy'])->name('businesses.destroy');
    // Route::post('/reviews', [ReviewController::class, 'store'])->name('reviews.store');
});


Route::prefix('advertisements')->group(function () {
    Route::get('/', [AdvertisementController::class, 'index'])->name('advertisements.index');
    Route::get('/{id}', [AdvertisementController::class, 'show'])->name('advertisements.show');
    Route::post('/', [AdvertisementController::class, 'store'])->name('advertisements.store');
    Route::put('/{id}', [AdvertisementController::class, 'update'])->name('advertisements.update');
    Route::delete('/{id}', [AdvertisementController::class, 'destroy'])->name('advertisements.destroy');
});

Route::middleware('auth')->group(function () {
    Route::post('/messages', [MessageController::class, 'store'])->name('messages.store');
    Route::get('/messages', [MessageController::class, 'index'])->name('messages.index');
    Route::get('/messages/{id}', [MessageController::class, 'show'])->name('messages.show');
    Route::put('/messages/{id}', [MessageController::class, 'update'])->name('messages.update');
    Route::delete('/messages/{id}', [MessageController::class, 'destroy'])->name('messages.destroy');
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/reviews', [ReviewController::class, 'store'])->name('reviews.store');
    Route::get('/reviews', [ReviewController::class, 'index'])->name('reviews.index');
    Route::get('/reviews/{id}', [ReviewController::class, 'show'])->name('reviews.show');
    Route::put('/reviews/{id}', [ReviewController::class, 'update'])->name('reviews.update');
    Route::delete('/reviews/{id}', [ReviewController::class, 'destroy'])->name('reviews.destroy');
});


Route::middleware('auth')->group(function () {
    Route::post('/subscriptions', [SubscriptionController::class, 'store'])->name('subscriptions.store');
    Route::get('/subscriptions', [SubscriptionController::class, 'index'])->name('subscriptions.index');
    Route::get('/subscriptions/{id}', [SubscriptionController::class, 'show'])->name('subscriptions.show');
    Route::put('/subscriptions/{id}', [SubscriptionController::class, 'update'])->name('subscriptions.update');
    Route::delete('/subscriptions/{id}', [SubscriptionController::class, 'destroy'])->name('subscriptions.destroy');

    // Route to handle payment
    Route::post('/subscriptions/{id}/pay', [SubscriptionController::class, 'pay'])->name('subscriptions.pay');
});