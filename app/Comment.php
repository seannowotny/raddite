<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{   
    public function creator()
    {
        $this->belongsTo(User::class);
    }

    public function onPost()
    {
        $this->belongsTo(Post::class);
    }

    public function replyingTo()
    {
        $this->belongsTo(Comment::class);
    }

    public function comments()
    {
        $this->hasMany(Comment::class);
    }

    protected $fillable = [
        'content'
    ];
}
