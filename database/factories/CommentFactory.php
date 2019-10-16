<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use App\Comment;
use Faker\Generator as Faker;

$factory->define(Comment::class, function (Faker $faker) {
    return [
        'content' => $faker->text(50),
    ];
});
