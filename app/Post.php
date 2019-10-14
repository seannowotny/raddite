<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    public function creator()
    {
        return $this->belongsTo(User::name);
    }

    public function onBoard()
    {
        return $this->belongsTo(Board::name);
    }

    public function comments()
    {
        return $this->hasMany(Comment::name);
    }

    protected $fillable = [
        'title', 'content'
    ];
}
