<?php

namespace App\Http\Resources;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Comment as CommentResource;
use App\Http\Resources\User as UserResource;

class Comment extends JsonResource
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
            'user' => new UserResource($this->user),
            'content' => $this->content,
            'updatedAt' => $this->updated_at->diffForHumans(),
            'createdAt' => $this->created_at->diffForHumans(),
            'replyingTo' => (new UserResource(User::find($this->comment['user_id']))),
            'comments' => CommentResource::collection($this->comments),
        ];
    }
}
