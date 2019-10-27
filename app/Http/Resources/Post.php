<?php

namespace App\Http\Resources;

use App\Http\Resources\User as UserResource;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Comment as CommentResource;

class Post extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'body' => $this->body,
            'user' => new UserResource($this->user),
            'comments' => CommentResource::collection($this->comments),
            'updatedAt' => $this->updated_at,
            'createdAt' => $this->created_at,
        ];
    }
}
