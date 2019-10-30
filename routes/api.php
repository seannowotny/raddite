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

Route::post('auth/login', 'AuthController@login');
Route::post('auth/register', 'AuthController@register');

Route::apiResource('users', 'UserController')->only(['show']);
Route::get('user', 'UserController@current');
Route::put('user', 'UserController@update');
Route::delete('user', 'UserController@delete');

Route::apiResource('boards', 'BoardController')->only(['index', 'store']);

Route::get('posts/{id}', 'PostController@index');
Route::post('posts/{id}', 'PostController@store');
Route::apiResource('posts', 'PostController')->only(['update']);

Route::get('comments/{id}', 'CommentController@index');
Route::post('comments/{id}', 'CommentController@store');
Route::apiResource('comments', 'CommentController')->only(['update']);