<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\User;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$0WYN.TWI67yPHeTs5ocAM.VsPwdVQ.BFpFAAWJ2IGIkVFlyswli8K', // password
        'remember_token' => Str::random(10),
    ];
});

$factory->state(User::class, 'jd', function (Faker $faker) {
    return [
        'name' => 'John Doe',
        'email' => 'jdoe@gmail.com',
        'email_verified_at' => now(),
        'password' => '$2y$10$0WYN.TWI67yPHeTs5ocAM.VsPwdVQ.BFpFAAWJ2IGIkVFlyswli8K', // password
        'remember_token' => Str::random(10),
    ];
});