<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    public function creator()
    {
        return $this->hasOne(User::class);
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    protected $fillable = [
        'name'
    ];
}
