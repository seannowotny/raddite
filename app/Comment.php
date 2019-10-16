<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{   
    public function author()
    {
        return $this->belongsTo(User::class);
    }

    public function onPost()
    {
        return $this->belongsTo(Post::class);
    }

    public function replyingTo()
    {
        return $this->belongsTo(Comment::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    protected $fillable = [
        'content'
    ];
}
