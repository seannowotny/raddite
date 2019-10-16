<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('auth', 'AuthController@login');
Route::post('auth', 'AuthController@register');

Route::apiResource('users', 'UserController')->only(['show']);
Route::get('user', 'UserController@current');
Route::put('user', 'UserController@update');
Route::delete('user', 'UserController@delete');

Route::apiResource('boards', 'BoardController')->only(['index', 'store']);

Route::apiResource('posts', 'PostController')->only(['index', 'store', 'update']);