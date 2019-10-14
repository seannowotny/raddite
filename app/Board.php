<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    public function creator()
    {
        return $this->hasOne(User::name);
    }

    public function posts()
    {
        return $this->hasMany(Post::name);
    }

    protected $fillable = [
        'name'
    ];
}
