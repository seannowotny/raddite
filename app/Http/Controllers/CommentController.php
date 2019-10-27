<?php

namespace App\Http\Controllers;

use App\Post;
use App\Comment;
use Illuminate\Http\Request;
use App\Http\Resources\Comment as CommentResource;
use Carbon\Carbon;

class CommentController extends Controller
{
    function __construct()
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
        $comments = Post::find($id)->comments->whereNull('comment_id');

        return response(CommentResource::collection($comments), 200);
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
            'postId' => 'required|integer|exists:posts,id',
            'commentId' => 'integer|exists:comments,id|nullable',
            'content' => 'required|min:3',
        ]);

        $user = auth()->user();

        $post = Post::find($request->postId);
        $comment = $user->comments()->save(factory(Comment::class)->make([
            'content' => $request->content,
            'post_id' => $post->id,
        ]));

        return response(new CommentResource($comment), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id)
    {
        $request->validate([
            'content' => 'required|min:3',
        ]);

        $user = auth()->user();
        
        if($comment = $user->comments->find($id))
        {
            $comment->content = $request->content;
            $comment->updated_at = Carbon::now();
            $comment->save();

            return response(new CommentResource($comment), 200);
        }
        else
        {
            return response(json_encode(['error' => 'This comment isn\'t yours']), 401);
        }    
    }
}
