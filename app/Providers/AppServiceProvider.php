<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interface\BusinessRepositoryInterface;
use App\Repositories\BusinessRepository;
use App\Interface\UserRepositoryInterface;
use App\Repositories\UserRepository;
use App\Interface\ReviewRepositoryInterface;
use App\Repositories\ReviewRepository;


class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(BusinessRepositoryInterface::class, BusinessRepository::class);
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(ReviewRepositoryInterface::class, ReviewRepository::class);
    }
}
