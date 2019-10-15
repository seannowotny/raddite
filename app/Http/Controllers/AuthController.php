<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $data = $request->toArray();

        if(Auth::attempt($data))
        {
            $user = User::where('email', $data['email'])->first();
            
            $token = $user->createToken('AccessToken')->token;
            $token->save();
        }
        else
        {
            return response(json_encode(['errors' => 'Unauthorized']), 401);
        }
    }

    public function register(Request $request)
    {
        $data = $request->toArray();

        $validation = Validator::make($data, [
            'name' => 'required|string|min:3|max:10',
            'email' => 'required|email',
            'password' => 'required|min:8'
        ]);

        if($validation->passes())
        {
            $user = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => $data['password']
            ]);

            return response(new UserResource($user), 201);
        }
        else
        {
            return response(['errors' => $validation->errors()->all()], 400);
        }
    }
}
