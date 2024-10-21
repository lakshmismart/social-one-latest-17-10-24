<?php

namespace App\Interface;

interface UserRepositoryInterface
{
    public function findByEmail(string $email);
    public function attemptLogin(array $credentials): bool;
}
