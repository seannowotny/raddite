<?php

namespace App\Http\Controllers;

use App\User;
use App\Http\Resources\User as UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except(['show']);
    }

    public function current()
    {
        $user = auth()->user();

        return response(new UserResource($user), 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $user = User::find($user)->first();

        return response(new UserResource($user), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $token = $request->bearerToken();
        $user = auth()->user();

        $data = $request->toArray();

        $validation = Validator::make($data, [
            'name' => 'required|string|min:3|max:20',
        ]);

        if($validation->passes())
        {
            $user->name = $data['name'];
            $user->save();
            return response(new UserResource($user), 200);
        }
        else
        {
            return response($validation->errors()->all(), 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function delete()
    {
        $user = auth()->user();
        $user->delete();

        return response(json_encode(['message' => 'Your profile was successfully deleted']), 200);
    }
}
