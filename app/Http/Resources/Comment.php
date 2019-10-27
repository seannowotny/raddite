<?php

namespace App\Http\Resources;

use App\Http\Resources\User as UserResource;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

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
            'user' => new UserResource($this->user),
            'content' => $this->content,
            'updatedAt' => $this->updated_at->diffForHumans(),
            'createdAt' => $this->created_at->diffForHumans(),
        ];
    }
}
