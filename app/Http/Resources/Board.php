<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Board extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $userId = $this->user ? $this->user->name : null;

        return [
            'id' => $this->id,
            'name' => $this->name,
            'user' => $userId,
        ];
    }
}
