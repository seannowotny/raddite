<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\User as UserResource;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:8'
        ]);

        if(auth()->attempt($data))
        {
            $user = auth()->user();
            
            $token = $user->createToken('authToken')->accessToken;

            return response([
                'user' => new UserResource($user), 
                'access_token' => $token
            ], 201);
        }
        else
        {
            return response(json_encode(['errors' => 'Invalid credentials']), 401);
        }
    }

    public function register(Request $request)
    {
        $data = $request->toArray();

        $validation = Validator::make($data, [
            'name' => 'required|string|min:3|max:20|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed'
        ]);

        if($validation->passes())
        {
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']) 
            ]);

            $token = $user->createToken('authToken')->accessToken;

            return response([
                'user' => new UserResource($user), 
                'access_token' => $token
            ], 201);
        }
        else
        {
            return response(['errors' => $validation->errors()->all()], 400);
        }
    }
}
