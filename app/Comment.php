<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{   
    public function creator()
    {
        $this->belongsTo(User::name);
    }

    public function onPost()
    {
        $this->belongsTo(Post::name);
    }

    public function replyingTo()
    {
        $this->belongsTo(Comment::name);
    }

    public function comments()
    {
        $this->hasMany(Comment::name);
    }

    protected $fillable = [
        'content'
    ];
}
