<?php

namespace App\Http\Controllers;

use App\Post;
use App\Board;
use Illuminate\Http\Request;
use App\Http\Resources\Post as PostResource;
use Carbon\Carbon;

class PostController extends Controller
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
    public function index(int $id)
    {
        $posts = Board::find($id)->posts;

        return response(PostResource::collection($posts), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'boardId' => 'required|integer|exists:boards,id',
            'title' => 'required|regex:/(?i)(?!^edit$)(^.*$)/',
            'body' => 'required',
        ]);

        $user = auth()->user();

        $post = $user->posts()->save(factory(Post::class)->make([
            'board_id' => $request->boardId,
            'title' => $request->title,
            'body' => $request->title,
        ]));

        return response(new PostResource($post), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id)
    {
        $request->validate([
            'body' => 'required',
        ]);

        $user = auth()->user();
        
        if($post = $user->posts()->find($id))
        {
            $post->title = $request->title;
            $post->body = $request->body;
            $post->updated_at = Carbon::now();

            $post->save();

            return response(new PostResource($post), 200);
        }
        else
        {
            return response(json_encode(['error' => 'This post isn\'t yours']), 401);
        }
    }
}
