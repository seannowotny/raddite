<?php

namespace App\Http\Controllers;

use App\Board;
use Illuminate\Http\Request;
use App\Http\Resources\Board as BoardResource;

class BoardController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $boards = Board::all();

        return response(BoardResource::collection($boards), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $noLogin = '/(?i)(?!^login$)(^.*$)/';
        $noRegister = '/(?i)(?!^register$)(^.*$)/';
        $noProfile = '/(?i)(?!^profile$)(^.*$)/';

        $request->validate([
            'name' => "required|min:3|max:20|unique:boards|regex:{$noLogin}|regex:{$noRegister}|regex:{$noProfile}",
        ]);

        $user = auth()->user();

        $user = $user->boards()->save(factory(Board::class)->make([
            'name' => $request->name,
        ]));

        return response(new BoardResource($user), 201);
    }
}
