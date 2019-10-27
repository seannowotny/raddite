<?php

namespace App\Http\Resources;

use App\Comment;
use App\Http\Resources\User as UserResource;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Comment as CommentResource;

class Post extends JsonResource
{
    public function toArray($request)
    {
        $comments = $this->comments->filter(function($comment)
        {
            return ! isset($comment->comment_id);
        });

        return [
            'id' => $this->id,
            'title' => $this->title,
            'body' => $this->body,
            'user' => new UserResource($this->user),
            'comments' => CommentResource::collection($comments),
            'updatedAt' => $this->updated_at,
            'createdAt' => $this->created_at,
        ];
    }
}
